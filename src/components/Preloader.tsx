"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: onComplete
    });

    tl.to(textRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    })
    .to(textRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.5,
      delay: 0.5
    })
    .to(containerRef.current, {
      yPercent: -100,
      duration: 1,
      ease: "power4.inOut"
    });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-stone-900 flex items-center justify-center"
    >
      <h1 
        ref={textRef}
        className="text-4xl md:text-6xl font-serif font-bold text-white opacity-0 translate-y-10"
      >
        GetANameplate
      </h1>
    </div>
  );
}
