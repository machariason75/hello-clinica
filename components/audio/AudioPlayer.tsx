"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Rewind,
  FastForward,
  ListMusic,
  ExternalLink,
  Check,
  ArrowLeft,
  Gauge,
} from "lucide-react";
import type { PlayableTrack } from "@/lib/queries/audio";

/**
 * Audiobook player.
 *
 * Speed control is native to the browser (audio.playbackRate), so it costs
 * nothing and works everywhere — unlike video quality switching, which would
 * need multiple encoded files.
 *
 * Position is reported back every 10 seconds (and on pause/unmount) rather than
 * continuously: enough to resume accurately, without hammering the database.
 */

const SPEEDS = [0.75, 1, 1.25, 1.5, 1.75, 2];

function fmt(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  return h > 0
    ? `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`
    : `${m}:${String(s).padStart(2, "0")}`;
}

export function AudioPlayer({
  bookTitle,
  author,
  coverImage,
  tracks,
  backHref,
  signedIn,
}: {
  bookTitle: string;
  author: string;
  coverImage: string | null;
  tracks: PlayableTrack[];
  backHref: string;
  signedIn: boolean;
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [showList, setShowList] = useState(false);
  const [done, setDone] = useState<Set<string>>(
    () => new Set(tracks.filter((t) => t.completed).map((t) => t.id))
  );

  const track = tracks[index];
  const hosted = track?.isHosted ?? false;

  /** Report position to the server (fire-and-forget). */
  const save = useCallback(
    (completed = false) => {
      if (!signedIn || !track) return;
      const el = audioRef.current;
      const pos = el ? Math.floor(el.currentTime) : 0;
      void fetch("/api/audio-progress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ trackId: track.id, positionSeconds: pos, completed }),
      }).catch(() => {});
    },
    [signedIn, track]
  );

  // Resume where they left off when the track changes.
  useEffect(() => {
    const el = audioRef.current;
    if (!el || !track) return;
    el.playbackRate = speed;
    if (track.resumeAt > 0 && !track.completed) {
      el.currentTime = track.resumeAt;
      setCurrent(track.resumeAt);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  // Periodic save, plus a final save when leaving.
  useEffect(() => {
    if (!playing) return;
    const t = setInterval(() => save(), 10000);
    return () => clearInterval(t);
  }, [playing, save]);

  useEffect(() => {
    return () => save();
  }, [save]);

  function toggle() {
    const el = audioRef.current;
    if (!el) return;
    if (playing) {
      el.pause();
      save();
    } else {
      void el.play();
    }
  }

  function nudge(seconds: number) {
    const el = audioRef.current;
    if (!el) return;
    el.currentTime = Math.min(Math.max(0, el.currentTime + seconds), el.duration || 0);
  }

  function go(next: number) {
    if (next < 0 || next >= tracks.length) return;
    save();
    setIndex(next);
    setCurrent(0);
    setPlaying(false);
  }

  function onEnded() {
    if (track) setDone((d) => new Set(d).add(track.id));
    save(true);
    if (index < tracks.length - 1) {
      setIndex(index + 1);
      setCurrent(0);
      // autoplay the next chapter
      setTimeout(() => void audioRef.current?.play(), 50);
    } else {
      setPlaying(false);
    }
  }

  function cycleSpeed() {
    const next = SPEEDS[(SPEEDS.indexOf(speed) + 1) % SPEEDS.length];
    setSpeed(next);
    if (audioRef.current) audioRef.current.playbackRate = next;
  }

  if (!track) {
    return (
      <div className="surface-card p-10 text-center">
        <p className="text-deep-blue/60">No audio has been added for this book yet.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl">
      <Link
        href={backHref}
        className="focus-ring mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-medical-blue hover:text-coral"
      >
        <ArrowLeft className="h-4 w-4" /> Back to the book
      </Link>

      <div className="surface-card overflow-hidden">
        {/* Now playing */}
        <div className="flex items-center gap-4 border-b border-deep-blue/10 bg-gradient-to-r from-[#F3E9DD]/70 to-white p-5 sm:p-6">
          <div className="relative h-20 w-16 shrink-0 overflow-hidden rounded-lg bg-medical-blue/10 shadow-card sm:h-24 sm:w-20">
            {coverImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={coverImage} alt="" className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <ListMusic className="h-6 w-6 text-medical-blue/40" />
              </div>
            )}
          </div>
          <div className="min-w-0">
            <p className="truncate text-xs uppercase tracking-wide text-coral">Now playing</p>
            <h1 className="truncate text-lg font-semibold text-deep-blue">{track.title}</h1>
            <p className="truncate text-sm text-deep-blue/60">
              {bookTitle} · {author}
            </p>
            {track.narrator && (
              <p className="truncate text-xs text-deep-blue/45">Narrated by {track.narrator}</p>
            )}
          </div>
        </div>

        {/* External tracks can't be controlled by us — send them out cleanly */}
        {!hosted ? (
          <div className="p-8 text-center">
            <p className="text-sm text-deep-blue/70">
              This chapter is hosted elsewhere. It opens in a new tab, on the provider&apos;s own player.
            </p>
            <a
              href={track.externalUrl ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring mt-4 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-coral to-[#E8613F] px-5 py-2.5 text-sm font-semibold text-white"
            >
              Open audiobook <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        ) : (
          <div className="p-5 sm:p-6">
            <audio
              ref={audioRef}
              src={`/api/read-audio?trackId=${track.id}`}
              preload="metadata"
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              onTimeUpdate={(e) => setCurrent(e.currentTarget.currentTime)}
              onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
              onEnded={onEnded}
            />

            {/* Seek bar */}
            <input
              type="range"
              min={0}
              max={duration || track.durationSeconds || 100}
              value={current}
              onChange={(e) => {
                const v = Number(e.target.value);
                setCurrent(v);
                if (audioRef.current) audioRef.current.currentTime = v;
              }}
              aria-label="Seek"
              className="focus-ring h-1.5 w-full cursor-pointer appearance-none rounded-full bg-deep-blue/15 accent-coral"
            />
            <div className="mt-1.5 flex justify-between text-xs tabular-nums text-deep-blue/50">
              <span>{fmt(current)}</span>
              <span>{fmt(duration || track.durationSeconds || 0)}</span>
            </div>

            {/* Controls */}
            <div className="mt-4 flex items-center justify-center gap-2 sm:gap-3">
              <button
                onClick={() => go(index - 1)}
                disabled={index === 0}
                aria-label="Previous chapter"
                className="focus-ring rounded-xl p-2.5 text-medical-blue transition hover:bg-brand-bg disabled:opacity-30"
              >
                <SkipBack className="h-5 w-5" />
              </button>
              <button
                onClick={() => nudge(-15)}
                aria-label="Back 15 seconds"
                className="focus-ring rounded-xl p-2.5 text-medical-blue transition hover:bg-brand-bg"
              >
                <Rewind className="h-5 w-5" />
              </button>

              <button
                onClick={toggle}
                aria-label={playing ? "Pause" : "Play"}
                className="focus-ring flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-coral to-[#E8613F] text-white shadow-card transition hover:shadow-card-hover"
              >
                {playing ? <Pause className="h-6 w-6" /> : <Play className="ml-0.5 h-6 w-6" />}
              </button>

              <button
                onClick={() => nudge(30)}
                aria-label="Forward 30 seconds"
                className="focus-ring rounded-xl p-2.5 text-medical-blue transition hover:bg-brand-bg"
              >
                <FastForward className="h-5 w-5" />
              </button>
              <button
                onClick={() => go(index + 1)}
                disabled={index >= tracks.length - 1}
                aria-label="Next chapter"
                className="focus-ring rounded-xl p-2.5 text-medical-blue transition hover:bg-brand-bg disabled:opacity-30"
              >
                <SkipForward className="h-5 w-5" />
              </button>
            </div>

            {/* Speed + playlist */}
            <div className="mt-4 flex items-center justify-center gap-2">
              <button
                onClick={cycleSpeed}
                className="focus-ring inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-medical-blue ring-1 ring-deep-blue/10 transition hover:ring-coral/40"
              >
                <Gauge className="h-3.5 w-3.5" /> {speed}×
              </button>
              <button
                onClick={() => setShowList((v) => !v)}
                className="focus-ring inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-medical-blue ring-1 ring-deep-blue/10 transition hover:ring-coral/40"
              >
                <ListMusic className="h-3.5 w-3.5" />
                {showList ? "Hide" : "Chapters"} ({tracks.length})
              </button>
            </div>

            {!signedIn && (
              <p className="mt-4 text-center text-xs text-deep-blue/45">
                <Link href="/account/login" className="underline hover:text-coral">
                  Sign in
                </Link>{" "}
                to save your place across devices.
              </p>
            )}
          </div>
        )}

        {/* Chapter list */}
        {showList && (
          <ul className="max-h-72 overflow-y-auto border-t border-deep-blue/10 divide-y divide-deep-blue/5">
            {tracks.map((t, i) => (
              <li key={t.id}>
                <button
                  onClick={() => {
                    go(i);
                    setShowList(false);
                  }}
                  className={
                    "focus-ring flex w-full items-center gap-3 px-5 py-3 text-left transition hover:bg-[#F3E9DD]/40 " +
                    (i === index ? "bg-[#F3E9DD]/60" : "")
                  }
                >
                  <span className="w-6 shrink-0 text-xs tabular-nums text-deep-blue/40">{i + 1}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-medium text-deep-blue">{t.title}</span>
                    {t.durationSeconds ? (
                      <span className="text-xs text-deep-blue/45">{fmt(t.durationSeconds)}</span>
                    ) : null}
                  </span>
                  {done.has(t.id) && <Check className="h-4 w-4 shrink-0 text-emerald-500" />}
                  {!t.isHosted && <ExternalLink className="h-3.5 w-3.5 shrink-0 text-deep-blue/30" />}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
