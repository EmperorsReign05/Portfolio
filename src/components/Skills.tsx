// src/components/Skills.tsx
import { motion } from "framer-motion";

const skills = {
  Languages: ["C/C++", "JavaScript", "HTML/CSS"],
  Frameworks: ["React", "Node.js", "Flask", "Express.js", "Vite"],
  "Developer Tools": ["Git", "Firebase", "VS Code", "Visual Studio"],
};

const certifications = [
    "Hackathon Finalist at IEEE RAS MUJ",
    "Foundational C# with Microsoft",
    "Responsive Web Design Certification",
    "JavaScript DSA Certification"
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tight text-center mb-8"
        >
          Skills & Certifications
        </motion.h2>

        <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
        >
          {/* Technical Skills */}
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="mb-4">
                <h4 className="font-semibold text-muted-foreground mb-2">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {items.map(item => (
                    <span key={item} className="bg-secondary text-secondary-foreground text-sm font-medium px-3 py-1 rounded-md">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-xl font-semibold mb-4">Achievements & Certifications</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {certifications.map(cert => <li key={cert}>{cert}</li>)}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}