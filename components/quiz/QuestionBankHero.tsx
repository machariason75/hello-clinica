import Image from "next/image";
import { BookOpenCheck, Timer, BarChart3 } from "lucide-react";

/**
 * Question Bank hero strip.
 *
 * Uses the same medic photos and tilted arrangement as the admin dashboard —
 * that collage reads well on phones, so it's reused here rather than reinvented.
 * Stays visible on every screen size (no laptop-only hiding).
 */
export function QuestionBankHero() {
  const photos = [
    { src: "/images/medics/medic-2.jpg", tilt: "rotate-2" },
    { src: "/images/medics/medic-5.jpg", tilt: "-rotate-2" },
    { src: "/images/medics/medic-3.jpg", tilt: "rotate-1" },
  ];

  const points = [
    { Icon: BookOpenCheck, label: "Practice + real exams" },
    { Icon: Timer, label: "Timed or study mode" },
    { Icon: BarChart3, label: "Topic breakdowns & rationales" },
  ];

  return (
    <div className="mb-12">
      <div aria-hidden="true" className="mx-auto flex max-w-3xl gap-3 sm:gap-4">
        {photos.map((p) => (
          <div
            key={p.src}
            className={`relative aspect-[4/3] flex-1 overflow-hidden rounded-2xl shadow-card ring-1 ring-black/5 transition-transform duration-300 hover:rotate-0 ${p.tilt}`}
          >
            <Image
              src={p.src}
              alt=""
              fill
              sizes="(max-width: 768px) 32vw, 240px"
              className="object-cover object-top"
            />
          </div>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-2">
        {points.map(({ Icon, label }) => (
          <span key={label} className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
            <Icon className="h-4 w-4 text-coral" aria-hidden="true" />
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
