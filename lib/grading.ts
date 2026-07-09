/** US letter grade from a percentage score (standard 10-point scale). */
export function letterGrade(score: number): string {
  if (score >= 97) return "A+";
  if (score >= 93) return "A";
  if (score >= 90) return "A-";
  if (score >= 87) return "B+";
  if (score >= 83) return "B";
  if (score >= 80) return "B-";
  if (score >= 77) return "C+";
  if (score >= 73) return "C";
  if (score >= 70) return "C-";
  if (score >= 67) return "D+";
  if (score >= 63) return "D";
  if (score >= 60) return "D-";
  return "F";
}

/** Tailwind text color for a grade band. */
export function gradeColor(score: number): string {
  if (score >= 80) return "text-emerald-600";
  if (score >= 70) return "text-medical-blue";
  if (score >= 60) return "text-amber-600";
  return "text-red-500";
}

export function formatDuration(seconds: number): string {
  if (!seconds || seconds < 1) return "—";
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  if (m === 0) return `${s}s`;
  return `${m}m ${s}s`;
}
