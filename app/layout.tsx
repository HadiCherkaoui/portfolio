import type { Metadata } from "next";
import { Inter, Newsreader, Space_Grotesk } from "next/font/google";
import Footer from "../components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  style: ["normal", "italic"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Hadi Cherkaoui | Platform Developer",
  description:
    "Platform Developer apprentice based in Switzerland. Building in Rust and Go, running k0s on bare metal, and competing in ICT Championships Switzerland.",
  keywords: [
    "Hadi Cherkaoui",
    "Platform Developer",
    "Rust",
    "Go",
    "Kubernetes",
    "Open Source",
    "Switzerland",
    "k0s",
  ],
  authors: [{ name: "Hadi Cherkaoui" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${inter.variable} ${newsreader.variable} ${spaceGrotesk.variable} antialiased bg-(--bg-primary) text-(--text-primary) selection:bg-(--accent-amber-subtle) selection:text-(--text-primary)`}
      >
        {/* Aurora animated background */}
        <div className="aurora-bg">
          <div className="aurora-amber" />
          <div className="aurora-purple" />
        </div>

        {/* Subtle grid pattern — no background fill; body provides the dark bg, aurora shows through */}
        <div className="fixed inset-0 z-[-1]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black,transparent)]" />
        </div>

        {children}
        <Footer />
      </body>
    </html>
  );
}
