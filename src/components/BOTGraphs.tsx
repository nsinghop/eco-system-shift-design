
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const BOTGraphs = () => {
  return (
    <section id="bot">
      <div className="section-container">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-gradient mb-4">Behavior Over Time Graphs (BoTs)</h2>
          <p>
            Behavior Over Time graphs illustrate how key variables in our system model change over time, showing
            the dynamic effects of interventions and feedback loops in the e-commerce abandonment system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-background/50 border border-white/10">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-4">Cart Abandonment Rate vs. Trust Building</h3>
              
              <div className="relative w-full aspect-video bg-secondary/30 rounded-md border border-white/5 flex items-center justify-center mb-4">
                <div className="text-muted-foreground text-sm">Graph Placeholder</div>
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-30"></div>
              </div>
              
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-accent">Key Insights:</h4>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Initial trust building measures produce non-linear improvements in abandonment rates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>After reaching critical trust threshold, abandonment decreases rapidly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Temporary regression occurs during adaptation phase before stabilizing at lower abandonment rate</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-background/50 border border-white/10">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-4">Recovery Tactics Effectiveness Over Time</h3>
              
              <div className="relative w-full aspect-video bg-secondary/30 rounded-md border border-white/5 flex items-center justify-center mb-4">
                <div className="text-muted-foreground text-sm">Graph Placeholder</div>
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-30"></div>
              </div>
              
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-accent">Key Insights:</h4>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Initial high effectiveness of recovery tactics declining over repeated exposure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Increasing discount offers temporarily boosting effectiveness before diminishing returns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Consumer behavior adaptation creating long-term negative trend regardless of tactical improvements</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-background/50 border border-white/10">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-4">Mobile vs. Desktop Conversion Gap</h3>
              
              <div className="relative w-full aspect-video bg-secondary/30 rounded-md border border-white/5 flex items-center justify-center mb-4">
                <div className="text-muted-foreground text-sm">Graph Placeholder</div>
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-30"></div>
              </div>
              
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-accent">Key Insights:</h4>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Widening gap between mobile and desktop conversion despite mobile traffic increases</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Incremental mobile optimizations producing limited improvements compared to friction budget approach</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Convergence of rates after implementation of mobile-first design principles with strict friction budgeting</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-background/50 border border-white/10">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-4">Lifetime Value Impact of Trust-Building</h3>
              
              <div className="relative w-full aspect-video bg-secondary/30 rounded-md border border-white/5 flex items-center justify-center mb-4">
                <div className="text-muted-foreground text-sm">Graph Placeholder</div>
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-30"></div>
              </div>
              
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-accent">Key Insights:</h4>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Short-term revenue dip during transition to trust-based model followed by sustainable growth</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Customer lifetime value diverges significantly between trust-based and discount-based approaches</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Compounding benefits of trust model appearing 6-12 months after implementation through repeat purchase behavior</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BOTGraphs;
