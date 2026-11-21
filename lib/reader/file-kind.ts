/**
 * Works out what kind of document a stored file really is, so the reader can
 * show it IN THE BROWSER instead of the browser falling back to a download.
 *
 * UploadThing URLs (utfs.io/f/<key>, *.ufs.sh/f/<key>) carry no file extension,
 * and the storage often reports a generic "application/octet-stream" type. So we
 * read the first 64 KB and check the file's signature ("magic bytes"), then fall
 * back to the reported content type and finally the URL extension.
 *
 * No path aliases here: this file is also imported by scripts/audit-reader-files.ts.
 */

export type DocKind =
  | "pdf"
  | "image"
  | "audio"
  | "video"
  | "excel"
  | "word"
  | "powerpoint"
  | "office-legacy" // old .doc / .xls / .ppt (OLE container)
  | "epub"
  | "text"
  | "other";

export type FileKindResult = {
  kind: DocKind;
  /** Correct MIME type to serve the file with, so browsers render it inline. */
  mime: string;
  /** What the storage server reported (for the audit). */
  reportedType: string;
  /** HTTP status of the probe, 0 if the request failed entirely. */
  status: number;
};

const MIME: Record<Exclude<DocKind, "image" | "audio" | "video" | "other" | "text" | "office-legacy">, string> = {
  pdf: "application/pdf",
  excel: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  word: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  powerpoint: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  epub: "application/epub+zip",
};

const GENERIC = /^(application\/octet-stream|binary\/octet-stream|application\/x-download|application\/force-download|application\/zip|application\/x-zip-compressed)?$/;

function startsWith(buf: Uint8Array, sig: number[], offset = 0) {
  if (buf.length < offset + sig.length) return false;
  for (let i = 0; i < sig.length; i++) if (buf[offset + i] !== sig[i]) return false;
  return true;
}

function ascii(buf: Uint8Array, start: number, end: number) {
  let s = "";
  for (let i = start; i < Math.min(end, buf.length); i++) s += String.fromCharCode(buf[i]);
  return s;
}

/** Signature-based detection. Returns null when the bytes are not conclusive. */
export function sniffBytes(buf: Uint8Array): { kind: DocKind; mime: string } | null {
  if (buf.length < 4) return null;

  // PDF may have a few junk bytes before the header; search the first 1 KB.
  if (ascii(buf, 0, 1024).includes("%PDF-")) return { kind: "pdf", mime: MIME.pdf };

  // ZIP container → DOCX / XLSX / PPTX / EPUB
  if (startsWith(buf, [0x50, 0x4b, 0x03, 0x04])) {
    const head = ascii(buf, 0, buf.length);
    if (ascii(buf, 30, 38) === "mimetype" && head.includes("application/epub+zip")) return { kind: "epub", mime: MIME.epub };
    if (head.includes("word/")) return { kind: "word", mime: MIME.word };
    if (head.includes("xl/")) return { kind: "excel", mime: MIME.excel };
    if (head.includes("ppt/")) return { kind: "powerpoint", mime: MIME.powerpoint };
    if (head.includes("application/epub+zip") || head.includes("META-INF/container.xml")) return { kind: "epub", mime: MIME.epub };
    return null; // some other zip — let content type / extension decide
  }

  // Old Office (OLE compound file): .doc / .xls / .ppt — can't tell which from the header.
  if (startsWith(buf, [0xd0, 0xcf, 0x11, 0xe0, 0xa1, 0xb1, 0x1a, 0xe1])) return { kind: "office-legacy", mime: "application/octet-stream" };

  // Images
  if (startsWith(buf, [0x89, 0x50, 0x4e, 0x47])) return { kind: "image", mime: "image/png" };
  if (startsWith(buf, [0xff, 0xd8, 0xff])) return { kind: "image", mime: "image/jpeg" };
  if (ascii(buf, 0, 4) === "GIF8") return { kind: "image", mime: "image/gif" };
  if (ascii(buf, 0, 4) === "RIFF" && ascii(buf, 8, 12) === "WEBP") return { kind: "image", mime: "image/webp" };

  // Audio / video
  if (ascii(buf, 0, 3) === "ID3" || startsWith(buf, [0xff, 0xfb]) || startsWith(buf, [0xff, 0xf3]) || startsWith(buf, [0xff, 0xf2]))
    return { kind: "audio", mime: "audio/mpeg" };
  if (ascii(buf, 0, 4) === "RIFF" && ascii(buf, 8, 12) === "WAVE") return { kind: "audio", mime: "audio/wav" };
  if (ascii(buf, 0, 4) === "OggS") return { kind: "audio", mime: "audio/ogg" };
  if (ascii(buf, 4, 8) === "ftyp") {
    const brand = ascii(buf, 8, 12);
    if (brand.startsWith("M4A")) return { kind: "audio", mime: "audio/mp4" };
    return { kind: "video", mime: "video/mp4" };
  }
  if (startsWith(buf, [0x1a, 0x45, 0xdf, 0xa3])) return { kind: "video", mime: "video/webm" };

  return null;
}

function fromTypeOrExt(ct: string, url: string): { kind: DocKind; mime: string } {
  const u = url.toLowerCase();
  if (ct.includes("pdf") || /\.pdf($|\?)/.test(u)) return { kind: "pdf", mime: MIME.pdf };
  if (ct.includes("epub") || /\.epub($|\?)/.test(u)) return { kind: "epub", mime: MIME.epub };
  if (ct.includes("presentation") || ct.includes("powerpoint") || /\.pptx?($|\?)/.test(u))
    return /\.ppt($|\?)/.test(u) || ct.includes("ms-powerpoint") ? { kind: "office-legacy", mime: ct || "application/vnd.ms-powerpoint" } : { kind: "powerpoint", mime: MIME.powerpoint };
  if (ct.includes("msword") || /\.doc($|\?)/.test(u)) return { kind: "office-legacy", mime: "application/msword" };
  if (ct.includes("wordprocessing") || ct.includes("word") || /\.docx($|\?)/.test(u)) return { kind: "word", mime: MIME.word };
  if (ct.includes("sheet") || ct.includes("excel") || /\.(xlsx|xls)($|\?)/.test(u)) return { kind: "excel", mime: ct || MIME.excel };
  if (ct.includes("csv") || /\.csv($|\?)/.test(u)) return { kind: "excel", mime: "text/csv" };
  if (ct.startsWith("image/") || /\.(png|jpe?g|gif|webp|svg|avif)($|\?)/.test(u)) return { kind: "image", mime: ct || "image/*" };
  if (ct.startsWith("audio/") || /\.(mp3|wav|m4a|aac|ogg|oga)($|\?)/.test(u)) return { kind: "audio", mime: ct || "audio/mpeg" };
  if (ct.startsWith("video/") || /\.(mp4|webm|ogv|mov|m4v)($|\?)/.test(u)) return { kind: "video", mime: ct || "video/mp4" };
  if (ct.startsWith("text/") || /\.(txt|md|rtf|html?)($|\?)/.test(u)) return { kind: "text", mime: "text/plain; charset=utf-8" };
  return { kind: "other", mime: ct || "application/octet-stream" };
}

/** Classify from bytes already in hand (used by /api/read-file). */
export function classify(buf: Uint8Array, reportedType: string, url: string): { kind: DocKind; mime: string } {
  const ct = (reportedType || "").toLowerCase();
  const sniffed = sniffBytes(buf);
  if (sniffed) {
    // Keep a specific reported type for media/images (e.g. image/svg+xml, audio/aac).
    if ((sniffed.kind === "image" || sniffed.kind === "audio" || sniffed.kind === "video") && ct && !GENERIC.test(ct)) {
      return { kind: sniffed.kind, mime: ct };
    }
    return sniffed;
  }
  // Plain text has no signature: accept it when the bytes look like text.
  const guess = fromTypeOrExt(GENERIC.test(ct) ? "" : ct, url);
  if (guess.kind === "other" && buf.length > 0 && looksLikeText(buf)) return { kind: "text", mime: "text/plain; charset=utf-8" };
  return guess;
}

function looksLikeText(buf: Uint8Array) {
  const n = Math.min(buf.length, 4096);
  let bad = 0;
  for (let i = 0; i < n; i++) {
    const b = buf[i];
    if (b === 0) return false;
    if (b < 9 || (b > 13 && b < 32)) bad++;
  }
  return bad / n < 0.02;
}

/**
 * Read at most `limit` bytes from a response, then cancel — so a server that
 * ignores the Range header can't make us pull a 500 MB book.
 */
export async function readHead(res: Response, limit: number): Promise<Uint8Array> {
  if (!res.body) return new Uint8Array(0);
  const reader = res.body.getReader();
  const chunks: Uint8Array[] = [];
  let total = 0;
  while (total < limit) {
    const { done, value } = await reader.read();
    if (done || !value) break;
    chunks.push(value);
    total += value.length;
  }
  reader.cancel().catch(() => {});
  const out = new Uint8Array(Math.min(total, limit));
  let off = 0;
  for (const c of chunks) {
    const take = Math.min(c.length, out.length - off);
    out.set(c.subarray(0, take), off);
    off += take;
    if (off >= out.length) break;
  }
  return out;
}

/** Fetch the first 64 KB of a remote file and classify it. */
export async function detectFileKind(url: string | null | undefined): Promise<FileKindResult> {
  if (!url) return { kind: "other", mime: "application/octet-stream", reportedType: "", status: 0 };
  try {
    const res = await fetch(url, { headers: { Range: "bytes=0-65535" }, cache: "no-store" });
    const reportedType = (res.headers.get("content-type") || "").toLowerCase();
    if (!res.ok) return { kind: "other", mime: "application/octet-stream", reportedType, status: res.status };
    const buf = await readHead(res, 65536);
    const { kind, mime } = classify(buf, reportedType, url);
    return { kind, mime, reportedType, status: res.status };
  } catch {
    return { kind: "other", mime: "application/octet-stream", reportedType: "", status: 0 };
  }
}
