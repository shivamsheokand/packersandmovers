"use client";
import React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
export default function ThreeDMarqueePage() {
  const images = [
    "https://assets.aceternity.com/placeholders-and-vanish-input.png",
    "https://www.yrcpackersmovers.com/admin/assets/images/1717653811yrc%20(10).jpeg",
    "https://www.yrcpackersmovers.com/admin/assets/images/1717653835yrc%20(15).jpeg",
    "https://www.yrcpackersmovers.com/admin/assets/images/1717653830yrc%20(14).jpeg",
    "https://www.yrcpackersmovers.com/admin/assets/images/1717653852yrc%20(18).jpeg",
    "https://assets.aceternity.com/placeholders-and-vanish-input.png",
    "https://www.yrcpackersmovers.com/admin/assets/images/1717653811yrc%20(10).jpeg",
    "https://www.yrcpackersmovers.com/admin/assets/images/1717653835yrc%20(15).jpeg",
    "https://www.yrcpackersmovers.com/admin/assets/images/1717653830yrc%20(14).jpeg",
    "https://www.yrcpackersmovers.com/admin/assets/images/1717653852yrc%20(18).jpeg",
  ];

  return (
    <div className="relative mx-auto mt-[63px] flex h-[500px] md:h-[90vh] w-full flex-col items-center justify-center overflow-hidden px-4">
      <h2 className="relative z-20 mt-16 text-center text-3xl md:text-6xl font-bold text-white">
        Making Every{" "}
        <span className="relative inline-block rounded-xl bg-blue-500/40 px-3 py-1 text-red-600 underline decoration-sky-500 decoration-[6px] underline-offset-[10px] backdrop-blur-sm">
          Move
        </span>{" "}
        Hassle-Free and Memorable.
      </h2>
      <p className="relative z-20 md:text-2xl mt-4 max-w-2xl text-center text-sm text-neutral-200">
        Whether you're shifting homes or relocating offices, we handle your
        belongings with care and precision. Trust our experienced team to move
        you safely, securely, and stress-free — every step of the way.
      </p>

      <div className="relative z-20 mt-6 flex flex-wrap items-center justify-center gap-4">
        <Link href="/get-quote">
          <button className="rounded-md md:px-8 md:py-4 md:text-2xl bg-sky-600 px-5 py-2 text-sm  font-medium text-white transition-colors hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2">
            Get a free quote
          </button>
        </Link>
        <Link href="/contact">
          <button className="rounded-md border md:px-8 md:py-4 md:text-2xl border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2">
            Contact Us
          </button>
        </Link>
      </div>
      {/* Animated Swipe Down Arrow */}
      <div className="relative z-20 flex justify-center">
        <div className="animate-bounce mt-8 text-white flex flex-col items-center">
          <span className="text-lg text-red-600 font-extrabold">
            Scroll Down
          </span>
          <ChevronDown className="w-20 h-20" />
        </div>
      </div>

      {/* overlay */}
      <div className="absolute inset-0 z-10 h-full w-full bg-black/50 dark:bg-black/40" />

      <ThreeDMarquee images={images} />
    </div>
  );
}

function ThreeDMarquee({ images }) {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 flex flex-col justify-center overflow-hidden px-4 py-10 space-y-6">
      <MarqueeRow
        images={images}
        direction="left"
        className="mt-[40px] md:mt-[60px]"
      />
      <MarqueeRow images={images} direction="right" />
      <MarqueeRow images={images} direction="left" className="md:mb-2" />
    </div>
  );
}

function MarqueeRow({ images, direction = "left", className = "" }) {
  return (
    <div
      className={`animate-marquee-${direction} flex w-full space-x-2 ${className}`}
      style={{ animationDuration: "30s" }}
    >
      {images.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={`img-${idx}`}
          className="h-32 md:h-[158px] w-auto flex-shrink-0 rounded-md object-cover opacity-80 shadow-md"
        />
      ))}
      {images.map((src, idx) => (
        <img
          key={`dup-${idx}`}
          src={src}
          alt={`dup-img-${idx}`}
          className="h-32 w-auto flex-shrink-0 rounded-md object-cover opacity-80 shadow-md"
        />
      ))}
      <style jsx>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        .animate-marquee-left {
          animation: marquee-left linear infinite;
        }

        .animate-marquee-right {
          animation: marquee-right linear infinite;
        }
      `}</style>
    </div>
  );
}
