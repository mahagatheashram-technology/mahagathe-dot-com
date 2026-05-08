"use client";

import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/ui/container";
import { useScrollAnimation } from "@/lib/use-scroll-animation";

export function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      id="about"
      className={`overflow-hidden py-40 md:py-64 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        background:
          "linear-gradient(to bottom, var(--white), var(--cream-60) 150px, var(--cream-60) calc(100% - 150px), var(--white))",
      }}
      aria-labelledby="about-heading"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="space-y-12 animate-slide-up">
            <div className="space-y-4 text-center">
              <h2
                id="about-heading"
                className="text-4xl md:text-5xl font-serif font-bold text-[var(--ink-strong)]"
              >
                About us
              </h2>
            </div>

            <div className="bg-[var(--white)] rounded-3xl p-8 md:p-10 shadow-lg shadow-[var(--brand-maroon-900)]/5 hover:shadow-xl hover:shadow-[#f60000]/40 hover:-translate-y-1 transition-all duration-300 border border-[var(--neutral-200)]/50">
              <div className="space-y-6 text-[var(--ink-default)] text-base md:text-lg leading-relaxed font-sans font-medium">
                <p>
                  The Mahagathe Foundation is a global movement dedicated to
                  reviving and propagating the timeless wisdom of Sanatana
                  Dharma, integrating its teachings into modern life. Rooted in
                  the profound knowledge of Vedic scriptures, Upanishads,
                  Itihasas, and Puranas, the foundation aims to empower
                  individuals with spiritual awareness, intellectual clarity,
                  and a strong Dharmic foundation.
                </p>
                <p>
                  The core vision and mission of Mahagathe Foundation are to
                  create a caring and compassionate environment, accepting the
                  continuity of existence. Their objective is to help people
                  understand Sanatana Dharma in a contemporary way, guided by a
                  Living Guru. They strive to build a global community where
                  Dharmic values shape ethical leadership, compassionate living,
                  and societal progress.
                </p>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="relative animate-fade-in animation-delay-200">
            <div className="relative aspect-square max-w-[500px] mx-auto">
              <div className="absolute inset-0 bg-[var(--brand-rose-700)]/5 transform rotate-6 scale-105 rounded-[40px]" />
              <Image
                src="/images/about_us_image.png"
                alt="Mahagathe Foundation Activities"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
