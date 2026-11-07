
"use client";
import { User, Laptop, Clock } from "lucide-react";
import Reveal from "./Reveal";

const stats = [
  { icon: Laptop, value: "4+", label: "Projects Completed" },
  { icon: Clock, value: "1+", label: "Years of Coding" },
];

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl scroll-mt-24 px-6 py-20">
      {/* Decorative floral branch SVG */}
      <div className="pointer-events-none absolute bottom-0 left-0 -z-10 hidden opacity-30 dark:opacity-15 lg:block">
        <svg width="220" height="260" viewBox="0 0 200 240" fill="none" className="text-brand-500">
          <path d="M20 230 C 40 180, 60 120, 110 50" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M48 185 C 30 170, 25 155, 30 145 C 40 145, 52 165, 50 182" fill="currentColor" fillOpacity="0.5" />
          <path d="M68 145 C 85 135, 95 125, 95 115 C 85 115, 75 130, 70 143" fill="currentColor" fillOpacity="0.5" />
          <path d="M78 115 C 60 100, 55 85, 60 75 C 70 75, 82 95, 80 112" fill="currentColor" fillOpacity="0.5" />
          <path d="M98 75 C 115 65, 125 55, 125 45 C 115 45, 105 60, 100 73" fill="currentColor" fillOpacity="0.5" />
          <path d="M110 50 C 115 35, 125 25, 130 25 C 130 35, 120 45, 110 50" fill="currentColor" fillOpacity="0.6" />
        </svg>
      </div>

      <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14">

        {/* Left Column (Content) */}
        <Reveal className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 dark:border-brand-700/80 bg-brand-100/90 dark:bg-[#1f103a] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-900 dark:text-white shadow-2xs">
            <User className="size-3.5 text-brand-600 dark:text-brand-400" />
            <span>About Me</span>
          </div>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[var(--text)] sm:text-4xl">
            Computer Systems Engineering Student &amp;{" "}
            <span className="gradient-text">Front-End Developer</span>
          </h2>

          <p className="mt-5 text-base leading-relaxed text-[var(--text)] font-normal sm:text-lg">
            I am a passionate Front-End Developer and Computer Systems Engineering student at{" "}
            <span className="font-bold text-brand-700 dark:text-brand-300">
              Al-Azhar University of Gaza
            </span>
            , with hands-on experience building responsive, accessible, and user-friendly web applications.
          </p>

          <p className="mt-3 text-base leading-relaxed text-[var(--text-muted)]">
            Proficient in{" "}
            <strong className="text-[var(--text)] font-semibold">
              React, Next.js, JavaScript, Tailwind CSS, HTML5, and CSS3
            </strong>
            , with practical experience integrating RESTful APIs using Axios, implementing multilingual interfaces (i18n), and developing full-stack applications using{" "}
            <strong className="text-[var(--text)] font-semibold">
              PHP and MySQL
            </strong>
            .
          </p>

          <p className="mt-3 text-base leading-relaxed text-[var(--text-muted)]">
            I am continuously expanding my technical skills and passionate about creating modern web experiences, writing clean code, and turning ideas into functional, user-focused applications.
          </p>

          {/* Quick info pills */}
          <div className="mt-6 flex flex-wrap gap-2.5 text-xs font-bold">
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-brand-200/90 dark:border-brand-700/80 bg-white dark:bg-[#1f103a] px-3.5 py-1.5 text-brand-900 dark:text-white shadow-xs">
              📍 Gaza, Palestine
            </span>

            <span className="inline-flex items-center gap-1.5 rounded-lg border border-brand-200/90 dark:border-brand-700/80 bg-white dark:bg-[#1f103a] px-3.5 py-1.5 text-brand-900 dark:text-white shadow-xs">
              🎓 Al-Azhar University (2023 – 2028)
            </span>

            <span className="inline-flex items-center gap-1.5 rounded-lg border border-brand-200/90 dark:border-brand-700/80 bg-white dark:bg-[#1f103a] px-3.5 py-1.5 text-brand-900 dark:text-white shadow-xs">
              🗣 Arabic (Native), English (Intermediate)
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#skills"
              className="inline-flex items-center gap-2 rounded-full border-2 border-brand-600 dark:border-brand-400 bg-white dark:bg-[#1f103a] px-6 py-2.5 text-sm font-bold text-brand-700 dark:text-white shadow-2xs transition-all hover:bg-brand-600 hover:text-white dark:hover:bg-[#2c1752]"
            >
              Know More →
            </a>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-2.5 text-sm font-bold text-white shadow-md shadow-brand-600/30 transition-all hover:bg-brand-700"
            >
              View Projects
            </a>
          </div>
        </Reveal>

        {/* Right Column (Centered Stat Cards) */}
<div className="grid w-full grid-cols-2 items-center justify-center gap-4 lg:col-span-5 lg:place-self-center">
  {stats.map(({ icon: Icon, value, label }, i) => (
    <Reveal key={label} delay={i * 0.15}>
      <div className="group flex min-h-[190px] h-full flex-col items-center justify-center rounded-3xl border border-brand-200/70 dark:border-brand-700/40 bg-white/80 dark:bg-[#1f103a]/80 p-5 text-center shadow-md shadow-brand-900/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-brand-600/15">

        <div className="flex size-14 items-center justify-center rounded-2xl bg-brand-100 dark:bg-[#28144b] text-brand-700 dark:text-brand-300 transition-transform duration-300 group-hover:scale-110">
          <Icon className="size-7" />
        </div>

        <p className="mt-4 text-4xl font-extrabold text-brand-700 dark:text-brand-300">
          {value}
        </p>

        <p className="mt-2 text-xs font-bold uppercase tracking-wider text-brand-900/80 dark:text-white">
          {label}
        </p>

      </div>
    </Reveal>
  ))}
</div>

      </div>
    </section>
  );
}
