import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { advisingServices } from "@/lib/data/homepage-content";

/** Homepage advising teaser: two featured services + a link to the full list. */
const FEATURED = ["Exam Coaching", "Academic Support"];

export function AdvisingServices() {
  const services = advisingServices.filter((s) => FEATURED.includes(s.title));
  return (
    <section className="section">
      <Container>
        <SectionHeading
          eyebrow="Advising Services"
          intro="Work one-on-one with advisors who tailor their guidance to your goals, your stage, and your story."
        />
        <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <StaggerItem key={service.title} className="h-full">
              <ServiceCard data={service} className="h-full" />
            </StaggerItem>
          ))}
        </StaggerGroup>
        <div className="mt-10 text-center">
          <Button asChild variant="secondary">
            <Link href="/advising">
              View all advising services
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
