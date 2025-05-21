"use client";
import React from "react";

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
    <div className="relative mx-auto  flex h-screen w-full  flex-col items-center justify-center overflow-hidden rounded-3xl px-4">
      <h2 className="relative z-20 text-center text-3xl font-bold text-white md:text-5xl">
        Making Every{" "}
        <span className="relative inline-block rounded-xl bg-blue-500/40 px-3 py-1 text-white underline decoration-sky-500 decoration-[6px] underline-offset-[10px] backdrop-blur-sm">
          Move
        </span>{" "}
        Hassle-Free and Memorable.
      </h2>
      <p className="relative z-20 mt-4 max-w-2xl text-center text-sm text-neutral-200 md:text-base">
        Whether you're shifting homes or relocating offices, we handle your
        belongings with care and precision. Trust our experienced team to move
        you safely, securely, and stress-free — every step of the way.
      </p>

      <div className="relative z-20 mt-6 flex flex-wrap items-center justify-center gap-4">
        <button className="rounded-md bg-sky-600 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2">
          Join the club
        </button>
        <button className="rounded-md border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2">
          Read more
        </button>
      </div>

      {/* overlay */}
      <div className="absolute inset-0 z-10 h-full w-full bg-black/50 dark:bg-black/40" />

      <ThreeDMarquee images={images} />
    </div>
  );
}

function ThreeDMarquee({ images }) {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 flex flex-col justify-center space-y-6 overflow-hidden px-4 py-10">
      <MarqueeRow images={images} direction="left" />
      <MarqueeRow images={images} direction="right" />
      <MarqueeRow images={images} direction="left" />
    </div>
  );
}

function MarqueeRow({ images, direction = "left" }) {
  return (
    <div
      className={`animate-marquee-${direction} flex w-full space-x-6`}
      style={{ animationDuration: "30s" }}
    >
      {images.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={`img-${idx}`}
          className="h-32 w-auto flex-shrink-0 rounded-md object-cover opacity-80 shadow-md sm:h-40 md:h-52 lg:h-60"
        />
      ))}
      {/* Duplicate for seamless loop */}
      {images.map((src, idx) => (
        <img
          key={`dup-${idx}`}
          src={src}
          alt={`dup-img-${idx}`}
          className="h-32 w-auto flex-shrink-0 rounded-md object-cover opacity-80 shadow-md sm:h-40 md:h-52 lg:h-60"
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
