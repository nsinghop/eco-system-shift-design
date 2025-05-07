
import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import CLDSection from "@/components/CLDSection";
import SystemDynamicsSection from "@/components/SystemDynamicsSection";
import EPSSection from "@/components/EPSSection";
import InsightsSection from "@/components/InsightsSection";
import LeveragePoints from "@/components/LeveragePoints";
import SystemArchetypes from "@/components/SystemArchetypes";
import BOTGraphs from "@/components/BOTGraphs";
import SubmissionSection from "@/components/SubmissionSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <CLDSection />
        <SystemDynamicsSection />
        <EPSSection />
        <InsightsSection />
        <LeveragePoints />
        <SystemArchetypes />
        <BOTGraphs />
        <SubmissionSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
