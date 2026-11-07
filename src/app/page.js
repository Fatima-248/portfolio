import Background from "@/components/Background";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { siteUrl, siteName } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteName,
  jobTitle: "Front-End Developer",
  url: siteUrl,
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Al-Azhar University of Gaza",
  },
  knowsAbout: ["React", "Next.js", "JavaScript", "Tailwind CSS", "PHP", "MySQL"],
  sameAs: [
    "https://github.com/Fatima-248",
    "https://www.linkedin.com/in/fatima-abusheara/",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Accessibility: lets keyboard users skip the navbar */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand-600 focus:px-5 focus:py-2.5 focus:text-sm focus:font-bold focus:text-white"
      >
        Skip to content
      </a>

      <Background />
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}