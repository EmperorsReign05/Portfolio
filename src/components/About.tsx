// src/components/About.tsx
"use client"; // Add this line if you plan to use hooks or event listeners here in the future

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tight mb-4"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-card p-6 rounded-lg border text-left"
        >
          <h3 className="text-xl font-semibold">Education</h3>
          <p className="text-muted-foreground mt-1">
            B.Tech in CSE with specialization in AI and ML
          </p>
          <p className="font-medium">Manipal University Jaipur</p>
          <p className="text-sm text-muted-foreground">2024 - 2028</p>
          {/* Data from resume: Sources 4, 5, 8 */}
        </motion.div>
      </div>
    </section>
  );
}