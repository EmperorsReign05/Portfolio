"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";

export default function BentoShowcase() {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="md:col-span-2 bg-card p-6 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:border-white dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
        >
          <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "var(--font-press-start-2p)" }}>
            Philosophy
          </h3>
          <p className="text-muted-foreground font-mono leading-relaxed">
            I build digital experiences that are not only functional but also
            intuitive and delightful to use. Design is problem-solving.
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-yellow-300 text-black p-6 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center justify-center text-center"
        >
          <h3 className="text-lg font-semibold" style={{ fontFamily: "var(--font-press-start-2p)" }}>
            Hackathon
          </h3>
          <div className="mt-2 bg-black text-white text-xs font-bold px-3 py-1 rounded-full">FINALIST</div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-card p-6 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center justify-center dark:border-white dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
        >
          <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: "var(--font-press-start-2p)" }}>
            Connect
          </h3>
          <Button asChild variant="outline" size="sm" className="border-2 border-black bg-primary text-primary-foreground hover:translate-y-[2px] hover:shadow-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
            <Link href="#contact">
              Let&apos;s Talk <ArrowUpRight className="ml-2 size-4" />
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="md:col-span-2 bg-card p-6 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:border-white dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
        >
          <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: "var(--font-press-start-2p)" }}>
            Focus
          </h3>
          <div className="flex flex-wrap gap-2">
            {["User Experience", "Performance", "Clean Code", "Accessibility"].map(tag => (
              <span key={tag} className="bg-secondary/50 border border-black/20 text-secondary-foreground text-xs font-bold px-2.5 py-1 rounded-md dark:border-white/20">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}