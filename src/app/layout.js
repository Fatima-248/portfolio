import { Inter, Caveat } from "next/font/google";
import "./globals.css";
import { siteUrl, siteName } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

const title = `${siteName} | Front-End Developer | React & Next.js`;
const description =
  "Portfolio of Fatima Abu Shaeera, a Front-End Developer and Computer Systems Engineering student at Al-Azhar University of Gaza, specializing in React, Next.js, and modern UI development.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: `%s | ${siteName}` },
  description,
  keywords: [
    "Front-End Developer",
    "React",
    "Next.js",
    "JavaScript",
    "Tailwind CSS",
    "Portfolio",
    "Gaza",
  ],
  authors: [{ name: siteName }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName,
    title,
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf7fe" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0618" },
  ],
};

// Runs before first paint, so there is no light-theme flash in dark mode
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.classList.add("dark")}catch(e){}`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${caveat.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}