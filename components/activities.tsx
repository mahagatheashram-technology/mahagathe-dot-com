"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import activitiesData from "@/content/activities.json";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/lib/use-scroll-animation";

export function Activities() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      id="activities"
      className={`py-16 md:py-32 bg-[var(--white)] transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      aria-labelledby="activities-heading"
    >
      <Container maxWidth="narrow">
        <SectionHeading
          title="Moments"
          subtitle="Glimpses of care in action"
          as="h2"
          id="activities-heading"
          className="animate-slide-up"
        />
        <div className="max-w-4xl mx-auto mt-8 md:mt-12 animate-fade-in animation-delay-200">
          <Carousel />
        </div>
      </Container>
    </section>
  );
}

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const total = activitiesData.length;

  const showPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const showNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(showNext, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, showNext]);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Main Image Card */}
      <div className="relative aspect-[4/3] md:aspect-[16/9] rounded-3xl overflow-hidden shadow-xl shadow-[var(--brand-maroon-900)]/10 hover:shadow-2xl hover:shadow-[#f60000]/40 transition-all duration-500 bg-[var(--cream-70)]">
        <div className="absolute inset-0 transition-opacity duration-500">
          <Image
            src={activitiesData[currentIndex].image}
            alt={activitiesData[currentIndex].caption}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-maroon-900)]/90 via-transparent to-transparent opacity-80" />

          {/* Caption */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-center md:text-left">
            <p className="text-white text-lg md:text-xl font-medium tracking-wide animate-slide-up">
              {activitiesData[currentIndex].caption}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      {/* Navigation Buttons - Always visible and high contrast */}
      <button
        onClick={showPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[var(--brand-maroon-900)]/80 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[var(--brand-maroon-900)] hover:scale-110 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 shadow-lg z-10"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={showNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[var(--brand-maroon-900)]/80 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[var(--brand-maroon-900)] hover:scale-110 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 shadow-lg z-10"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {activitiesData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-rose-700)]",
              index === currentIndex
                ? "w-8 bg-[var(--brand-rose-700)]"
                : "w-2 bg-[var(--neutral-200)] hover:bg-[var(--brand-rose-700)]/50"
            )}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentIndex}
          />
        ))}
      </div>
    </div>
  );
}
