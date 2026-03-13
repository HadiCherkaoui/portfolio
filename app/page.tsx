import HeroSection from "@/components/HeroSection";
import ScolxSection from "@/components/ScolxSection";
import InfraSection from "@/components/InfraSection";
import ToolsSection from "@/components/ToolsSection";
import CompetitionSection from "@/components/CompetitionSection";
import OffenseSection from "@/components/OffenseSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ScolxSection />
      <InfraSection />
      <ToolsSection />
      <CompetitionSection />
      <OffenseSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
