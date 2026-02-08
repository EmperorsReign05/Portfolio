"use client";
import { motion } from "framer-motion";

export default function Skills() {
  const categories = [
    {
      title: "Languages",
      skills: ["Python", "C/C++", "JavaScript", "TypeScript", "SQL", "HTML/CSS"],
      color: "decoration-blue-500"
    },
    {
      title: "Frameworks & Libs",
      skills: ["React", "FastAPI", "Node.js", "Next.js", "Flask", "Express", "LangChain"],
      color: "decoration-purple-500"
    },
    {
      title: "Tools & Cloud",
      skills: ["Git", "Supabase", "Firebase", "PostgreSQL", "MongoDB", "Docker", "AWS EC2", "VS Code"],
      color: "decoration-orange-500"
    },
    {
      title: "AI & ML",
      skills: ["RAG", "TensorFlow", "TF-IDF", "FAISS", "Hugging Face", "Scikit-learn"],
      color: "decoration-pink-500"
    },
    {
      title: "Domains",
      skills: ["NLP", "Machine Learning", "Cloud Computing", "Web Development"],
      color: "decoration-green-500"
    },
  ];

  return (
    <section id="skills" className="py-12 px-4 md:px-8 bg-transparent">
      <div className="max-w-5xl mx-auto border-t-4 border-black dark:border-white pt-10">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-left"
        >
          {categories.map((category) => (
            <div key={category.title} className="flex flex-col gap-4">
              <h4 className={`text-sm font-black uppercase tracking-wider underline ${category.color} decoration-4 underline-offset-4 mb-2 font-mono`}>
                {category.title}
              </h4>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 group">
                    <span className="h-1.5 w-1.5 bg-neutral-400 group-hover:bg-black dark:group-hover:bg-white rounded-full transition-colors" />
                    <span className="text-sm font-bold text-neutral-600 dark:text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors cursor-default">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* "End of List" Marker */}
        <div className="mt-12 text-center">
          <div className="inline-block h-2 w-2 bg-black dark:bg-white animate-pulse" />
        </div>

      </div>
    </section>
  );
}