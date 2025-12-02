import { SkipLink } from "@/components/skip-link";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Programs } from "@/components/programs";
import { Campaign } from "@/components/campaign";
import { Gallery3D } from "@/components/gallery-3d";
import { DonateBand } from "@/components/donate-band";
import { Footer } from "@/components/footer";
import { MobileDonateBar } from "@/components/mobile-donate-bar";

export default function HomePage() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main" className="md:pb-0">
        <div id="top" />
        <Hero />
        <Programs />
        <About />
        <Campaign />
        <Gallery3D />
        <DonateBand />
      </main>
      <Footer />
    </>
  );
}
