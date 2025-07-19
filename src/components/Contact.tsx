// src/components/Contact.tsx
"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Github, Linkedin, Mail, X } from "lucide-react";
import Link from "next/link";
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 md:px-8 bg-secondary/50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tight mb-4"
        >
          Get in Touch
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-muted-foreground max-w-xl mx-auto mb-8"
        >
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team.
        </motion.p>

        {/* Social Links */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mb-12"
        >
          <Button asChild variant="outline" size="icon" aria-label="Email" className="bg-primary text-primary-foreground">
            <Link href="mailto:almanfarooqui5@gmail.com"> {/* TODO: Add your email */}
              <Mail />
            </Link>
          </Button>
          <Button asChild variant="outline" size="icon" aria-label="LinkedIn" className="bg-primary text-primary-foreground">
            <Link href="https://www.linkedin.com/in/mohammad-alman-farooqui-10a2b6256/" target="_blank"> {/* TODO: Add your LinkedIn URL */}
              <Linkedin />
            </Link>
          </Button>
          <Button asChild variant="outline" size="icon" aria-label="GitHub" className="bg-primary text-primary-foreground">
            <Link href="https://github.com/EmperorsReign05" target="_blank"> {/* TODO: Add your GitHub URL */}
              <Github />
            </Link>
          </Button>
          <Button asChild variant="outline" size="icon" aria-label="X" className="bg-primary text-primary-foreground">
            <Link href="https://x.com/almanfarooqui_1" target="_blank"> {/* TODO: Add your X URL */}
              <X />
            </Link>
          </Button>
        </motion.div>

         <div>
            <ContactForm />
          </div>
        
      </div>
    </section>
  );
}