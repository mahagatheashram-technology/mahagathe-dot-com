"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation, useMotionValue, useTransform, useAnimationFrame } from "framer-motion";
import { cn } from "@/lib/utils";

const images = [
    "/program-bhandara.png",
    "/program-ayuri.png",
    "/program-adhyaya.png",
    "/program-samriddhi.png",
    "/placeholder-activity-1.jpg",
    "/placeholder-activity-2.jpg",
    "/placeholder-activity-3.jpg",
    "/placeholder-activity-4.jpg",
];

// Duplicate images to create infinite loop effect
const duplicatedImages = [...images, ...images, ...images];

export function Gallery3D() {
    return (
        <section className="pt-20 pb-32 bg-gradient-to-b from-surface-white to-surface-cream50 overflow-hidden">
            <div className="relative w-full">
                {/* Gradient Masks for fade effect */}
                <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-surface-white to-transparent pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-surface-cream50 to-transparent pointer-events-none" />

                <div className="flex overflow-hidden py-10">
                    <motion.div
                        className="flex gap-8 px-8"
                        animate={{
                            x: ["0%", "-33.33%"],
                        }}
                        transition={{
                            ease: "linear",
                            duration: 40,
                            repeat: Infinity,
                        }}
                    >
                        {duplicatedImages.map((src, index) => (
                            <Card key={index} src={src} index={index} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function Card({ src, index }: { src: string; index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);

    // 3D Effect Configuration
    const scale = useTransform(x, [-800, 0, 800], [0.85, 1.1, 0.85]);
    const rotateY = useTransform(x, [-800, 0, 800], [25, 0, -25]);
    const opacity = useTransform(x, [-800, 0, 800], [0.7, 1, 0.7]);

    useAnimationFrame(() => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const center = rect.left + rect.width / 2;
        // Use window.innerWidth if available, otherwise fallback to 0
        const viewCenter = typeof window !== "undefined" ? window.innerWidth / 2 : 0;
        const distance = center - viewCenter;
        x.set(distance);
    });

    return (
        <motion.div
            ref={ref}
            className="relative flex-shrink-0 w-[300px] h-[400px] md:w-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-md"
            style={{
                scale,
                rotateY,
                opacity,
                transformStyle: "preserve-3d",
                perspective: "1000px",
            }}
            whileHover={{
                scale: 1.15,
                transition: { duration: 0.2 }
            }}
        >
            <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover"
            />
        </motion.div>
    );
}
