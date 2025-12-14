"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Menu, X } from "lucide-react";
import Logo from "./Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut" as const
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut" as const
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <Logo />
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link
              href="#gallery"
              className="text-stone-600 hover:text-stone-900 font-medium transition-colors"
            >
              Gallery
            </Link>
            <Link
              href="#features"
              className="text-stone-600 hover:text-stone-900 font-medium transition-colors"
            >
              Why Us
            </Link>
            <Link
              href="https://wa.me/916398375708"
              target="_blank"
              className="bg-green-600 text-white px-5 py-2.5 rounded-full flex items-center gap-2 hover:bg-green-700 transition-all hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <MessageCircle size={18} />
              <span>Chat on WhatsApp</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-stone-600 hover:text-stone-900 p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden overflow-hidden bg-white border-b border-stone-200"
          >
            <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col items-center">
              <Link
                href="#gallery"
                onClick={toggleMenu}
                className="text-stone-600 hover:text-stone-900 font-medium text-lg py-2"
              >
                Gallery
              </Link>
              <Link
                href="#features"
                onClick={toggleMenu}
                className="text-stone-600 hover:text-stone-900 font-medium text-lg py-2"
              >
                Why Us
              </Link>
              <Link
                href="https://wa.me/916398375708"
                target="_blank"
                onClick={toggleMenu}
                className="bg-green-600 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-green-700 transition-colors w-full justify-center"
              >
                <MessageCircle size={20} />
                <span>Chat on WhatsApp</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
