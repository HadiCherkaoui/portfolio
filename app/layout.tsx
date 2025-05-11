import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "../components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hadi Cherkaoui | Platform Developer",
  description: "Platform Developer apprentice based in Switzerland, passionate about technology and open source. Specializing in Kubernetes, automation, and cloud-native technologies.",
  keywords: ["Hadi Cherkaoui", "Platform Developer", "Cloud Engineer", "Kubernetes", "Open Source", "Switzerland"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--primary-color)] selection:text-white`}
      >
        <div className="fixed inset-0 z-[-1] bg-[var(--darker-bg)]">
          <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:radial-gradient(white,transparent_85%)]"></div>
          <div className="absolute h-full w-full bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(37,99,235,0.15),rgba(0,0,0,0))]"></div>
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
