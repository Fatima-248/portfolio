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

function LeavesDecor({ className }) {
  return (
    <motion.div
      animate={{ rotate: [0, 3, 0], y: [0, -4, 0] }}
      transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      className={className}
      aria-hidden
    >
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md select-none pointer-events-none"
      >
        {/* Main stem */}
        <path
          d="M110 115 C 88 95, 70 65, 58 35"
          stroke="#15803d"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        {/* Top leaf */}
        <path
          d="M58 35 C 50 15, 70 8, 78 20 C 86 32, 68 44, 58 35 Z"
          fill="url(#leaf-grad-1)"
        />
        {/* Middle-left leaf */}
        <path
          d="M70 56 C 46 48, 42 70, 56 78 C 70 86, 80 69, 70 56 Z"
          fill="url(#leaf-grad-2)"
        />
        {/* Middle-right leaf */}
        <path
          d="M80 64 C 102 52, 112 72, 100 84 C 88 96, 74 80, 80 64 Z"
          fill="url(#leaf-grad-1)"
        />
        {/* Bottom-left leaf */}
        <path
          d="M90 90 C 70 84, 66 104, 80 110 C 94 116, 100 100, 90 90 Z"
          fill="url(#leaf-grad-2)"
        />
        <defs>
          <linearGradient id="leaf-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4ade80" />
            <stop offset="100%" stopColor="#16a34a" />
          </linearGradient>
          <linearGradient id="leaf-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#86efac" />
            <stop offset="100%" stopColor="#22c55e" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
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
      className="relative w-full overflow-hidden scroll-mt-24 pt-10 pb-16 md:pt-14 md:pb-24"
    >
      {/* Full-width soft ambient background wash */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-100/50 via-brand-50/15 to-transparent dark:from-brand-950/50 dark:via-transparent" />
        <div className="absolute -left-20 top-[-6rem] size-[38rem] rounded-full bg-brand-200/50 dark:bg-brand-900/30 blur-3xl animate-float" />
        <div className="absolute -right-20 top-1/4 size-[40rem] rounded-full bg-brand-300/40 dark:bg-brand-800/25 blur-3xl animate-float [animation-delay:3s]" />
      </div>

      {/* Centered content grid matching design */}
      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-6 lg:grid-cols-12 lg:gap-12">
        {/* ---- LEFT COLUMN (Content) ---- */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 lg:col-span-6 xl:col-span-6"
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
            <div className="absolute -top-4 left-[16.5rem] sm:left-[18.5rem] select-none pointer-events-none flex items-center gap-0.5 text-brand-500 animate-float [animation-delay:1s]">
              <span className="text-3xl sm:text-4xl font-hand leading-none">♡</span>
              <div className="flex flex-col gap-1 -rotate-12">
                <span className="w-2 h-0.5 bg-brand-400 rounded-full" />
                <span className="w-1.5 h-0.5 bg-brand-400 rounded-full" />
              </div>
            </div>

            <h1 className="text-5xl font-black leading-[1.12] tracking-tight text-[#1e133d] dark:text-white sm:text-6xl lg:text-7xl">
              Hello, I&apos;m
              <span className="relative mt-1 block">
                <span className="gradient-text font-black">Fatima Abu Shaera</span>
                {/* Hand-drawn smooth purple-to-pink underline doodle */}
                <svg
                  className="absolute -bottom-2 sm:-bottom-3 left-0 w-48 sm:w-60"
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
          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 font-bold text-white shadow-xl shadow-brand-600/30 transition-all hover:bg-brand-700 hover:shadow-brand-600/50"
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
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border-2 border-brand-800/40 dark:border-brand-400 bg-white dark:bg-[#1f103a] px-7 py-3.5 font-bold text-brand-900 dark:text-white shadow-xs transition-all hover:bg-brand-50 dark:hover:bg-[#2c1752] disabled:opacity-70"
            >
              <span>{downloading ? "Downloading..." : "Download CV"}</span>
              <Download className={`size-4 ${downloading ? "animate-bounce" : ""}`} />
            </motion.button>
          </motion.div>

          {/* Tech icons row matching Image 2 */}
          <motion.div variants={item} className="mt-10">
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
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
          initial={{ opacity: 0, scale: 0.92, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-lg lg:col-span-6 xl:col-span-6 flex items-center justify-center py-6"
        >
          {/* Ambient glow behind artwork */}
          <div className="absolute inset-0 rounded-full bg-brand-400/25 dark:bg-brand-600/25 blur-3xl -z-10" />

          {/* Composition Container matching the design */}
          <div className="relative mx-auto flex items-center justify-center w-full max-w-[430px] sm:max-w-[470px] aspect-[1/1] select-none">
            {/* 1) Outer delicate orbit rings */}
            <div className="absolute inset-0 rounded-full border border-brand-300/70 dark:border-brand-500/30 scale-[1.06] pointer-events-none animate-[spin_36s_linear_infinite]">
              {/* Satellite dot on the orbit ring */}
              <span className="absolute top-10 left-16 size-2.5 rounded-full bg-brand-500 shadow-[0_0_10px_#8d56e2]" />
            </div>

            <div className="absolute inset-0 rounded-full border border-dashed border-brand-200/50 dark:border-brand-700/30 scale-[1.16] pointer-events-none animate-[spin_48s_linear_infinite_reverse]" />

            {/* 2) Soft pastel purple backdrop circle */}
            <div className="absolute inset-4 sm:inset-5 rounded-full bg-gradient-to-tr from-[#d8b4fe]/85 via-[#e9d5ff]/70 to-[#f3e8ff]/90 dark:from-[#6d33cb]/40 dark:via-[#421a82]/35 dark:to-[#1f103a]/50 shadow-inner" />

            {/* 3) Central Portrait with smooth floating motion */}
            <motion.div
              animate={{ y: [-7, 7, -7] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-full h-full flex items-center justify-center"
            >
              <div className="relative w-[90%] h-[95%]">
                <Image
                  src="/portrait.png"
                  alt="Fatima Abu Shaeera - Front-End Developer"
                  fill
                  priority
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </motion.div>

            {/* 4) Floating Code Badge </> on the right side */}
            <motion.div
              animate={{
                y: [-8, 8, -8],
                rotate: [-11, -7, -11],
              }}
              transition={{
                duration: 4.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.15, rotate: -4 }}
              className="absolute -right-2 sm:-right-4 top-[24%] sm:top-[26%] z-20 cursor-pointer select-none rounded-2xl bg-gradient-to-br from-[#8d56e2] via-[#7c3aed] to-[#5725a8] px-4 py-2.5 sm:px-5 sm:py-3 shadow-xl shadow-brand-600/40 border border-white/30 backdrop-blur-xs flex items-center justify-center transition-all hover:shadow-2xl hover:shadow-brand-500/60"
              title="Code & Front-End"
            >
              <span className="font-mono text-xl sm:text-2xl font-black text-white tracking-wider leading-none drop-shadow-xs">
                &lt;/&gt;
              </span>
            </motion.div>

            {/* 5) Sparkling Stars (4 distinct positions matching design) */}
            {/* Top-Left Star */}
            <Sparkle className="absolute left-2 sm:left-4 top-10 sm:top-12 size-6 sm:size-7 text-brand-600 dark:text-brand-300 animate-twinkle pointer-events-none drop-shadow-sm z-20" />

            {/* Mid/Lower-Left Star */}
            <Sparkle className="absolute -left-2 sm:left-1 top-[56%] size-5 sm:size-6 text-brand-500 dark:text-brand-400 animate-twinkle [animation-delay:1.5s] pointer-events-none drop-shadow-sm z-20" />

            {/* Top-Right Star */}
            <Sparkle className="absolute right-8 sm:right-12 top-4 sm:top-6 size-5 sm:size-6 text-brand-600 dark:text-brand-400 animate-twinkle [animation-delay:0.8s] pointer-events-none drop-shadow-sm z-20" />

            {/* Bottom-Right Star */}
            <Sparkle className="absolute right-6 sm:right-10 bottom-24 sm:bottom-28 size-5 sm:size-6 text-brand-500 dark:text-brand-300 animate-twinkle [animation-delay:2.2s] pointer-events-none drop-shadow-sm z-20" />

          </div>
        </motion.div>
      </div>
    </section>
  );
}
