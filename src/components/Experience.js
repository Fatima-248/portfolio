"use client";
import { GraduationCap, Award, Calendar, MapPin, BookOpen } from "lucide-react";
import Reveal from "./Reveal";
import { experience } from "@/data/experience";

export default function Experience() {
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

      <div className="relative mt-14 ml-4 border-l-2 border-brand-200 dark:border-brand-800 pl-8 sm:pl-10 space-y-12">
        {experience.map((item, i) => {
          const isEdu = item.type === "education";
          const Icon = isEdu ? GraduationCap : Award;

          return (
            <div key={item.title} className="relative group">
              {/* Timeline marker with icon */}
              <span className="absolute -left-[45px] sm:-left-[53px] top-1.5 flex size-9 items-center justify-center rounded-full border-4 border-[var(--bg)] bg-brand-600 text-white shadow-md shadow-brand-600/30 transition-transform duration-300 group-hover:scale-110">
                <Icon className="size-4" />
              </span>

              <Reveal delay={i * 0.1}>
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
    </section>
  );
}
