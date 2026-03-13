import HeroSection from "@/components/HeroSection";
import ScolxSection from "@/components/ScolxSection";
import LockboxSection from "@/components/LockboxSection";
import InfraSection from "@/components/InfraSection";
import ToolsSection from "@/components/ToolsSection";
import CompetitionSection from "@/components/CompetitionSection";
import OffenseSection from "@/components/OffenseSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ScolxSection />
      <LockboxSection />
      <InfraSection />
      <ToolsSection />
      <CompetitionSection />
      <OffenseSection />
      <ContactSection />
    </main>
  );
}
