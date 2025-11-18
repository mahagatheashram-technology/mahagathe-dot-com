"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import activitiesData from "@/content/activities.json";

export function Activities() {
  return (
    <section
      id="activities"
      className="py-16 md:py-20 bg-[var(--white)]"
      aria-labelledby="activities-heading"
    >
      <Container maxWidth="narrow">
        <SectionHeading
          title="Moments"
          subtitle="Glimpses of care in action"
          as="h2"
          id="activities-heading"
        />
        <div className="max-w-4xl mx-auto">
          <Carousel />
        </div>
      </Container>
    </section>
  );
}

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const total = activitiesData.length;
  const current = activitiesData[currentIndex];

  const showPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const showNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  return (
    <div className="relative">
      <div className="relative aspect-[16/9] rounded-3xl overflow-hidden border border-[var(--neutral-200)]/60 bg-[var(--cream-70)]">
        <Image
          src={current.image}
          alt={current.caption}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
          loading="lazy"
        />
        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 bg-gradient-to-t from-[var(--ink-black)]/80 via-[var(--ink-black)]/40 to-transparent">
          <p className="text-sm sm:text-base md:text-lg font-medium text-[var(--ink-inverse)]">
            {current.caption}
          </p>
        </div>
      </div>

      <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-3 sm:px-4">
        <button
          type="button"
          onClick={showPrev}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--white)]/90 text-[var(--ink-strong)] shadow-md ring-1 ring-[var(--neutral-200)]/60 backdrop-blur hover:bg-[var(--white)] transition"
          aria-label="Previous moment"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={showNext}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--white)]/90 text-[var(--ink-strong)] shadow-md ring-1 ring-[var(--neutral-200)]/60 backdrop-blur hover:bg-[var(--white)] transition"
          aria-label="Next moment"
        >
          ›
        </button>
      </div>

      <div className="mt-4 flex justify-center gap-1.5">
        {activitiesData.map((activity, index) => (
          <button
            key={activity.id}
            type="button"
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 rounded-full transition-all ${
              index === currentIndex
                ? "w-6 bg-[var(--brand-rose-700)]"
                : "w-2.5 bg-[var(--neutral-200)]"
            }`}
            aria-label={`Go to moment ${index + 1}`}
            aria-current={index === currentIndex}
          />
        ))}
      </div>
    </div>
  );
}
