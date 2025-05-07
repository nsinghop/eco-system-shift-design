
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-background to-background/95">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="section-container text-center relative z-10 animate-fade-in">
        <div className="mb-4 inline-block">
          <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
            Hackathon Project
          </span>
        </div>
        
        <h1 className="text-gradient mb-4">
          Transforming E-Commerce<br />with System Thinking
        </h1>
        
        <p className="max-w-2xl mx-auto mb-8">
          A comprehensive analysis of e-commerce challenges using system modeling tools to identify leverage points and propose sustainable interventions.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            onClick={() => scrollToSection("problem")} 
            className="bg-accent hover:bg-accent/90 text-white"
          >
            Explore the System
          </Button>
          
          <Button 
            variant="outline" 
            onClick={() => scrollToSection("submission")}
          >
            Download Resources
          </Button>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => scrollToSection("problem")}
          >
            <ArrowDown className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
