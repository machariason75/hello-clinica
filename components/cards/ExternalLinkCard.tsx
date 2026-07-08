import { ExternalLink as ExternalLinkIcon, LinkIcon } from "lucide-react";

export type ExternalLinkData = {
  title: string;
  url: string;
  description?: string | null;
  thumbnailUrl?: string | null;
  source?: string | null;
};

/**
 * A tagged external educational resource, shown as a rich card with a thumbnail
 * (like a link preview). Opens in a new tab. Matches the site's white floating
 * card aesthetic.
 */
export function ExternalLinkCard({ data }: { data: ExternalLinkData }) {
  const source =
    data.source ||
    (() => {
      try {
        return new URL(data.url).hostname.replace(/^www\./, "");
      } catch {
        return "link";
      }
    })();

  return (
    <a
      href={data.url}
      target="_blank"
      rel="noopener noreferrer"
      className="surface-card-interactive focus-ring group flex h-full flex-col overflow-hidden"
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#F3E9DD]">
        {data.thumbnailUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={data.thumbnailUrl}
            alt=""
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-medical-blue/40">
            <LinkIcon className="h-10 w-10" aria-hidden="true" />
          </div>
        )}
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-deep-blue shadow-sm">
          {source}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="flex items-start gap-1.5 font-semibold text-deep-blue">
          <span className="flex-1">{data.title}</span>
          <ExternalLinkIcon
            className="mt-0.5 h-4 w-4 shrink-0 text-medical-blue/70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </h3>
        {data.description && (
          <p className="text-body mt-2 flex-1 text-muted-foreground">{data.description}</p>
        )}
      </div>
    </a>
  );
}
