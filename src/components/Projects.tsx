// src/components/Projects.tsx
import { motion } from "framer-motion";

const projects = [
  {
    title: "Jolly LLM",
    description: "Developed a full-stack web application using Node.js, Express, and Vite to generate dual-sided legal arguments from AI models. Integrated Groq's LLAMA 3 (Mixtral) API to simulate courtroom-style reasoning for user-provided case prompts.",
    tags: ["Javascript", "Vite", "React", "Node.js", "Express.js"],
  },
  {
    title: "NewsLens",
    description: "Built a web app that analyzes live headlines for sentiment and political bias using Groq-hosted LLAMA 3 models. Designed a responsive, modern UI with prompt suggestions and color-coded results.",
    tags: ["React", "Groq (LLaMA 3)", "NewsAPI", "Netlify"],
  },
  {
    title: "Task Companion",
    description: "Built a full-stack productivity app that lets users create tasks, which are automatically scheduled on Google Calendar. Integrated Firebase and Omnidimension AI to persist tasks and trigger voice call reminders.",
    tags: ["React", "Node.js", "Firebase", "Google Calendar API", "Flask"],
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 md:px-8 bg-secondary/50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tight mb-8"
        >
          Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-lg border flex flex-col"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="bg-primary/10 text-primary text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}