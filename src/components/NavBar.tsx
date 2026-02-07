"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

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

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 border-2 border-black rounded-lg bg-gray-200 dark:bg-zinc-800"></div>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative p-2 rounded-lg border-2 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-[2px] active:shadow-none transition-all dark:bg-black dark:border-white dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] hover:bg-gray-50 dark:hover:bg-zinc-900"
      aria-label="Toggle theme"
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-orange-500" />
      <Moon className="absolute top-2 left-2 h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-yellow-300" />
    </button>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-md bg-white/60 dark:bg-[#0f172a]/80 border-b border-black/10 dark:border-white/10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 md:px-8" aria-label="Global">
        <Link href="#home" className="text-lg font-semibold tracking-tight">Mohammad Alman Farooqui</Link>

        <div className="flex items-center gap-6">
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

          <ThemeToggle />

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded focus:outline-none focus-visible:ring"
            aria-label="Toggle navigation"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {open && (
        <ul className="md:hidden px-6 pb-4 space-y-2 text-sm font-medium backdrop-blur-md bg-white/80 dark:bg-[#0f172a]/95 border-t border-black/10 dark:border-white/10">
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