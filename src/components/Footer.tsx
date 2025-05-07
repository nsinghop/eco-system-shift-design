
import React from "react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-white/10 bg-background py-12 px-6 md:px-8">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold">SysThink</span>
              <span className="text-accent text-2xl ml-1">E-Com</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              A System Thinking approach to understanding and solving E-Commerce challenges through
              causal loop diagrams, system archetypes, and structured interventions.
            </p>
            <p className="text-xs text-muted-foreground">
              © 2025 Hackathon Project Submission
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider">Explore</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection("problem")} className="text-sm text-muted-foreground hover:text-foreground">Problem Framing</button>
              </li>
              <li>
                <button onClick={() => scrollToSection("cld")} className="text-sm text-muted-foreground hover:text-foreground">Causal Loop Diagram</button>
              </li>
              <li>
                <button onClick={() => scrollToSection("dynamics")} className="text-sm text-muted-foreground hover:text-foreground">System Dynamics</button>
              </li>
              <li>
                <button onClick={() => scrollToSection("eps")} className="text-sm text-muted-foreground hover:text-foreground">EPS Analysis</button>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider">Resources</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection("insights")} className="text-sm text-muted-foreground hover:text-foreground">Insights & Interventions</button>
              </li>
              <li>
                <button onClick={() => scrollToSection("leverage")} className="text-sm text-muted-foreground hover:text-foreground">Leverage Points</button>
              </li>
              <li>
                <button onClick={() => scrollToSection("archetypes")} className="text-sm text-muted-foreground hover:text-foreground">System Archetypes</button>
              </li>
              <li>
                <button onClick={() => scrollToSection("submission")} className="text-sm text-muted-foreground hover:text-foreground">Download Files</button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground mb-4 md:mb-0">
            Built with System Thinking methodology for the E-Commerce Hackathon 2025
          </p>
          
          <Button variant="outline" size="sm" onClick={() => scrollToSection("hero")}>
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
