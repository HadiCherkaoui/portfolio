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
  description: "Platform Developer apprentice based in Switzerland, passionate about technology and open source. Specializing in Kubernetes, automation, and cloud-native technologies.",
  keywords: ["Hadi Cherkaoui", "Platform Developer", "Cloud Engineer", "Kubernetes", "Open Source", "Switzerland", "k0s"],
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
        className={`${inter.variable} ${newsreader.variable} ${spaceGrotesk.variable} antialiased bg-[var(--bg-primary)] text-[var(--text-primary)] selection:bg-[var(--accent-emerald-subtle)] selection:text-[var(--text-primary)]`}
      >
        {/* Background blobs */}
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
        
        {/* Subtle grid pattern */}
        <div className="fixed inset-0 z-[-1] bg-[var(--bg-primary)]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black,transparent)]" />
        </div>
        
        {children}
        <Footer />
      </body>
    </html>
  );
}
