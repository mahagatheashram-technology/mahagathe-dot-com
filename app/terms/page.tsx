import { Container } from "@/components/ui/container";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Terms of Use",
  description: "Terms of Use for Mahagathe",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-[var(--ink-strong)] mb-8">
              Terms of Use
            </h1>
            <div className="prose prose-lg max-w-none space-y-6 text-[var(--ink-default)]">
              <p className="text-lg">
                Last updated:{" "}
                {new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <section>
                <h2 className="text-2xl font-bold text-[var(--ink-strong)] mt-8 mb-4">
                  Acceptance of Terms
                </h2>
                <p>
                  By accessing and using ayuri.org, you accept and agree to
                  be bound by the terms and provision of this agreement.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-[var(--ink-strong)] mt-8 mb-4">
                  Use License
                </h2>
                <p>
                  Permission is granted to temporarily view the materials on
                  ayuri.org for personal, non-commercial transitory viewing
                  only. This is the grant of a license, not a transfer of title.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-[var(--ink-strong)] mt-8 mb-4">
                  Donations
                </h2>
                <p>
                  All donations are processed through our external donation
                  portal at{" "}
                  <a
                    href={siteConfig.donationUrl}
                    className="text-[var(--brand-rose-700)] underline hover:text-[var(--ink-black)]"
                  >
                    mahagathe.org/donation-programs/
                  </a>
                  . The terms and conditions for donations are governed by the
                  terms of service of that platform.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-[var(--ink-strong)] mt-8 mb-4">
                  Disclaimer
                </h2>
                <p>
                  The materials on ayuri.org are provided on an &quot;as
                  is&quot; basis. Mahagathe makes no warranties, expressed or
                  implied, and hereby disclaims and negates all other
                  warranties.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-[var(--ink-strong)] mt-8 mb-4">
                  Contact Us
                </h2>
                <p>
                  If you have questions about these Terms of Use, please contact
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
