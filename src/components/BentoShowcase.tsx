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
          className="md:col-span-2 bg-card p-6 rounded-lg border"
        >
          <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "var(--font-press-start-2p)" }}>
            Philosophy
          </h3>
          <p className="text-muted-foreground">
            I build digital experiences that are not only functional but also
            intuitive and delightful to use. Design is problem-solving.
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-card p-6 rounded-lg border flex flex-col items-center justify-center text-center"
        >
          <h3 className="text-lg font-semibold" style={{ fontFamily: "var(--font-press-start-2p)" }}>
            Hackathon
          </h3>
          <p className="text-sm text-muted-foreground mt-1">Finalist</p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-card p-6 rounded-lg border flex flex-col items-center justify-center"
        >
           <h3 className="text-lg font-semibold" style={{ fontFamily: "var(--font-press-start-2p)" }}>
            Connect
          </h3>
           <Button asChild variant="outline" size="sm" className="bg-primary text-primary-foreground">
              <Link href="#contact">
                Get in Touch <ArrowUpRight className="ml-2 size-4" />
              </Link>
           </Button>
        </motion.div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="md:col-span-2 bg-card p-6 rounded-lg border"
        >
          <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: "var(--font-press-start-2p)" }}>
            Core Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS"].map(tag => (
              <span key={tag} className="bg-primary/10 text-primary text-xs font-medium px-2.5 py-0.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}