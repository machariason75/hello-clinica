import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { TestimonialsCarousel } from "@/components/sections/TestimonialsCarousel";
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
        <div className="mt-12">
          <TestimonialsCarousel data={testimonials} />
        </div>
      </Container>
    </section>
  );
}
