"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { X } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "PolicyLLM",
    shortDescription: "An AI-powered system that uses RAG to analyze complex documents like insurance policies. It answers natural language queries by providing structured, auditable decisions with justifications that directly cite the specific source clauses.",
    tags: ["Python", "LangChain", "FAISS", "Gemini API"],
    status: "in-progress",
    caseStudy: {
      challenge: "To create an intelligent system that can instantly and accurately answer complex, natural language questions about dense, unstructured insurance policy documents. The goal was to eliminate slow manual review, ensure decisions are auditable, and provide justifications grounded in the source text.",
      solution: "Engineered an AI-powered system using a RAG architecture. The solution first ingests and indexes multiple policy documents into a searchable vector knowledge base. When a user asks a question, the system retrieves the most relevant clauses using semantic search and feeds them to a LLM, which then synthesizes an evidence-based decision and generates a structured JSON response with direct citations.",
      technologies: "Python, LangChain, Gemini, Sentence-Transformers, FAISS Vector Store, PyMuPDF"
    },
    imageUrl: null,
    liveUrl: null,
    githubUrl: null
  },
  {
    title: "Jolly LLM",
    shortDescription: "A full-stack app to generate dual-sided legal arguments from AI models.",
    tags: ["React", "Node.js", "Vite", "Express.js", "Groq API"],
    status: "completed",
    caseStudy: {
      challenge: "Law students and professionals often need to see both sides of a legal argument. The goal was to build a tool that could instantly generate both prosecution and defense arguments for a given case prompt.",
      solution: "I developed a full-stack application where the front-end (built with React and Vite) sends a user's prompt to a Node.js/Express backend. This backend then securely calls the Groq API with LLaMA 3 to generate and return the opposing legal viewpoints.",
      technologies: "Vite, React, Node.js, Express.js, Groq API (LLaMA 3), Tailwind CSS."
    },
    imageUrl: "/jolly-llm.jpeg",
    liveUrl: "https://jolly-llm-pixel.netlify.app",
    githubUrl: "https://github.com/EmperorsReign05/jolly-llm"
  },
  {
    title: "NewsLens",
    shortDescription: "A web app that analyzes live headlines for sentiment and political bias.",
    tags: ["React", "NewsAPI", "Netlify", "Groq API"],
    status: "completed",
    caseStudy: {
      challenge: "Media consumption is often biased. The challenge was to create an interface that could take a live news headline and instantly provide an analysis of its emotional sentiment and potential political leaning.",
      solution: "I built a responsive front-end using React that calls the NewsAPI to fetch headlines. The selected headline is then analyzed by a Groq-hosted LLAMA 3 model. The results are displayed with a clean, color-coded UI to make the analysis easy to understand.",
      technologies: "React, NewsAPI, Groq API (LLaMA 3), Netlify, Framer Motion."
    },
    imageUrl: "/news-lens.jpg",
    liveUrl: null,
    githubUrl: "https://github.com/EmperorsReign05/NewsLens"
  },
  {
    title: "Task Companion",
    shortDescription: "A productivity app that syncs tasks with Google Calendar.",
    tags: ["React", "Firebase", "Google Calendar API", "Flask"],
    status: "completed",
    caseStudy: {
      challenge: "Users often manage tasks in one app and their schedule in another. I wanted to create a seamless experience where creating a task would automatically find and book a slot in the user's Google Calendar.",
      solution: "The application uses React for the front-end and Firebase for user authentication and task storage. When a task is created, a backend service (built with Flask) interacts with the Google Calendar API to schedule it. An additional AI feature was integrated to trigger voice call reminders.",
      technologies: "React, Node.js, Firebase, Google Calendar API, Flask, Omnidimension AI."
    },
    imageUrl: "/task-companion.png",
    liveUrl: "https://task-companion.netlify.app/",
    githubUrl: "https://github.com/EmperorsReign05/Task-Companion"
  }
];

type Project = typeof projects[0];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 px-4 md:px-8">
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
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-lg border flex flex-col relative transition-all hover:shadow-retro"
              onClick={() => setSelectedProject(project)}
            >
              {project.status === 'in-progress' && (
                <div className="absolute top-3 right-3 bg-yellow-400/20 text-yellow-500 text-xs font-bold px-2 py-1 rounded-full">
                  In Progress
                </div>
              )}

              <h3 className="text-xl font-semibold mb-2 pr-24" style={{ fontFamily: "var(--font-press-start-2p)" }}>{project.title}</h3>
              <p className="text-muted-foreground mb-4 flex-grow">
                {project.shortDescription}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="bg-primary/10 text-primary text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <Button variant="outline" className="mt-auto bg-primary text-primary-foreground">
                Read Case Study
              </Button>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-card border rounded-lg p-6 md:p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto relative text-left font-sans" // Using font-sans for readability
              onClick={(e) => e.stopPropagation()}
            >

              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold">{selectedProject.title}</h2>
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                {selectedProject.liveUrl && (
                  <Button asChild><a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">View Live Demo</a></Button>
                )}
                {selectedProject.githubUrl && (
                  <Button variant="secondary" asChild><a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">GitHub Repo</a></Button>
                )}
              </div>

              <div className="mb-6">
                {selectedProject.imageUrl && (
                  <Image src={selectedProject.imageUrl} alt={`${selectedProject.title} screenshot`} width={1280} height={720} className="rounded-lg border" />
                )}
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">The Challenge</h3>
                  <p className="text-muted-foreground leading-relaxed">{selectedProject.caseStudy.challenge}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">My Solution</h3>
                  <p className="text-muted-foreground leading-relaxed">{selectedProject.caseStudy.solution}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Key Technologies</h3>
                  <p className="text-muted-foreground leading-relaxed">{selectedProject.caseStudy.technologies}</p>
                </div>
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 rounded-full"
                onClick={() => setSelectedProject(null)}
              >
                <X className="h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}