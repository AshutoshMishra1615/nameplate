"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Paintbrush, Heart, Truck, ShieldCheck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: <Paintbrush className="w-10 h-10 text-white" />,
    title: "Handcrafted Designs",
    description:
      "Every nameplate is hand-painted and crafted by skilled artisans, ensuring no two pieces are exactly alike.",
    color: "bg-orange-500",
  },
  {
    icon: <Heart className="w-10 h-10 text-white" />,
    title: "Made with Love",
    description:
      "We pour our heart into every detail to ensure perfection, creating a piece that resonates with your home's soul.",
    color: "bg-rose-500",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-white" />,
    title: "Weather Proof",
    description:
      "High-quality materials that withstand all weather conditions, keeping your nameplate vibrant for years.",
    color: "bg-green-500",
  },
  {
    icon: <Truck className="w-10 h-10 text-white" />,
    title: "Pan India Delivery",
    description:
      "Safe and secure shipping to your doorstep anywhere in India, packaged with care to prevent any damage.",
    color: "bg-blue-500",
  },
];

export default function Features() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const items = gsap.utils.toArray<HTMLElement>(".feature-item");

      items.forEach((item, i) => {
        const isEven = i % 2 === 0;

        gsap.fromTo(
          item,
          {
            opacity: 0,
            x: isEven ? -100 : 100,
            rotate: isEven ? -5 : 5,
          },
          {
            opacity: 1,
            x: 0,
            rotate: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top bottom-=100",
              end: "top center",
              scrub: 1,
            },
          }
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      id="features"
      className="py-32 bg-stone-50 overflow-hidden"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6">
            Why Choose Us?
          </h2>
          <p className="text-stone-600 text-xl max-w-2xl mx-auto">
            We don't just make nameplates; we create first impressions that last
            a lifetime.
          </p>
        </div>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-stone-200 -translate-x-1/2 hidden md:block" />

          <div className="space-y-24">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`feature-item flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1 text-center md:text-left">
                  <div
                    className={`md:hidden w-20 h-20 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-stone-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-stone-600 text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="relative z-10 hidden md:flex items-center justify-center w-24 h-24 rounded-full bg-white border-4 border-stone-100 shadow-xl">
                  <div
                    className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center`}
                  >
                    {feature.icon}
                  </div>
                </div>

                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
