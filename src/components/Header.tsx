
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 py-4 px-6 md:px-8",
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center">
          <span className="text-lg font-bold">SysThink</span>
          <span className="text-accent ml-1">E-Com</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <button onClick={() => scrollToSection("problem")} className="text-sm text-foreground/80 hover:text-foreground">Problem</button>
          <button onClick={() => scrollToSection("cld")} className="text-sm text-foreground/80 hover:text-foreground">CLD</button>
          <button onClick={() => scrollToSection("dynamics")} className="text-sm text-foreground/80 hover:text-foreground">Dynamics</button>
          <button onClick={() => scrollToSection("eps")} className="text-sm text-foreground/80 hover:text-foreground">EPS</button>
          <button onClick={() => scrollToSection("insights")} className="text-sm text-foreground/80 hover:text-foreground">Insights</button>
          <button onClick={() => scrollToSection("archetypes")} className="text-sm text-foreground/80 hover:text-foreground">Archetypes</button>
          <Button variant="outline" size="sm" onClick={() => scrollToSection("submission")}>
            Download Files
          </Button>
        </nav>
        
        <Button variant="outline" size="sm" className="md:hidden">
          Menu
        </Button>
      </div>
    </header>
  );
};

export default Header;
