"use client";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#home",       label: "Home" },
  { href: "#about",      label: "About" },
  { href: "#skills",     label: "Skills" },
  { href: "#projects",   label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact",    label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState("#home");

  // Lock scroll spy during click transition so it switches instantly without lagging
  const isClickScrolling = useRef(false);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    const sectionIds = ["home", "about", "skills", "projects", "experience", "contact"];

    const handleScroll = () => {
      // Navbar background blur/border on scroll
      setScrolled(window.scrollY > 20);

      // If user clicked a link, don't let scroll-spy interfere until scrolling finishes
      if (isClickScrolling.current) return;

      // Check if user reached bottom of page -> activate contact
      const isBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 70;
      if (isBottom) {
        setActive("#contact");
        return;
      }

      // Fast & accurate scroll detection using viewport position
      for (let i = 0; i < sectionIds.length; i++) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Active when the section is occupying the top-to-middle area of screen
          if (rect.top <= 200 && rect.bottom >= 150) {
            setActive(`#${id}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  // Instant response on click: moves pill immediately (0ms delay)
  const handleNavClick = (e, href) => {
    setActive(href);
    setOpen(false);

    // Lock scroll spy for 800ms while smooth scrolling completes
    isClickScrolling.current = true;
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

    scrollTimeout.current = setTimeout(() => {
      isClickScrolling.current = false;
    }, 850);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--border)] bg-[var(--surface)] shadow-xs backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo matching design: Purple squircle with </> */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="flex items-center gap-2.5 font-bold text-[var(--text)] group"
        >
          <span className="flex size-9 items-center justify-center rounded-xl bg-brand-600 text-sm font-black text-white shadow-md shadow-brand-600/30 transition-transform duration-200 group-hover:scale-105">
            {"</>"}
          </span>
          <span className="hidden text-base font-extrabold sm:block text-brand-900 dark:text-brand-100 tracking-tight">
            Fatima Abu Shaeera
          </span>
        </a>

        {/* Desktop Links with solid active purple pill matching reference */}
        <ul className="hidden items-center gap-1.5 md:flex">
          {links.map((link) => {
            const isActive = active === link.href;

            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative rounded-full px-4 py-2 text-sm font-bold transition-colors duration-150 ${
                    isActive
                      ? "text-white"
                      : "text-brand-900/80 dark:text-brand-200 hover:text-brand-600 dark:hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-brand-600 text-white shadow-md shadow-brand-600/30"
                      transition={{
                        type: "spring",
                        stiffness: 450,
                        damping: 32,
                        mass: 0.6,
                      }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right Action Elements */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="hidden items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-brand-600/30 transition-all duration-200 hover:bg-brand-700 hover:shadow-brand-600/50 md:inline-flex"
          >
            Let&apos;s Talk <ArrowRight className="size-4" />
          </a>

          {/* Mobile hamburger menu */}
          <button
            onClick={() => setOpen(!open)}
            className="rounded-full p-2 text-[var(--text)] transition hover:bg-[var(--surface)] md:hidden cursor-pointer"
            aria-label="Menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="flex flex-col gap-1 border-t border-[var(--border)] bg-[var(--surface)] px-6 py-4 backdrop-blur-xl md:hidden shadow-lg"
          >
            {links.map((link) => {
              const isActive = active === link.href;

              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`block rounded-xl px-4 py-3 font-bold transition-colors ${
                      isActive
                        ? "bg-brand-600 text-white shadow-sm"
                        : "text-[var(--text)] hover:bg-brand-50/60 dark:hover:bg-brand-800/30"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
