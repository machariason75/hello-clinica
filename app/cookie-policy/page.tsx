import type { Metadata } from "next";
import { LegalPage } from "@/components/common/LegalPage";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Cookie Policy",
  description: "How Hello Clinica uses cookies and similar technologies.",
  path: "/cookie-policy",
});

export default function CookiePolicyPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      intro="This policy explains how Hello Clinica uses cookies and similar technologies on our website."
      lastUpdated="January 2026"
      sections={[
        {
          heading: "What cookies are",
          body: [
            "Cookies are small text files placed on your device that help websites function and remember information about your visit.",
          ],
        },
        {
          heading: "How we use cookies",
          body: [
            "We use essential cookies to keep the site secure and working properly. With your consent, we may also use analytics cookies to understand how the site is used so we can improve it.",
          ],
        },
        {
          heading: "Managing cookies",
          body: [
            "You can control or delete cookies through your browser settings. Disabling some cookies may affect how parts of the site work.",
          ],
        },
        {
          heading: "Contact us",
          body: ["If you have questions about our use of cookies, please reach out through our contact page."],
        },
      ]}
    />
  );
}
