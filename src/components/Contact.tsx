"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-20 bg-stone-900 text-white text-center">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-serif font-bold mb-6"
        >
          Ready to Design Your Nameplate?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-stone-400 text-lg mb-10"
        >
          Contact us directly on WhatsApp to discuss your requirements,
          customize your design, and place an order.
        </motion.p>

        <motion.a
          href="https://wa.me/916398375708"
          target="_blank"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-3 bg-green-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-green-700 transition-colors"
        >
          <MessageCircle size={24} />
          Chat on WhatsApp
        </motion.a>
      </div>
    </section>
  );
}
