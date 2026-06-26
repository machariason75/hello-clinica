import { Container } from "@/components/common/Container";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { trustStats } from "@/lib/data/homepage-content";

/** Trust indicators band — outcome-style statistics. */
export function TrustIndicators() {
  return (
    <section className="border-y border-white/40 bg-white/55 backdrop-blur-sm" aria-label="Hello Clinica at a glance">
      <Container className="py-12 lg:py-16">
        <StaggerGroup className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {trustStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <StaggerItem key={stat.label} className="text-center">
                <span className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-bg text-medical-blue">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <p className="text-3xl font-bold text-deep-blue lg:text-4xl">{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </Container>
    </section>
  );
}
