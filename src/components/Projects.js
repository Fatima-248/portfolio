"use client";
import Image from "next/image";
import { ExternalLink, CheckCircle2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Reveal from "./Reveal";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-20">
      <Reveal className="text-center">
        <span className="inline-flex rounded-full bg-brand-100 dark:bg-[#1f103a] px-4 py-1.5 text-sm font-bold text-brand-800 dark:text-white uppercase tracking-widest border border-brand-200 dark:border-brand-700/80 shadow-2xs">
          Featured Projects
        </span>
        <h2 className="mt-4 text-3xl font-extrabold text-[var(--text)] md:text-4xl">
          Real-World Applications &amp; Works
        </h2>
        <p className="mt-3 text-[var(--text-muted)] max-w-2xl mx-auto font-medium">
          Explore production-ready web apps, full-stack systems, and responsive interfaces built with clean architecture.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-8 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.1} className="h-full">
            <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] shadow-xs backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-600/15">
              {/* Card top banner / preview */}
              <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-brand-600 via-brand-500 to-brand-700 flex items-center justify-center p-6 text-white shadow-xs">
                {p.image ? (
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <span className="flex size-14 items-center justify-center rounded-2xl bg-white/20 text-2xl font-black backdrop-blur-md shadow-inner text-white">
                      {"</>"}
                    </span>
                    <h4 className="mt-3 text-lg font-bold text-white line-clamp-1 drop-shadow-xs">{p.title}</h4>
                    <p className="text-xs text-brand-100 mt-1 font-medium">{p.subtitle}</p>
                  </div>
                )}

                {/* Subtle decorative circles */}
                <div className="absolute -top-12 -right-12 size-40 rounded-full bg-white/10 blur-xl" />
                <div className="absolute -bottom-12 -left-12 size-40 rounded-full bg-black/10 blur-xl" />

                {/* Hover overlay with action buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 bg-brand-950/80 opacity-0 backdrop-blur-xs transition-opacity duration-300 group-hover:opacity-100 z-20">
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-brand-700 shadow-lg transition-transform hover:scale-105"
                    >
                      Live Demo <ExternalLink className="size-4" />
                    </a>
                  )}
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/15 px-4 py-2 text-sm font-bold text-white backdrop-blur-md transition-transform hover:scale-105 hover:bg-white/30"
                    >
                      Code <FaGithub className="size-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-700 dark:text-brand-300">
                      {p.subtitle}
                    </span>
                    <h3 className="mt-1 text-xl font-bold text-[var(--text)]">
                      {p.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)] font-normal">
                  {p.description}
                </p>

                {/* Key Achievements/Highlights */}
                {p.bullets && (
                  <ul className="mt-4 space-y-2 border-t border-[var(--border)] pt-4 text-xs text-brand-900 dark:text-white font-medium">
                    {p.bullets.slice(0, 3).map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="size-3.5 text-brand-600 dark:text-brand-400 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tech Tags */}
                <div className="mt-6 flex flex-wrap gap-2 pt-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-white dark:bg-[#1f103a] px-3.5 py-1 text-xs font-bold text-brand-900 dark:text-white border border-brand-200/90 dark:border-brand-700/80 shadow-2xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
