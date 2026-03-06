import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblematiquesSection from "@/components/ProblematiquesSection";
import ExpertisesSection from "@/components/ExpertisesSection";
import ProjetsSection from "@/components/ProjetsSection";
import MethodeSection from "@/components/MethodeSection";
import ImpactSection from "@/components/ImpactSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <HeroSection />
        <ProblematiquesSection />
        <ExpertisesSection />
        <ProjetsSection />
        <MethodeSection />
        <ImpactSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
