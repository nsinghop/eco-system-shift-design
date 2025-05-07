
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Github, Linkedin, Mail } from "lucide-react";

const SubmissionSection = () => {
  return (
    <section id="submission" className="bg-secondary/30">
      <div className="section-container">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-gradient mb-4">Submission & Contact</h2>
          <p>
            Download our project files and get in touch with our team to learn more about our
            system thinking approach to solving e-commerce challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-background/50 border border-white/10">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-6">Download Project Files</h3>
              
              <div className="space-y-4">
                <Button variant="outline" className="w-full justify-start gap-3">
                  <Download className="h-4 w-4" />
                  <span>Project Report (PDF)</span>
                </Button>
                
                <Button variant="outline" className="w-full justify-start gap-3">
                  <Download className="h-4 w-4" />
                  <span>Causal Loop Diagram (Vensim)</span>
                </Button>
                
                <Button variant="outline" className="w-full justify-start gap-3">
                  <Download className="h-4 w-4" />
                  <span>Stock & Flow Model (Vensim)</span>
                </Button>
                
                <Button variant="outline" className="w-full justify-start gap-3">
                  <Download className="h-4 w-4" />
                  <span>Presentation Slides (PDF)</span>
                </Button>
                
                <Button className="w-full justify-start gap-3 bg-accent hover:bg-accent/90 text-white">
                  <Github className="h-4 w-4" />
                  <span>View Project on GitHub</span>
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-background/50 border border-white/10">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-6">Team Contact Information</h3>
              
              <div className="space-y-6">
                <div className="p-4 bg-secondary/30 rounded-lg">
                  <div className="flex gap-3">
                    <div className="h-12 w-12 rounded-full bg-background/50 flex items-center justify-center">
                      <span className="text-accent font-bold">AK</span>
                    </div>
                    <div>
                      <h4 className="font-bold">Alex Kim</h4>
                      <p className="text-sm text-muted-foreground mb-2">System Dynamics Lead</p>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Linkedin className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Github className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Mail className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-secondary/30 rounded-lg">
                  <div className="flex gap-3">
                    <div className="h-12 w-12 rounded-full bg-background/50 flex items-center justify-center">
                      <span className="text-accent font-bold">MJ</span>
                    </div>
                    <div>
                      <h4 className="font-bold">Maya Johnson</h4>
                      <p className="text-sm text-muted-foreground mb-2">E-Commerce Research Lead</p>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Linkedin className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Github className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Mail className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-secondary/30 rounded-lg">
                  <div className="flex gap-3">
                    <div className="h-12 w-12 rounded-full bg-background/50 flex items-center justify-center">
                      <span className="text-accent font-bold">JS</span>
                    </div>
                    <div>
                      <h4 className="font-bold">James Singh</h4>
                      <p className="text-sm text-muted-foreground mb-2">Data Analysis & Visualization</p>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Linkedin className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Github className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Mail className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SubmissionSection;
