import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { ResourceCard } from "@/components/cards/ResourceCard";
import { featuredResources } from "@/lib/data/homepage-content";

export function FeaturedResources() {
  return (
    <section className="section">
      <Container>
        <SectionHeading
          eyebrow="Free Resources"
          title="Guides for every step of the journey"
          intro="Practical, no-cost resources covering admissions, essays, interviews, and the experiences that shape a strong application."
        />
        <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredResources.map((resource) => (
            <StaggerItem key={resource.title} className="h-full">
              <ResourceCard data={resource} className="h-full" />
            </StaggerItem>
          ))}
        </StaggerGroup>
        <div className="mt-10 text-center">
          <Button asChild variant="secondary">
            <Link href="/resources">
              View all resources
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
