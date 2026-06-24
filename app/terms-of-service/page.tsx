import type { Metadata } from "next";
import { LegalPage } from "@/components/common/LegalPage";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description: "The terms that govern your use of the Hello Clinica website and services.",
  path: "/terms-of-service",
});

export default function TermsOfServicePage() {
  return (
    <LegalPage
      title="Terms of Service"
      intro="These terms govern your use of the Hello Clinica website and the services we provide."
      lastUpdated="January 2026"
      sections={[
        {
          heading: "Acceptance of terms",
          body: [
            "By accessing or using Hello Clinica, you agree to these Terms of Service. If you do not agree, please do not use the site or our services.",
          ],
        },
        {
          heading: "Use of our services",
          body: [
            "Our resources and advising are intended to support your educational journey. You agree to use them lawfully and not to misuse, copy, or redistribute our content without permission.",
          ],
        },
        {
          heading: "Educational guidance, not guarantees",
          body: [
            "Our advising and resources are educational in nature. While we strive to provide high-quality guidance, we cannot guarantee any specific admissions or career outcome.",
          ],
        },
        {
          heading: "Intellectual property",
          body: [
            "All content on this site, including text, graphics, and materials, is owned by Hello Clinica or its licensors and is protected by applicable laws.",
          ],
        },
        {
          heading: "Changes to these terms",
          body: [
            "We may update these terms from time to time. Continued use of the site after changes take effect constitutes acceptance of the revised terms.",
          ],
        },
        {
          heading: "Contact us",
          body: ["Questions about these terms can be sent through our contact page."],
        },
      ]}
    />
  );
}
