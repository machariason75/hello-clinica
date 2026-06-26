import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { advisingServices } from "@/lib/data/homepage-content";

export function AdvisingServices() {
  return (
    <section className="section">
      <Container>
        <SectionHeading
          eyebrow="Advising Services"
          title="Personalized support when it matters most"
          intro="Work one-on-one with advisors who tailor their guidance to your goals, your stage, and your story."
        />
        <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2">
          {advisingServices.map((service) => (
            <StaggerItem key={service.title} className="h-full">
              <ServiceCard data={service} className="h-full" />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
