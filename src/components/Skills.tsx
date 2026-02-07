"use client";
import { motion } from "framer-motion";
import {
  Code, Server, Database, Wind, Palette, GitFork,
  Terminal, Cpu, Globe, Layout, Box, Layers, Zap
} from "lucide-react";

const skills = [
  { name: "Next.js", icon: <Globe size={16} /> },
  { name: "React", icon: <Code size={16} /> },
  { name: "TypeScript", icon: <Terminal size={16} /> },
  { name: "Tailwind CSS", icon: <Wind size={16} /> },
  { name: "Node.js", icon: <Server size={16} /> },
  { name: "PostgreSQL", icon: <Database size={16} /> },
  { name: "Prisma", icon: <Layers size={16} /> },
  { name: "Docker", icon: <Box size={16} /> },
  { name: "Git", icon: <GitFork size={16} /> },
  { name: "Figma", icon: <Palette size={16} /> },
  { name: "Redux", icon: <Zap size={16} /> },
  { name: "System Design", icon: <Cpu size={16} /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-left">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tight mb-8"
          style={{ fontFamily: "var(--font-press-start-2p)" }}
        >
          Technologies & Tools
        </motion.h2>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border-2 border-black bg-white text-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all cursor-default dark:bg-zinc-900 dark:text-white dark:border-white dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]"
            >
              <div className="text-primary">{skill.icon}</div>
              <span className="text-sm md:text-base font-mono">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}