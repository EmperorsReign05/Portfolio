"use client";

import { motion } from "framer-motion";
import MarioSkillBlock from "./MarioSkillBlock";
import { Code, Database, Server, Wind, Palette, GitFork } from "lucide-react";

const skills = [
  { name: "React", icon: <Code size={40} /> },
  { name: "Node.js", icon: <Server size={40} /> },
  { name: "Firebase", icon: <Database size={40} /> },
  { name: "Tailwind", icon: <Wind size={40} /> },
  { name: "UI Design", icon: <Palette size={40} /> },
  { name: "Git", icon: <GitFork size={40} /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 md:px-8 bg-secondary/50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tight mb-12"
        >
          Power-Ups
        </motion.h2>
        
        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill, index) => (
             <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
             >
                <MarioSkillBlock skillName={skill.name} icon={skill.icon} />
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}