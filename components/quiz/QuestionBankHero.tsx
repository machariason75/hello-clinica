import Image from "next/image";
import { BookOpenCheck, Timer, BarChart3 } from "lucide-react";

/**
 * Question Bank hero strip.
 *
 * A small photo collage anchored by the NCLEX study photo, echoing the accent
 * photos on the admin dashboard so the paid section feels considered rather than
 * bare. Unlike the admin version, this stays visible on phones — it just reflows
 * from an offset collage into an even row.
 */
export function QuestionBankHero() {
  const photos = [
    { src: "/images/study-nclex.jpg", alt: "", tilt: "lg:-rotate-2", span: "lg:col-span-2" },
    { src: "/images/medics/medic-1.jpg", alt: "", tilt: "lg:rotate-2", span: "" },
    { src: "/images/medics/medic-6.jpg", alt: "", tilt: "lg:-rotate-1", span: "" },
  ];

  const points = [
    { Icon: BookOpenCheck, label: "Practice + real exams" },
    { Icon: Timer, label: "Timed or study mode" },
    { Icon: BarChart3, label: "Topic breakdowns & rationales" },
  ];

  return (
    <div className="mb-12">
      {/* Photos — collage on desktop, even row on phones */}
      <div aria-hidden="true" className="grid grid-cols-3 gap-3 sm:gap-4 lg:grid-cols-4">
        {photos.map((p) => (
          <div
            key={p.src}
            className={`relative h-24 overflow-hidden rounded-2xl shadow-card ring-1 ring-black/5 transition-transform duration-300 hover:rotate-0 sm:h-32 lg:h-40 ${p.tilt} ${p.span}`}
          >
            <Image
              src={p.src}
              alt={p.alt}
              fill
              sizes="(max-width: 640px) 33vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* What you get — keeps the strip informative, not just decorative */}
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
