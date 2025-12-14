"use client";

import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 2.5 }); // Wait for preloader

      tl.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      })
        .from(
          textRef.current,
          {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .from(
          buttonsRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5"
        );

      // Background animation
      gsap.to(".hero-blob", {
        y: "random(-50, 50)",
        x: "random(-50, 50)",
        scale: "random(0.8, 1.2)",
        duration: "random(3, 5)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 1,
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-stone-50"
    >
      {/* Abstract Background Shapes */}
      <div className="hero-blob absolute top-20 left-20 w-64 h-64 bg-orange-300 rounded-full blur-3xl opacity-20" />
      <div className="hero-blob absolute bottom-20 right-20 w-96 h-96 bg-purple-300 rounded-full blur-3xl opacity-20" />
      <div className="hero-blob absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose-200 rounded-full blur-3xl opacity-10" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1
          ref={titleRef}
          className="text-5xl md:text-8xl font-serif font-bold text-stone-900 mb-6 leading-tight"
        >
          Crafting Identity, <br />
          <span className="text-orange-600 italic">One Plate at a Time</span>
        </h1>

        <p
          ref={textRef}
          className="text-lg md:text-2xl text-stone-600 mb-10 max-w-2xl mx-auto"
        >
          Handmade, custom-designed nameplates that tell your story. Elevate
          your entrance with a touch of art and elegance.
        </p>

        <div
          ref={buttonsRef}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="#gallery"
            className="px-8 py-4 bg-stone-900 text-white rounded-full font-medium hover:bg-stone-800 transition-all flex items-center justify-center gap-2 group"
          >
            View Collection
            <ArrowRight
              className="group-hover:translate-x-1 transition-transform"
              size={20}
            />
          </Link>
          <Link
            href="https://wa.me/916398375708"
            target="_blank"
            className="px-8 py-4 border-2 border-stone-300 text-stone-700 rounded-full font-medium hover:border-stone-900 hover:text-stone-900 transition-all"
          >
            Custom Order
          </Link>
        </div>
      </div>
    </section>
  );
}
