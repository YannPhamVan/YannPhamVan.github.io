import React, { lazy } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
const ProblematiquesSection = lazy(() => import("@/components/ProblematiquesSection"));
const ExpertisesSection = lazy(() => import("@/components/ExpertisesSection"));
const CasUsageSection = lazy(() => import("@/components/CasUsageSection"));
const ProjetsSection = lazy(() => import("@/components/ProjetsSection"));
import CredibiliteSection from "@/components/CredibiliteSection";
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
        <CasUsageSection />
        <ProjetsSection />
        <CredibiliteSection />
        <MethodeSection />
        <ImpactSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
