import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Mail, Heart } from "lucide-react";

const socials = [
  { icon: FaGithub, href: "https://github.com/Fatima-248", label: "GitHub" },
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/fatima-abusheara/", label: "LinkedIn" },
  { icon: Mail, href: "https://mail.google.com/mail/u/0/?to=f2482005@gmail.com&fs=1&tf=cm", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)] backdrop-blur py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
          <span className="font-bold text-brand-600 dark:text-brand-400">{"</>"}</span>
          <span>
            © {new Date().getFullYear()} Fatima Abu Shaera. All rights reserved.
          </span>
        </div>

        <ul className="flex items-center gap-3">
          {socials.map(({ icon: Icon, href, label }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex size-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-hover)] text-[var(--text-muted)] transition-all duration-200 hover:bg-brand-600 hover:text-white hover:border-brand-600"
              >
                <Icon className="size-3.5" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
