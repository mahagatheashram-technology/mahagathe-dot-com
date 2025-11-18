import { SkipLink } from "@/components/skip-link";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Programs } from "@/components/programs";
import { Activities } from "@/components/activities";
import { DonateBand } from "@/components/donate-band";
import { Footer } from "@/components/footer";
import { MobileDonateBar } from "@/components/mobile-donate-bar";

export default function HomePage() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main" className="pb-20 md:pb-0">
        <div id="top" />
        <Hero />
        <About />
        <Programs />
        <Activities />
        <DonateBand />
      </main>
      <Footer />
      <MobileDonateBar />
    </>
  );
}
