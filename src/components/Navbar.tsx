"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              className="text-2xl font-serif font-bold text-stone-800"
            >
              GetANameplate
            </Link>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <Link
              href="#gallery"
              className="text-stone-600 hover:text-stone-900 transition-colors"
            >
              Gallery
            </Link>
            <Link
              href="#features"
              className="text-stone-600 hover:text-stone-900 transition-colors"
            >
              Why Us
            </Link>
            <Link
              href="https://wa.me/916398375708" // Placeholder number
              target="_blank"
              className="bg-green-600 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-green-700 transition-colors"
            >
              <MessageCircle size={18} />
              <span>Chat on WhatsApp</span>
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
