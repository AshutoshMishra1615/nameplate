"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Features from "@/components/Features";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="min-h-screen bg-white">
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      <Navbar />
      <Hero />
      <Gallery />
      <Features />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
