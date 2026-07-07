import {
  Stethoscope,
  Pill,
  HeartPulse,
  Brain,
  Activity,
  ClipboardList,
  BookOpenCheck,
  FlaskConical,
  Calculator,
  Baby,
  Syringe,
  ListChecks,
  type LucideIcon,
} from "lucide-react";

/** Maps a stored icon name to a Lucide icon, with a safe default. */
const ICONS: Record<string, LucideIcon> = {
  Stethoscope,
  Pill,
  HeartPulse,
  Brain,
  Activity,
  ClipboardList,
  BookOpenCheck,
  FlaskConical,
  Calculator,
  Baby,
  Syringe,
  ListChecks,
};

export function resolveQuizIcon(name?: string | null): LucideIcon {
  if (name && ICONS[name]) return ICONS[name];
  return BookOpenCheck;
}
