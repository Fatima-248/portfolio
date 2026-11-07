"use client";
import { Monitor, Server, Database, Wrench, Globe } from "lucide-react";
import Reveal from "./Reveal";
import { motion } from "framer-motion";

const groups = [
  {
    icon: Monitor,
    title: "Front-End Development",
    color: "from-violet-600 to-purple-600",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Responsive Web Design",
    ],
  },
  {
    icon: Globe,
    title: "API & Data Integration",
    color: "from-indigo-600 to-blue-600",
    items: [
      "REST APIs",
      "Axios",
      "HTTP Requests",
      "JSON",
      "next-intl (i18n)",
    ],
  },
  {
    icon: Server,
    title: "Back-End & Core Languages",
    color: "from-purple-600 to-indigo-600",
    items: [
      "JavaScript",
      "PHP",
      "Java",
      "C++",
      "User Authentication",
      "CRUD Operations",
    ],
  },
  {
    icon: Database,
    title: "Database Management",
    color: "from-fuchsia-600 to-pink-600",
    items: [
      "MySQL",
      "SQL Queries",
      "Relational Database Design",
      "PDO",
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Workflow",
    color: "from-pink-600 to-rose-600",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Figma",
      "XAMPP",
      "Chrome DevTools",
    ],
  },
];

// Crisp, readable badge in both Light and Dark mode
const skillBadge =
  "rounded-full bg-white dark:bg-[#1f103a] border border-brand-200 dark:border-brand-700/80 px-4 py-1.5 text-xs sm:text-sm font-bold text-brand-900 dark:text-white shadow-2xs transition-all duration-200 hover:bg-brand-600 hover:text-white dark:hover:bg-brand-500 cursor-default select-none";

export default function Skills() {
  const allSkills = groups.flatMap((g) => g.items);

  return (
    <section id="skills" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-20">
      <Reveal className="text-center">
        <span className="inline-flex rounded-full bg-brand-100 dark:bg-[#1f103a] px-4 py-1.5 text-sm font-bold text-brand-800 dark:text-white uppercase tracking-widest border border-brand-200 dark:border-brand-700/80 shadow-2xs">
          Technical Skills
        </span>
        <h2 className="mt-4 text-3xl font-extrabold text-[var(--text)] md:text-4xl">
          Technologies &amp; Tools I Use
        </h2>
        <p className="mt-3 text-[var(--text-muted)] max-w-xl mx-auto font-medium">
          A comprehensive toolkit honed through university coursework, certifications, and hands-on project development.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {groups.map(({ icon: Icon, title, color, items }, i) => (
          <Reveal key={title} delay={i * 0.08} className="h-full">
            <div className="group h-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-xs backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand-600/15 flex flex-col">
              {/* Header */}
              <div className={`bg-gradient-to-r ${color} p-5 text-white shadow-xs`}>
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-white/25 backdrop-blur-sm shadow-inner">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="text-base font-bold text-white drop-shadow-xs">{title}</h3>
                </div>
              </div>

              {/* Items */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <ul className="flex flex-wrap gap-2.5">
                  {items.map((skill, j) => (
                    <motion.li
                      key={skill}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: j * 0.03 + i * 0.05 }}
                      className={skillBadge}
                    >
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Infinite scrolling marquee of all skills */}
      <Reveal delay={0.2}>
        <div className="mt-14 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] py-4 backdrop-blur shadow-2xs">
          <div className="flex w-max animate-marquee gap-8 pe-8 whitespace-nowrap">
            {[...allSkills, ...allSkills].map((skill, idx) => (
              <span key={idx} className="flex items-center gap-2 text-sm font-bold text-brand-800 dark:text-white">
                <span className="text-brand-500 font-extrabold">✦</span>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
