"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiPhp,
} from "react-icons/si";

const techs = [
  {
    Icon: SiReact,
    color: "#00D8FF",
    bgLight: "#E8F4FE",
    bgDark: "rgba(0, 216, 255, 0.12)",
    label: "React",
  },
  {
    Icon: SiNextdotjs,
    color: "#000000",
    bgLight: "#F0E8FC",
    bgDark: "rgba(168, 85, 247, 0.15)",
    label: "Next.js",
  },
  {
    Icon: SiTypescript,
    color: "#3178C6",
    bgLight: "#E6F0FE",
    bgDark: "rgba(49, 120, 198, 0.15)",
    label: "TypeScript",
  },
  {
    Icon: SiTailwindcss,
    color: "#06B6D4",
    bgLight: "#E6FAFC",
    bgDark: "rgba(6, 182, 212, 0.12)",
    label: "Tailwind CSS",
  },
  {
    Icon: SiJavascript,
    color: "#F7DF1E",
    bgLight: "#FEF3E2",
    bgDark: "rgba(247, 223, 30, 0.12)",
    label: "JavaScript",
  },
  {
    Icon: SiHtml5,
    color: "#E34F26",
    bgLight: "#FDE8E8",
    bgDark: "rgba(227, 79, 38, 0.12)",
    label: "HTML5",
  },
  {
    Icon: SiCss,
    color: "#1572B6",
    bgLight: "#E3EFFB",
    bgDark: "rgba(21, 114, 182, 0.15)",
    label: "CSS3",
  },
  {
    Icon: SiPhp,
    color: "#777BB4",
    bgLight: "#F1EAFD",
    bgDark: "rgba(119, 123, 180, 0.15)",
    label: "PHP",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Sparkle({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 0c.6 6.6 5.4 11.4 12 12-6.6.6-11.4 5.4-12 12-.6-6.6-5.4-11.4-12-12C6.6 11.4 11.4 6.6 12 0z" />
    </svg>
  );
}

export default function Hero() {
  const [downloading, setDownloading] = useState(false);

  const handleDownloadCV = async () => {
  if (downloading) return;
  setDownloading(true);

  try {
    const res = await fetch("/cv.pdf");
    if (!res.ok) throw new Error("File not found");
    const blob = await res.blob();

    const blobUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = "Fatima_Abushaeera_CV.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();

    setTimeout(() => URL.revokeObjectURL(blobUrl), 1000);
  } catch (err) {
    console.error("Download error:", err);
  } finally {
    setDownloading(false);
  }
};

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden scroll-mt-24 pt-8 pb-12 sm:pt-10 sm:pb-16 md:pt-14 md:pb-24"
    >
      {/* Full-width soft ambient background wash */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-100/50 via-brand-50/15 to-transparent dark:from-brand-950/50 dark:via-transparent" />
        <div className="absolute -left-20 top-[-6rem] size-[38rem] rounded-full bg-brand-200/50 dark:bg-brand-900/30 blur-3xl animate-float" />
        <div className="absolute -right-20 top-1/4 size-[40rem] rounded-full bg-brand-300/40 dark:bg-brand-800/25 blur-3xl animate-float [animation-delay:3s]" />
      </div>

      {/* Centered content grid matching design */}
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12">
        {/* ---- LEFT COLUMN (Content) ---- */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 min-w-0 lg:col-span-6 xl:col-span-6"
        >
          {/* Pill Badge: ● Front-End Developer */}
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-brand-200/90 dark:border-brand-700/80 bg-brand-100/90 dark:bg-[#1f103a] px-4 py-1.5 text-sm font-bold text-brand-900 dark:text-white shadow-2xs backdrop-blur-sm"
          >
            <span className="size-2 rounded-full bg-brand-600 dark:bg-brand-400" />
            Front-End Developer
          </motion.span>

          {/* Heading with cute heart and underline matching the design */}
          <motion.div variants={item} className="relative mt-6">
            {/* Hand-drawn outline heart with radiant accent marks */}
            <div className="absolute -top-4 left-[12.5rem] sm:left-[17.5rem] select-none pointer-events-none flex items-center gap-0.5 text-brand-500 animate-float [animation-delay:1s]">
              <span className="text-3xl sm:text-4xl font-hand leading-none">♡</span>
              <div className="flex flex-col gap-1 -rotate-12">
                <span className="w-2 h-0.5 bg-brand-400 rounded-full" />
                <span className="w-1.5 h-0.5 bg-brand-400 rounded-full" />
              </div>
            </div>

            <h1 className="text-[clamp(1.8rem,9.4vw,2.5rem)] font-black leading-[1.12] tracking-tight text-[#1e133d] dark:text-white sm:text-6xl lg:text-7xl">
              Hello, I&apos;m
              <span className="relative mt-1 block">
                <span className="gradient-text font-black">Fatima Eyad</span>
                {/* Hand-drawn smooth purple-to-pink underline doodle */}
                <svg
                  className="absolute -bottom-2 sm:-bottom-3 left-0 w-44 sm:w-56"
                  viewBox="0 0 250 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 11 C 65 4, 175 4, 246 10"
                    stroke="url(#name-underline-grad)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="name-underline-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#7c3aed" />
                      <stop offset="50%" stopColor="#c026d3" />
                      <stop offset="100%" stopColor="#db2777" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>
          </motion.div>

          {/* Subtitle / summary */}
          <motion.p
            variants={item}
            className="mt-8 max-w-lg text-base leading-relaxed text-[var(--text-muted)] sm:text-lg font-medium"
          >
            I craft modern and responsive web experiences with a passion for
            clean code and beautiful design.
          </motion.p>

          {/* Call to Actions matching design */}
          <motion.div variants={item} className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="#projects"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-5 py-3.5 font-bold text-white shadow-xl shadow-brand-600/30 transition-all hover:bg-brand-700 hover:shadow-brand-600/50 sm:w-auto sm:px-7"
            >
              Explore My Work <ArrowRight className="size-4" />
            </motion.a>

            {/* Download CV */}
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              type="button"
              onClick={handleDownloadCV}
              disabled={downloading}
              className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border-2 border-brand-800/40 dark:border-brand-400 bg-white dark:bg-[#1f103a] px-5 py-3.5 font-bold text-brand-900 dark:text-white shadow-xs transition-all hover:bg-brand-50 dark:hover:bg-[#2c1752] disabled:opacity-70 sm:w-auto sm:px-7"
            >
              <span>{downloading ? "Downloading..." : "Download CV"}</span>
              <Download className={`size-4 ${downloading ? "animate-bounce" : ""}`} />
            </motion.button>
          </motion.div>

          {/* Tech icons row matching Image 2 */}
          <motion.div variants={item} className="mt-10">
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:justify-start sm:gap-3">
              {techs.map(({ Icon, color, bgLight, bgDark, label }) => (
                <motion.div
                  key={label}
                  whileHover={{ y: -6, scale: 1.14 }}
                  whileTap={{ scale: 0.95 }}
                  title={label}
                  style={{
                    "--tile-bg-light": bgLight,
                    "--tile-bg-dark": bgDark,
                  }}
                  className="flex size-12 sm:size-13 cursor-pointer items-center justify-center rounded-2xl bg-[var(--tile-bg-light)] dark:bg-[var(--tile-bg-dark)] text-2xl shadow-xs transition-all duration-200 hover:shadow-md"
                >
                  <Icon
                    style={{ color: color === "#000000" ? undefined : color }}
                    className={color === "#000000" ? "text-black dark:text-white" : ""}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* ---- RIGHT COLUMN (Hero Visual Artwork) ---- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="relative mx-auto w-full min-w-0 max-w-xl lg:max-w-none lg:col-span-6 xl:col-span-6 flex items-end justify-center -mt-6 sm:-mt-10 lg:-mt-14 pb-2"
        >
          {/* Ambient glow behind artwork */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-80 sm:size-[28rem] lg:size-[36rem] rounded-full bg-brand-400/25 dark:bg-brand-600/20 blur-3xl -z-10 pointer-events-none" />

          {/* Composition Stage matching WhatsApp Image exactly */}
          <div className="relative mx-auto w-full max-w-[500px] sm:max-w-[570px] lg:max-w-[640px] xl:max-w-[680px] h-[clamp(360px,120vw,470px)] sm:h-[590px] lg:h-[660px] xl:h-[690px] select-none flex items-end justify-center">

            {/* 1) Outer delicate orbit ring */}
            <div className="absolute top-3 sm:top-5 lg:top-6 left-1/2 -translate-x-[48%] size-[min(100vw,420px)] sm:size-[460px] lg:size-[550px] xl:size-[610px] rounded-full border-[1.5px] border-[#d8baf6] dark:border-brand-500/40 pointer-events-none z-0" />

            {/* 2) Main rich pastel lavender circle (matches #ddc4fd from reference) */}
            <div className="absolute top-7 sm:top-9 lg:top-10 left-1/2 -translate-x-[48%] size-[min(92vw,380px)] sm:size-[410px] lg:size-[500px] xl:size-[560px] rounded-full bg-gradient-to-br from-[#e8d8fd] via-[#ddc4fd] to-[#d3aefa] dark:from-[#3d1c6e] dark:via-[#33155e] dark:to-[#240d44] shadow-[inset_0_2px_18px_rgba(168,85,247,0.18)] z-0" />

            {/* 3) Sparkling Stars positioned around the circle */}
            {/* Top-Left Star */}
            <Sparkle className="absolute top-[8%] sm:top-[10%] left-[6%] sm:left-[8%] size-6 sm:size-7 text-[#7c3aed] dark:text-brand-300 animate-twinkle pointer-events-none drop-shadow-sm z-10" />

            {/* Lower-Left Star */}
            <Sparkle className="absolute top-[44%] sm:top-[46%] left-[0%] sm:left-[2%] size-5 sm:size-6 text-[#8b5cf6] dark:text-brand-400 animate-twinkle [animation-delay:1.5s] pointer-events-none drop-shadow-sm z-10" />

            {/* Top-Right Star */}
            <Sparkle className="absolute top-[4%] sm:top-[6%] right-[8%] sm:right-[10%] size-5 sm:size-6 text-[#7c3aed] dark:text-brand-300 animate-twinkle [animation-delay:0.8s] pointer-events-none drop-shadow-sm z-10" />

            {/* Mid-Right Star */}
            <Sparkle className="absolute top-[46%] sm:top-[48%] right-[2%] sm:right-[4%] size-5 sm:size-6 text-[#8b5cf6] dark:text-brand-400 animate-twinkle [animation-delay:2.2s] pointer-events-none drop-shadow-sm z-10" />

            {/* 4) Floating Code Badge </> on the right side */}
            <motion.div
              animate={{
                y: [-5, 5, -5],
                rotate: [-14, -10, -14],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.1, rotate: -8 }}
              className="absolute right-0 sm:right-2 lg:right-3 top-[17%] sm:top-[19%] z-30 cursor-pointer select-none rounded-2xl bg-gradient-to-br from-[#8d56e2] via-[#7c3aed] to-[#5923b0] px-4 py-2.5 sm:px-5 sm:py-3 shadow-xl shadow-brand-700/40 border border-white/30 backdrop-blur-xs flex items-center justify-center transition-all hover:shadow-2xl hover:shadow-brand-500/50"
              title="Code"
            >
              <span className="font-mono text-xl sm:text-2xl font-black text-white tracking-wider leading-none drop-shadow-xs">
                &lt;/&gt;
              </span>
            </motion.div>

            {/* 5) Central Portrait (Raised up, matching design) */}
            <div className="relative z-20 h-[min(92vw,470px)] sm:h-[550px] lg:h-[625px] xl:h-[660px] w-auto aspect-[1176/1338] bottom-4 sm:bottom-6 lg:bottom-8 pointer-events-none select-none flex-shrink-0">
              <Image
                src="/hero-portrait.png"
                alt="Fatima Eyad - Front-End Developer"
                fill
                sizes="(max-width: 640px) 82vw, (max-width: 1024px) 580px, 660px"
                priority
                className="object-contain object-bottom drop-shadow-2xl"
              />
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
