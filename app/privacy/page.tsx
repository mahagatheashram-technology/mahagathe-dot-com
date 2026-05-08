import { Container } from "@/components/ui/container";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Mahagathe",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-[var(--ink-strong)] mb-8">
              Privacy Policy
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
                  Information We Collect
                </h2>
                <p>
                  Mahagathe.com is a static informational website. We do not
                  collect personal information through this website. If you
                  contact us via email or WhatsApp, we will use the information
                  you provide solely to respond to your inquiry.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-[var(--ink-strong)] mt-8 mb-4">
                  Donations
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
                  . The privacy and data handling practices for donations are
                  governed by the privacy policy of that platform.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-[var(--ink-strong)] mt-8 mb-4">
                  Analytics
                </h2>
                <p>
                  We use Vercel Analytics, which is a privacy-friendly,
                  cookieless analytics service. It does not collect personal
                  information or use cookies.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-[var(--ink-strong)] mt-8 mb-4">
                  Contact Us
                </h2>
                <p>
                  If you have questions about this Privacy Policy, please
                  contact us at{" "}
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
