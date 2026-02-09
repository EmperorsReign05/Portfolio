"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { X } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "FeedbackPulse",
    shortDescription: "A lightweight, scalable, and developer-friendly feedback system embeddable into any web app with minimal setup.",
    tags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Gemini AI"],
    status: "completed",
    caseStudy: {
      challenge: "Developers and small teams often struggle to collect structured user feedback across multiple websites. Most feedback is scattered across emails, forms, or chat messages, which makes it difficult to prioritize issues, analyze sentiment, and maintain consistency across projects. Existing tools were either too heavy, expensive, or difficult to integrate quickly. The goal was to create a lightweight yet scalable developer-friendly feedback system that could be embedded into any web app with minimal setup.",
      solution: "Instead of building a simple feedback form, I approached FeedbackPulse as a plug-and-play developer tool (SaaS-style). I designed a reusable embeddable widget using Next.js + TypeScript that developers could integrate into their websites through a small script and a unique projectKey. On the backend, I built a Node.js + Express API layer with PostgreSQL and Prisma to manage projects, feedback entries, and user accounts with strong relational integrity. I implemented JWT authentication and Google OAuth to enable secure multi-project access, along with domain allow-listing to prevent misuse of embedded widgets. To handle scale and usability, I added server-side pagination, webhook support for external integrations, and AI-powered sentiment tagging using Gemini AI to automatically categorize feedback into positive, neutral, or negative. For deployment, I hosted the frontend on Netlify and backend services on Render, configuring environment variables, CORS policies, and production-level API routing. The system was tested across multiple domains to ensure cross-site embedding reliability and consistent performance.",
      technologies: "Next.js, React, TypeScript, Node.js, Express, PostgreSQL, Prisma ORM, JWT Authentication, Google OAuth, Gemini AI, Netlify, Render, Webhooks, Domain Allow-listing."
    },
    imageUrl: "/feedback-pulse.png",
    liveUrl: "https://feedbackpulse-me.netlify.app",
    githubUrl: "https://github.com/EmperorsReign05/FeedbackPulse"
  },
  {
    title: "CabMate",
    shortDescription: "A full-stack ride-sharing platform designed to streamline cab coordination with structured matching and real deployments.",
    tags: ["React", "FastAPI", "MongoDB", "Docker", "AWS EC2", "Nginx"],
    status: "completed",
    caseStudy: {
      challenge: "Cab coordination on campus often happens through unstructured chats, leading to confusion, missed rides, and poor scalability. My initial attempt at solving this had major logic and architectural flaws, which made the system hard to extend and unreliable under real usage.",
      solution: "Instead of patching the existing system, I rebuilt CabMate from the ground up. I redesigned the frontend using React for clarity and predictable user flows, rewrote backend APIs using FastAPI with cleaner separation of concerns, and restructured the database in MongoDB to support flexible ride and user relationships. I containerized the entire application with Docker and manually deployed it on AWS EC2 using Nginx as a reverse proxy to understand real-world infrastructure and deployment challenges. Once validated, I migrated parts of the system to managed platforms for better reliability and maintainability.",
      technologies: "React, JavaScript, FastAPI (Python), MongoDB Atlas, Docker, AWS EC2, Nginx."
    },
    imageUrl: "/cabmate.png",
    liveUrl: "https://cabmate.pages.dev",
    githubUrl: "https://github.com/EmperorsReign05/CabMate"
  },

  /*{
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
  },*/
  {
    title: "MindScribe",
    shortDescription: "An AI-powered mental wellness companion built using Retrieval-Augmented Generation for grounded, context-aware conversations.",
    tags: ["React", "TypeScript", "FastAPI", "LangChain", "FAISS", "Google Gemini"],
    status: "completed",
    caseStudy: {
      challenge: "Most AI chatbots provide generic or hallucinated responses, which is especially risky in mental wellness contexts. I wanted to explore how LLMs could be made more reliable, transparent, and context-aware by grounding responses in real knowledge instead of raw model intuition.",
      solution: "MindScribe uses a Retrieval-Augmented Generation (RAG) pipeline where user queries are first matched against a curated knowledge base of therapeutic techniques using FAISS. Relevant context is then passed to the LLM to generate grounded responses. I implemented conversational memory for coherence across sessions and real-time streaming responses to improve perceived latency and user experience. The frontend was designed with React and Tailwind CSS to feel calm, responsive, and accessible, while the backend was built with FastAPI and LangChain for orchestration.",
      technologies: "React, TypeScript, Tailwind CSS, FastAPI, LangChain, FAISS, Google Gemini, Supabase."
    },
    imageUrl: "/mindscribee.png",
    liveUrl: "https://synapse-mindscribe.netlify.app",
    githubUrl: "https://github.com/EmperorsReign05/MindScribe"
  },
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
    githubUrl: "https://github.com/EmperorsReign05/PolicyLLM"
  },
  /*{
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
  }*/
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
        <div className="grid md:grid-cols-2 gap-8 text-left">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group bg-card rounded-xl border-4 border-black box-border overflow-hidden flex flex-col relative transition-all hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-48 w-full border-b-4 border-black bg-muted/50 overflow-hidden">
                {project.imageUrl ? (
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-secondary/20">
                    <span className="text-4xl opacity-20">👾</span>
                  </div>
                )}
                {project.status === 'in-progress' && (
                  <div className="absolute top-3 right-3 bg-yellow-400 text-black text-[10px] font-bold px-2 py-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    IN PROGRESS
                  </div>
                )}
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 leading-tight" style={{ fontFamily: "var(--font-press-start-2p)" }}>
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-6 flex-grow line-clamp-3">
                  {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0, 4).map(tag => (
                    <span key={tag} className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-1 rounded border-2 border-transparent group-hover:border-primary/20 transition-colors">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="text-[10px] text-muted-foreground py-1 px-1">+{project.tags.length - 4}</span>
                  )}
                </div>

                <Button className="w-full border-2 border-black bg-primary text-primary-foreground font-bold hover:translate-y-[2px] hover:shadow-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                  Load Cartridge
                </Button>
              </div>
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