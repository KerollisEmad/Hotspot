"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const HERO_IMAGES = [
  "/images/home/bg1.png",
  "/images/home/bg2.png",
  "/images/home/bg3.png",
];

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden px-4  "
      data-purpose="hero-promotional-banner"
      dir="ltr"
    >
      <div className="relative flex min-h-[160px] items-center justify-between overflow-hidden rounded-2xl border border-white/20 bg-[#22222222] p-4 shadow-sm sm:min-h-[200px] lg:min-h-[260px]">
        {/* Slider Images */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="flex h-full w-full transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {HERO_IMAGES.map((image, index) => (
              <div key={image} className="relative h-full min-w-full shrink-0">
                <Image
                  src={image}
                  alt={`Hotspot promotional banner ${index + 1}`}
                  fill
                  priority={index === 0}
                  className="object-cover opacity-90"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Content - Always English */}
        <div className="relative z-10 max-w-[55%]">
          <div className="relative inline-block">
            <svg
              className="absolute -top-3 left-10 h-4 w-8 stroke-white"
              fill="none"
              strokeLinecap="round"
              strokeWidth="2"
              viewBox="0 0 20 12"
            >
              <path d="M4 10 L1 2 M8 11 L10 1 M12 11 L16 3" />
            </svg>

            <h2 className="text-3xl font-extrabold italic leading-[1.05] tracking-tight text-white">
              Good Food
            </h2>

            <h2 className="mt-0.5 text-[34px] font-extrabold italic leading-[1.05] tracking-tight text-white">
              Great Vibes
            </h2>

            <svg
              className="mt-0.5 h-2.5 w-28 text-white"
              fill="none"
              viewBox="0 0 120 12"
            >
              <path
                d="M2 7C30 2 80 1 118 6"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="3"
              />
            </svg>
          </div>

          <p className="mt-2 text-[11px] font-medium tracking-wide text-white/80">
            Pizza • Burgers • Drinks • More
          </p>
        </div>

        <div className="relative z-10 ml-auto flex h-full w-[42%] items-center justify-end" />

        {/* Slider Dots */}
        <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
          {HERO_IMAGES.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-500 ${
                currentSlide === index ? "w-6 bg-white" : "w-2 bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
