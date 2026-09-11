import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { TestimonialsCarousel } from "@/components/sections/TestimonialsCarousel";
import { getTestimonials } from "@/lib/queries/testimonials";

export async function Testimonials() {
  const testimonials = await getTestimonials();
  return (
    <section className="section">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="Stories from students we've supported"
        />
        <div className="mt-12">
          <TestimonialsCarousel data={testimonials} />
        </div>
      </Container>
    </section>
  );
}

