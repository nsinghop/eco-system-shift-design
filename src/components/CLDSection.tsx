
import React from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const CLDSection = () => {
  return (
    <section id="cld">
      <div className="section-container">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-gradient mb-4">Causal Loop Diagram (CLD)</h2>
          <p>
            Our causal loop diagram maps the complex system of variables affecting cart abandonment, demonstrating how each element reinforces or balances others to create the observed behavior patterns.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Card className="h-full overflow-hidden border border-white/10">
              <div className="bg-gradient-to-br from-background to-secondary/30 h-full flex items-center justify-center p-6">
                <div className="relative w-full aspect-[4/3] bg-secondary/30 rounded-md border border-white/5 flex items-center justify-center">
                  <div className="text-muted-foreground text-sm">CLD Diagram Placeholder</div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-50"></div>
                </div>
              </div>
            </Card>
          </div>

          <Card className="bg-background/50 border border-white/10">
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">Key Variables</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>User Trust</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>Checkout Friction</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>Price Transparency</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>Mobile Usability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>Recovery Tactics</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">Feedback Loops</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-accent">R1: Trust Erosion Loop</h4>
                      <p className="text-sm">Hidden costs → Decreased trust → Increased abandonment → Revenue pressure → More hidden costs</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-accent">B1: Recovery Tactics Loop</h4>
                      <p className="text-sm">Cart abandonment → Recovery emails → Temporary conversion boost → Decreased urgency → Return to abandonment</p>
                    </div>
                  </div>
                </div>

                <Button className="w-full gap-2">
                  <Download className="h-4 w-4" />
                  Download Vensim Model
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CLDSection;
