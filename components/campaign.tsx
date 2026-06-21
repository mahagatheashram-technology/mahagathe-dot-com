"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { DonationModal } from "@/components/donation-modal";
import { siteConfig } from "@/lib/site-config";
import { Tag, Calendar, MessageSquare } from "lucide-react";
import { useScrollAnimation } from "@/lib/use-scroll-animation";
import { cn } from "@/lib/utils";

export function Campaign() {
  const { ref, isVisible } = useScrollAnimation();
  const { campaign } = siteConfig;
  const percentage = Math.min(
    100,
    Math.round((campaign.raised / campaign.goal) * 100)
  );
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

  return (
    <section
      ref={ref}
      id="campaign"
      className={cn(
        "pt-6 md:pt-10 pb-24 md:pb-32 bg-[var(--white)] transition-all duration-1000",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
    >
      <Container>
        <SectionHeading title="Active Campaign" className="mb-12 md:mb-16" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Image & Description */}
          <div className="lg:col-span-7 flex flex-col h-full">
            <div className="relative aspect-video w-full overflow-hidden rounded-3xl shadow-xl shadow-[var(--brand-maroon-900)]/10 hover:shadow-2xl hover:shadow-[#f60000]/20 transition-all duration-500 mb-8">
              <Image
                src={campaign.image}
                alt={campaign.title}
                fill
                sizes="(max-width: 1024px) 100vw, 700px"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="space-y-4 flex-grow">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-[var(--brand-maroon-900)]">
                {campaign.title}
              </h3>
              <p className="text-lg text-[var(--neutral-700)] leading-relaxed">
                {campaign.description}
              </p>
            </div>

            {/* Meta Tags */}
            <div className="flex flex-wrap gap-6 text-sm font-medium text-[var(--neutral-600)] pt-6 border-t border-[var(--neutral-200)] mt-8">
              <div className="flex items-center gap-2">
                <Tag className="w-5 h-5 text-[var(--brand-rose-500)]" />
                <span>Cause: {campaign.cause}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[var(--brand-rose-500)]" />
                <span>Started: {campaign.startDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[var(--brand-rose-500)]" />
                <span>Ends: {campaign.endDate}</span>
              </div>
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[var(--brand-rose-700)] hover:text-[var(--brand-maroon-900)] transition-colors"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Message Campaign Owner</span>
              </a>
            </div>
          </div>

          {/* Right Column: Metrics Card */}
          <div className="lg:col-span-5 h-full">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[var(--neutral-100)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-300 h-full flex flex-col justify-evenly">
              <div className="space-y-8">
                {/* Raised Amount */}
                <div>
                  <div className="text-[var(--brand-rose-500)] font-bold tracking-wider text-xs uppercase mb-2">
                    Raised Amount
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-serif font-bold text-[var(--neutral-900)]">
                      ₹{campaign.raised.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <div className="text-[var(--neutral-500)] text-sm mt-2 font-medium">
                    of ₹{campaign.goal.toLocaleString("en-IN")} goal
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-8 py-6 border-t border-b border-[var(--neutral-100)]">
                  <div>
                    <div className="text-[var(--brand-rose-500)] font-bold tracking-wider text-xs uppercase mb-2">
                      Days Left
                    </div>
                    <div className="text-3xl font-bold text-[var(--neutral-900)]">
                      {campaign.daysLeft}
                    </div>
                  </div>
                  <div>
                    <div className="text-[var(--brand-rose-500)] font-bold tracking-wider text-xs uppercase mb-2">
                      Total Funders
                    </div>
                    <div className="text-3xl font-bold text-[var(--neutral-900)]">
                      {campaign.funders}
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm font-bold text-[var(--neutral-900)]">
                    <span>Progress</span>
                    <span>{percentage}%</span>
                  </div>
                  <div className="h-3 w-full bg-[var(--neutral-100)] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[var(--brand-rose-500)] to-[var(--brand-maroon-900)] rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4">
                {campaign.status === "active" ? (
                  <button
                    onClick={() => setIsDonationModalOpen(true)}
                    className="block w-full py-4 bg-[#d64545] !text-white text-center font-bold text-lg rounded-xl hover:bg-[#b93a3a] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                  >
                    Contribute Now
                  </button>
                ) : (
                  <div className="w-full py-4 bg-[var(--neutral-200)] text-[var(--neutral-500)] text-center font-bold rounded-xl cursor-not-allowed">
                    Campaign Ended
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>

      <DonationModal
        isOpen={isDonationModalOpen}
        onClose={() => setIsDonationModalOpen(false)}
        campaignTitle={campaign.title}
        programTag={`Campaign: ${campaign.title}`}
      />
    </section>
  );
}
