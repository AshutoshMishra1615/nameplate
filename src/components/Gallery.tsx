"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    id: 1,
    title: "Traditional Elegance",
    category: "",
    image: "/1.jpg",
  },
  {
    id: 2,
    title: "Simple Modern",
    category: "",
    image: "/2.jpg",
  },
  {
    id: 3,
    title: "Custom Design",
    category: "",
    image: "/3.jpg",
  },
];

export default function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".gallery-card");

      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top bottom-=100",
              toggleActions: "play none none reverse",
            },
            delay: i * 0.1,
          }
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <section id="gallery" className="py-20 bg-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-4">
            Our Masterpieces
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg">
            Explore our collection of handcrafted nameplates. Each piece is
            unique and made to order.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div key={item.id} className="gallery-card group cursor-pointer">
              <div className="aspect-[4/3] relative rounded-2xl overflow-hidden mb-4 shadow-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
              </div>
              <h3 className="text-2xl font-serif font-medium text-stone-900">
                {item.title}
              </h3>
              <p className="text-stone-500 font-medium">{item.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
