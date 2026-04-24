// DESIGN: Carbon Blueprint — Technical Dark Luxury
// Main landing page composing all sections
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ConfiguratorSection from "@/components/sections/ConfiguratorSection";
import WhyModularSection from "@/components/sections/WhyModularSection";
import BuildersSection from "@/components/sections/BuildersSection";
import EducationSection from "@/components/sections/EducationSection";
import GlobalSection from "@/components/sections/GlobalSection";
import AboutSection from "@/components/sections/AboutSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <ConfiguratorSection />
      <WhyModularSection />
      <BuildersSection />
      <EducationSection />
      <GlobalSection />
      <AboutSection />
      <Footer />
    </div>
  );
}
