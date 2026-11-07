
"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
    setMounted(true);
  }, []);

  function toggle() {
    const isDark = document.documentElement.classList.toggle("dark");
    setDark(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }

  if (!mounted) {
    return (
      <div className="h-8 w-15 rounded-full border border-[var(--border)] bg-[var(--surface)] opacity-50" />
    );
  }

  return (
    <button
      onClick={toggle}
      type="button"
      aria-label="Toggle light or dark theme"
      className="relative flex h-8 w-15 items-center justify-between rounded-full border border-brand-200/90 dark:border-brand-700/80 bg-white/80 dark:bg-brand-950/70 p-1 shadow-xs transition-all duration-300 hover:shadow-md cursor-pointer"
    >
      {/* Sliding indicator */}
      <span
        className={`absolute left-1 top-1/2 size-6 -translate-y-1/2 rounded-full bg-brand-600 dark:bg-brand-500 shadow-sm transition-transform duration-300 ease-out ${dark ? "translate-x-7" : "translate-x-0"
          }`}
      />

      {/* Sun */}
      <span
        className={`relative z-10 flex size-6 items-center justify-center transition-colors duration-200 ${dark ? "text-brand-300" : "text-white"
          }`}
      >
        <Sun className="size-3.5" />
      </span>

      {/* Moon */}
      <span
        className={`relative z-10 flex size-6 items-center justify-center transition-colors duration-200 ${dark ? "text-white" : "text-brand-700"
          }`}
      >
        <Moon className="size-3.5" />
      </span>
    </button>
  );
}
