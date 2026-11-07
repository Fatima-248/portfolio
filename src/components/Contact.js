"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  User,
  FileText,
  MessageSquare,
  Copy,
  Check,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import Reveal from "./Reveal";

const EMAIL = "f2482005@gmail.com";
const PHONE_DISPLAY = "+972 592-141-499";
const PHONE_LINK = "+972592141499";

const socials = [
  {
    icon: FaGithub,
    href: "https://github.com/Fatima-248",
    label: "GitHub",
    cls: "text-[#24292f] hover:bg-[#24292f] hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-[#24292f]",
  },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/fatima-abusheara/", 
    label: "LinkedIn",
    cls: "text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white",
  },
  {
    icon: Mail,
    href: "https://mail.google.com/mail/u/0/?to=f2482005@gmail.com&fs=1&tf=cm",
    label: "Email",
    cls: "text-[#EA4335] hover:bg-[#EA4335] hover:text-white",
  },
];

const cardClass =
  "rounded-3xl border border-brand-200/70 dark:border-brand-700/40 bg-white/80 dark:bg-[#1f103a]/80 shadow-md shadow-brand-900/5 backdrop-blur-sm";

const fieldClass =
  "w-full rounded-xl border border-brand-200/90 dark:border-brand-700/80 bg-white dark:bg-[#1f103a] ps-11 pe-4 py-3 text-sm text-brand-900 dark:text-white placeholder:text-brand-900/40 dark:placeholder:text-brand-200/40 outline-none shadow-2xs transition-all duration-200 hover:border-brand-400 focus:border-brand-600 focus:ring-4 focus:ring-brand-200/60 dark:focus:ring-brand-800/60";

function Field({ label, icon: Icon, iconClass, textarea = false, ...props }) {
  const Comp = textarea ? "textarea" : "input";
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
        {label}
      </span>
      <span className="group relative block">
        <Icon
          className={`pointer-events-none absolute start-4 size-4 transition-transform duration-200 group-focus-within:scale-125 ${iconClass} ${
            textarea ? "top-4" : "top-1/2 -translate-y-1/2"
          }`}
        />
        <Comp {...props} className={`${fieldClass} ${textarea ? "resize-none" : ""}`} />
      </span>
    </label>
  );
}

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [copied, setCopied] = useState(false);
  const [msgLen, setMsgLen] = useState(0);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setMsgLen(0);
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  async function copyEmail(e) {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  }

  const info = [
    {
      icon: Mail,
      label: "Email",
      value: EMAIL,
      href: `https://mail.google.com/mail/u/0/?to=f2482005@gmail.com&fs=1&tf=cm`,
      box: "bg-red-100 text-red-500 dark:bg-red-500/15 dark:text-red-400",
      
    },
    {
      icon: Phone,
      label: "Phone",
      value: PHONE_DISPLAY,
      href: `tel:${PHONE_LINK}`,
      ltr: true,
      box: "bg-green-100 text-green-600 dark:bg-green-500/15 dark:text-green-400",
    },
    {
      icon: MapPin,
      label: "Location",
      href: "https://www.google.com/maps/place/Az+Zawayda/@31.4316456,34.363707,13.25z/",
      value: "Al-Zawayda, Gaza, Palestine",
      box: "bg-orange-100 text-orange-500 dark:bg-orange-500/15 dark:text-orange-400",
    },
  ];

  return (
    <section id="contact" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      {/* Decorative floral branch (same as About, mirrored) */}
      <div className="pointer-events-none absolute bottom-0 right-0 -z-10 hidden -scale-x-100 opacity-30 dark:opacity-15 lg:block">
        <svg width="220" height="260" viewBox="0 0 200 240" fill="none" className="text-brand-500">
          <path d="M20 230 C 40 180, 60 120, 110 50" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M48 185 C 30 170, 25 155, 30 145 C 40 145, 52 165, 50 182" fill="currentColor" fillOpacity="0.5" />
          <path d="M68 145 C 85 135, 95 125, 95 115 C 85 115, 75 130, 70 143" fill="currentColor" fillOpacity="0.5" />
          <path d="M78 115 C 60 100, 55 85, 60 75 C 70 75, 82 95, 80 112" fill="currentColor" fillOpacity="0.5" />
          <path d="M98 75 C 115 65, 125 55, 125 45 C 115 45, 105 60, 100 73" fill="currentColor" fillOpacity="0.5" />
          <path d="M110 50 C 115 35, 125 25, 130 25 C 130 35, 120 45, 110 50" fill="currentColor" fillOpacity="0.6" />
        </svg>
      </div>

      <Reveal className="text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-100/90 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-900 shadow-2xs dark:border-brand-700/80 dark:bg-[#1f103a] dark:text-white">
          <Mail className="size-3.5 text-brand-600 dark:text-brand-400" />
          Get in Touch
        </span>
        <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[var(--text)] sm:text-4xl md:text-5xl">
          Let&apos;s Build <span className="gradient-text">Something Together</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
          Have a project, an internship opportunity, or a question? Send me a message and
          I&apos;ll get back to you as soon as possible.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 lg:grid-cols-5">
        {/* ---------- Info card ---------- */}
        <Reveal delay={0.05} className="lg:col-span-2">
          <div className={`flex h-full flex-col p-7 md:p-8 ${cardClass}`}>
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-200/90 bg-white px-3 py-1.5 text-xs font-bold text-brand-900 shadow-2xs dark:border-brand-700/80 dark:bg-[#1f103a] dark:text-white">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-green-500" />
              </span>
              Available for opportunities
            </span>

            <h3 className="mt-5 text-xl font-extrabold text-[var(--text)]">
              Contact Information
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
              Open to Front-End roles, freelance collaborations, and interesting ideas.
            </p>

            <div className="mt-6 space-y-1">
              {info.map(({ icon: Icon, label, value, href, action, ltr, box }) => {
                const Wrapper = href ? "a" : "div";
                return (
                  <div
                    key={label}
                    className="group flex items-center gap-2 rounded-2xl transition hover:bg-brand-50 dark:hover:bg-[#28144b]/60"
                  >
                    <Wrapper
                      {...(href ? { href } : {})}
                      className="flex min-w-0 flex-1 items-center gap-3 p-3"
                    >
                      <span
                        className={`flex size-11 shrink-0 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${box}`}
                      >
                        <Icon className="size-5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs font-medium text-[var(--text-muted)]">
                          {label}
                        </span>
                        <span
                          dir={ltr ? "ltr" : undefined}
                          className="block truncate text-sm font-bold text-[var(--text)]"
                        >
                          {value}
                        </span>
                      </span>
                    </Wrapper>
                    {action && <div className="pe-3">{action}</div>}
                  </div>
                );
              })}
            </div>

            <div className="mt-auto pt-8">
              <a
                href={`https://wa.me/${PHONE_LINK.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-brand-600 bg-white px-6 py-2.5 text-sm font-bold text-brand-700 shadow-2xs transition-all hover:bg-brand-600 hover:text-white dark:border-brand-400 dark:bg-[#1f103a] dark:text-white dark:hover:bg-[#2c1752]"
              >
                <FaWhatsapp className="size-5 text-[#25D366] transition-colors group-hover:text-white" />
                Chat on WhatsApp
              </a>

              <div className="mt-6 flex items-center gap-3 border-t border-brand-200/70 pt-6 dark:border-brand-700/40">
                <span className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">
                  Follow
                </span>
                <div className="flex gap-2">
                  {socials.map(({ icon: Icon, href, label, cls }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      whileHover={{ y: -4 }}
                      className={`flex size-10 items-center justify-center rounded-full border border-brand-200/90 bg-white shadow-2xs transition-colors dark:border-brand-700/80 dark:bg-[#1f103a] ${cls}`}
                    >
                      <Icon className="size-4" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ---------- Form card ---------- */}
        <Reveal delay={0.1} className="lg:col-span-3">
          <div className={`relative h-full overflow-hidden p-7 md:p-9 ${cardClass}`}>
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex h-full min-h-[26rem] flex-col items-center justify-center text-center"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -30 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 220, damping: 14, delay: 0.1 }}
                    className="flex size-20 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-500/15 dark:text-green-400"
                  >
                    <CheckCircle2 className="size-10" />
                  </motion.div>
                  <h3 className="mt-6 text-2xl font-extrabold text-[var(--text)]">
                    Message <span className="gradient-text">sent!</span>
                  </h3>
                  <p className="mt-2 max-w-xs text-sm text-[var(--text-muted)]">
                    Thank you for reaching out. I&apos;ll get back to you very soon.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-7 cursor-pointer rounded-full border-2 border-brand-600 bg-white px-6 py-2.5 text-sm font-bold text-brand-700 shadow-2xs transition-all hover:bg-brand-600 hover:text-white dark:border-brand-400 dark:bg-[#1f103a] dark:text-white dark:hover:bg-[#2c1752]"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-5"
                >
                  <div>
                    <h3 className="text-xl font-extrabold text-[var(--text)]">
                      Send me a message
                    </h3>
                    <p className="mt-1 text-sm text-[var(--text-muted)]">
                      Fill in the form and I&apos;ll receive it directly in my inbox.
                    </p>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      label="Your Name"
                      icon={User}
                      iconClass="text-violet-500"
                      name="name"
                      required
                      minLength={2}
                      maxLength={80}
                      placeholder="Jane Doe"
                      autoComplete="name"
                    />
                    <Field
                      label="Your Email"
                      icon={Mail}
                      iconClass="text-red-500"
                      name="email"
                      type="email"
                      required
                      placeholder="jane@example.com"
                      autoComplete="email"
                      dir="ltr"
                    />
                  </div>

                  <Field
                    label="Subject"
                    icon={FileText}
                    iconClass="text-amber-500"
                    name="subject"
                    maxLength={120}
                    placeholder="What is this about?"
                  />

                  <div>
                    <Field
                      label="Message"
                      icon={MessageSquare}
                      iconClass="text-cyan-500"
                      name="message"
                      textarea
                      required
                      minLength={10}
                      maxLength={2000}
                      rows={5}
                      placeholder="Tell me about your project or idea..."
                      onChange={(e) => setMsgLen(e.target.value.length)}
                    />
                    <p className="mt-1.5 text-end text-xs text-[var(--text-muted)]">
                      {msgLen} / 2000
                    </p>
                  </div>

                  {/* Honeypot */}
                  <input
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                    aria-hidden="true"
                  />

                  <motion.button
                    whileHover={{ scale: status === "sending" ? 1 : 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={status === "sending"}
                    className="group inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 font-bold text-white shadow-xl shadow-brand-600/30 transition-all hover:bg-brand-700 hover:shadow-brand-600/50 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 className="size-5 animate-spin" /> Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </>
                    )}
                  </motion.button>

                  {status === "error" && (
                    <motion.p
                      role="alert"
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="rounded-xl bg-red-50 px-4 py-3 text-sm font-bold text-red-600 dark:bg-red-500/10 dark:text-red-400"
                    >
                      Something went wrong. Please try again or email me directly.
                    </motion.p>
                  )}
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}