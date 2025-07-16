"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-sm bg-white/60 dark:bg-black/60 border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 md:px-8" aria-label="Global">
        <Link href="#home" className="text-lg font-semibold tracking-tight">Mohammad Alman Farooqui</Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="transition-colors hover:text-primary"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded focus:outline-none focus-visible:ring"
          aria-label="Toggle navigation"
        >
          <Menu className="h-6 w-6" />
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden px-6 pb-4 space-y-2 text-sm font-medium bg-background border-t border-border">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="block w-full py-2 transition-colors hover:text-primary"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
