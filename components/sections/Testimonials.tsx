import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { testimonials } from "@/lib/data/homepage-content";

export function Testimonials() {
  return (
    <section className="section">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="Stories from students we've supported"
          intro="Real reflections from people who used Hello Clinica's guidance to move forward with confidence."
        />
        <StaggerGroup className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <StaggerItem key={t.studentName} className="h-full">
              <TestimonialCard data={t} className="h-full" />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
