import { Container } from "@/components/ui/container";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Refund & Cancellation",
  description: "Refund and Cancellation Policy for Mahagathe",
};

export default function RefundPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-[var(--ink-strong)] mb-8">
              Refund & Cancellation Policy
            </h1>
            <div className="prose prose-lg max-w-none space-y-6 text-[var(--ink-default)]">
              <p className="text-lg">
                Last updated: {new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <section>
                <h2 className="text-2xl font-bold text-[var(--ink-strong)] mt-8 mb-4">
                  Donation Processing
                </h2>
                <p>
                  All donations are processed through our main donation portal
                  at{" "}
                  <a
                    href={siteConfig.donationUrl}
                    className="text-[var(--brand-rose-700)] underline hover:text-[var(--ink-black)]"
                  >
                    mahagathe.org/donation-programs/
                  </a>
                  . The refund and cancellation policies for donations are
                  governed by the terms and conditions of that platform.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-[var(--ink-strong)] mt-8 mb-4">
                  Refund Requests
                </h2>
                <p>
                  If you have made a donation in error or wish to request a
                  refund, please contact us at{" "}
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-[var(--brand-rose-700)] underline hover:text-[var(--ink-black)]"
                  >
                    {siteConfig.contact.email}
                  </a>{" "}
                  with the following information:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Your name and contact information</li>
                  <li>Date and amount of donation</li>
                  <li>Transaction reference number (if available)</li>
                  <li>Reason for refund request</li>
                </ul>
                <p className="mt-4">
                  We will review your request and respond within 5-7 business
                  days. Refunds, if approved, will be processed according to the
                  policies of the payment processor used on the donation portal.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-[var(--ink-strong)] mt-8 mb-4">
                  Contact Us
                </h2>
                <p>
                  For questions about refunds or cancellations, please contact
                  us at{" "}
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-[var(--brand-rose-700)] underline hover:text-[var(--ink-black)]"
                  >
                    {siteConfig.contact.email}
                  </a>
                  .
                </p>
              </section>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

