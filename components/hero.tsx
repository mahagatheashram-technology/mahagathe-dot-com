"use client";

import React, { useCallback, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const slides = [
  {
    id: "bhandara",
    title: "Bhandara",
    description: "Providing nourishing meals to schoolchildren, villagers, and those in need, ensuring well-being, dignity, and harmony through Annadāna, the highest service.",
    image: "/program-bhandara.png",
  },
  {
    id: "ayuri",
    title: "Ayuri",
    description: "Caring for the elderly, sick, and destitute is an integral part Sanatana Dharma. We provide old age homes with food, infrastructure, medicines, healthcare, and dignity through selfless service.",
    image: "/program-ayuri.png",
  },
  {
    id: "samriddhi",
    title: "Samriddhi",
    description: "Samriddhi uplifts the underprivileged through emergency relief, livelihood support, annadāna, winter aid, and environmental efforts—restoring dignity, harmony, and balance in the spirit of Dharma.",
    image: "/program-samriddhi.png",
  },
  {
    id: "adhyaya",
    title: "Adhyaya",
    description: "Uplifts underprivileged children through education by funding teachers, providing resources, and nurturing wisdom—ensuring knowledge prospers and transforms lives.",
    image: "/program-adhyaya.png",
  },
];

export function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section
      id="hero"
      className="relative w-full bg-gradient-to-b from-[var(--brand-maroon-900)] from-0% via-[var(--brand-maroon-900)] via-30% to-[var(--mahagathe-red)] to-100% pt-36 pb-12 md:pt-40 md:pb-16"
    >
      <div className="w-full max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center gap-6">

          {/* Carousel Container - Distinct from background */}
          <div className="relative w-full aspect-[16/9] md:aspect-[3.5/1] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <div className="h-full w-full" ref={emblaRef}>
              <div className="flex h-full w-full">
                {slides.map((slide) => (
                  <div className="relative h-full w-full flex-[0_0_100%]" key={slide.id}>
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-cover"
                      priority
                    />
                    {/* Subtle overlay for image depth, but text is NOT here */}
                    <div className="absolute inset-0 bg-black/10" />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons - On the image */}
            <button
              onClick={scrollPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/30 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black/50 transition-all duration-300 z-10 group"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
            </button>

            <button
              onClick={scrollNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/30 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black/50 transition-all duration-300 z-10 group"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Text Content - In the "red gradiented space" below the image */}
          <div className="text-center w-full max-w-5xl mx-auto space-y-6 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight drop-shadow-lg">
                {slides[selectedIndex].title}
              </h1>
              <p className="text-lg md:text-xl text-white/95 leading-relaxed font-normal max-w-4xl mx-auto">
                {slides[selectedIndex].description}
              </p>
            </div>

            <Link
              href={siteConfig.donationUrl}
              className="inline-block"
            >
              <Button
                size="lg"
                className="bg-white text-[var(--brand-maroon-900)] hover:bg-white/90 font-bold text-lg px-10 py-6 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
              >
                Donate Now
              </Button>
            </Link>

            {/* Indicators */}
            <div className="flex justify-center gap-3 pt-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    index === selectedIndex
                      ? "w-8 bg-white"
                      : "w-2 bg-white/30 hover:bg-white/50"
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
