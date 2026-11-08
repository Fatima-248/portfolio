"use client";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { GraduationCap, Award, Calendar, MapPin, BookOpen } from "lucide-react";
import Reveal from "./Reveal";
import { experience } from "@/data/experience";

export default function Experience() {
  const containerRef = useRef(null);

  // Track scroll position within this timeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 60%"],
  });

  // Smooth out the progress spring so the line flows organically
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  // Map progress to height percentage (0% to 100%)
  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="mx-auto max-w-4xl scroll-mt-24 px-6 py-20">
      <Reveal className="text-center">
        <span className="inline-flex rounded-full bg-brand-100 dark:bg-[#1f103a] px-4 py-1.5 text-sm font-bold text-brand-800 dark:text-white uppercase tracking-widest border border-brand-200 dark:border-brand-700/80 shadow-2xs">
          Education &amp; Credentials
        </span>
        <h2 className="mt-4 text-3xl font-extrabold text-[var(--text)] md:text-4xl">
          Academic Background &amp; Certifications
        </h2>
        <p className="mt-3 text-[var(--text-muted)] max-w-lg mx-auto font-medium">
          Strong theoretical foundations in software engineering complemented by practical front-end credentials.
        </p>
      </Reveal>

      <div ref={containerRef} className="relative mt-14 ml-2 sm:ml-4">
        {/* Background Track Line (subtle light track) */}
        <div className="absolute left-[17px] sm:left-[19px] top-4 bottom-8 w-[3px] rounded-full bg-brand-100/90 dark:bg-brand-950/70" />

        {/* Animated Progress Line that grows smoothly as you scroll */}
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-[17px] sm:left-[19px] top-4 max-h-[calc(100%-2rem)] w-[3px] rounded-full bg-gradient-to-b from-brand-600 via-purple-500 to-pink-500 shadow-[0_0_14px_rgba(168,85,247,0.7)] z-0 origin-top"
        >
          {/* Glowing pulse tip dot at the leading edge */}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 size-2.5 rounded-full bg-pink-400 shadow-[0_0_10px_#ec4899] animate-pulse" />
        </motion.div>

        {/* Timeline items list */}
        <div className="space-y-10 sm:space-y-12 pl-12 sm:pl-16">
          {experience.map((item, i) => {
            const isEdu = item.type === "education";
            const Icon = isEdu ? GraduationCap : Award;

            return (
              <div key={item.title} className="relative group">
                {/* Timeline marker with icon (sits right on the animated line) */}
                <motion.span
                  whileHover={{ scale: 1.15 }}
                  className="absolute -left-[46px] sm:-left-[60px] top-1.5 flex size-9 sm:size-10 items-center justify-center rounded-full border-4 border-[var(--bg)] bg-brand-600 text-white shadow-md shadow-brand-600/30 transition-all duration-300 group-hover:bg-brand-700 group-hover:shadow-lg group-hover:shadow-brand-600/50 z-10"
                >
                  <Icon className="size-4 sm:size-4.5" />
                </motion.span>

                <Reveal delay={i * 0.08}>
                  <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-7 shadow-xs backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-600/15">
                    {/* Period badge and place */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-100 dark:bg-[#251246] px-3.5 py-1 text-xs font-bold text-brand-800 dark:text-brand-200 border border-brand-200/80 dark:border-brand-700/80 shadow-2xs">
                        <Calendar className="size-3.5 text-brand-600 dark:text-brand-400" />
                        {item.period}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand-800/80 dark:text-brand-200">
                        <MapPin className="size-3.5 text-brand-600" />
                        {item.location || item.place}
                      </span>
                    </div>

                    <h3 className="mt-3 text-lg sm:text-xl font-bold text-[var(--text)]">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm font-bold text-brand-700 dark:text-brand-300">
                      {item.place}
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)] font-normal">
                      {item.description}
                    </p>

                    {/* Coursework pills if available */}
                    {item.coursework && (
                      <div className="mt-5 border-t border-[var(--border)] pt-4">
                        <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--text)]">
                          <BookOpen className="size-3.5 text-brand-600 dark:text-brand-400" /> Relevant Coursework:
                        </p>
                        <div className="mt-2.5 flex flex-wrap gap-2">
                          {item.coursework.map((course) => (
                            <span
                              key={course}
                              className="rounded-lg bg-white dark:bg-[#1f103a] border border-brand-200 dark:border-brand-700/80 px-3 py-1 text-xs font-semibold text-brand-900 dark:text-white shadow-2xs"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
