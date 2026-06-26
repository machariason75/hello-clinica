"use client";

/**
 * AmbientBackground — one continuous premium canvas shared by every page.
 *
 * A fixed, full-viewport layer that sits behind all content (-z-10). It layers
 * very soft blue + coral mesh lighting, a few slowly drifting blurred blobs,
 * and an extremely faint dot grid. Opacity stays low so it is felt rather than
 * noticed. Pointer-events are disabled so it never interferes with the UI.
 * Motion is paused automatically for reduced-motion users (global safety net).
 */
export function AmbientBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base soft-mesh lighting */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "#F8FAFC",
          backgroundImage: [
            "radial-gradient(60% 55% at 14% 8%, rgba(249,115,96,0.12), transparent 70%)",
            "radial-gradient(55% 50% at 86% 6%, rgba(37,99,235,0.10), transparent 70%)",
            "radial-gradient(50% 50% at 82% 88%, rgba(249,115,96,0.09), transparent 72%)",
            "radial-gradient(48% 48% at 8% 92%, rgba(37,99,235,0.08), transparent 72%)",
            "radial-gradient(42% 42% at 50% 48%, rgba(165,227,240,0.10), transparent 70%)",
          ].join(","),
        }}
      />

      {/* Slowly drifting blurred blobs (the 'alive' layer) */}
      <span className="ambient-blob absolute -left-32 -top-24 h-[34rem] w-[34rem] rounded-full bg-[#F97360]/10 blur-[120px]" />
      <span className="ambient-blob ambient-blob--slow absolute -right-40 top-10 h-[38rem] w-[38rem] rounded-full bg-[#2563EB]/10 blur-[130px]" />
      <span className="ambient-blob ambient-blob--reverse absolute bottom-[-12rem] left-1/3 h-[32rem] w-[32rem] rounded-full bg-[#FFD9C7]/30 blur-[120px]" />

      {/* Extremely faint dot grid for texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(#2563EB 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />
    </div>
  );
}
