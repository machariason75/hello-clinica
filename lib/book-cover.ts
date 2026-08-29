/**
 * Deterministic per-book cover colour. Each book gets one of six muted jewel
 * gradients, chosen by a stable hash of its title — so a given book always
 * shows the same tone (on the catalog, the homepage, the shelves, and its own
 * page), and a shelf naturally alternates into a varied, "library" look.
 */
const COVER_GRADIENTS = [
  "linear-gradient(160deg, #4A2E4D 0%, #3A2440 100%)", // plum
  "linear-gradient(160deg, #1E4E4A 0%, #163C39 100%)", // deep teal
  "linear-gradient(160deg, #3A4466 0%, #2C354F 100%)", // indigo
  "linear-gradient(160deg, #4A5233 0%, #3A4028 100%)", // olive
  "linear-gradient(160deg, #5B2B34 0%, #45212A 100%)", // burgundy
  "linear-gradient(160deg, #274156 0%, #1D3244 100%)", // petrol
];

export function bookCoverGradient(seed: string): string {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return COVER_GRADIENTS[h % COVER_GRADIENTS.length];
}
