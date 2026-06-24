import type { Metadata } from "next";
import { LegalPage } from "@/components/common/LegalPage";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How Hello Clinica collects, uses, and protects your personal information.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="Your privacy matters to us. This policy explains what information we collect and how we use it."
      lastUpdated="January 2026"
      sections={[
        {
          heading: "Information we collect",
          body: [
            "We collect information you choose to provide — such as your name, email address, phone number, and the details you include when you contact us or subscribe to our newsletter.",
            "We also collect limited technical information automatically, such as your IP address and basic usage data, to keep the site secure and improve how it works.",
          ],
        },
        {
          heading: "How we use your information",
          body: [
            "We use your information to respond to your inquiries, deliver advising services and resources you request, send updates you've subscribed to, and improve our offerings.",
            "We do not sell your personal information.",
          ],
        },
        {
          heading: "How we store and protect it",
          body: [
            "Your information is stored securely, and we apply reasonable safeguards to protect it against unauthorized access, alteration, or disclosure.",
          ],
        },
        {
          heading: "Your choices",
          body: [
            "You can unsubscribe from our newsletter at any time using the link in our emails. You may also request access to, correction of, or deletion of your personal information by contacting us.",
          ],
        },
        {
          heading: "Contact us",
          body: [
            "If you have questions about this Privacy Policy or how we handle your information, please reach out through our contact page.",
          ],
        },
      ]}
    />
  );
}
