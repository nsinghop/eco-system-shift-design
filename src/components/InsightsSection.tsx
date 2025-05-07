
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const InsightsSection = () => {
  return (
    <section id="insights" className="bg-secondary/30">
      <div className="section-container">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-gradient mb-4">Insights & Interventions</h2>
          <p>
            Our system analysis reveals strategic interventions that address structural causes rather than symptoms,
            creating sustainable improvements in cart completion rates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="bg-background/50 border border-white/10 lg:col-span-1">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Key System Insights</h3>
              
              <div className="space-y-6">
                <div className="p-4 bg-secondary/30 rounded-lg">
                  <h4 className="font-medium text-accent">Trust Threshold Effect</h4>
                  <p className="text-sm mt-1">
                    User trust operates on a threshold model where multiple small erosions accumulate until a breaking point,
                    explaining why seemingly minor issues can trigger abandonment.
                  </p>
                </div>
                
                <div className="p-4 bg-secondary/30 rounded-lg">
                  <h4 className="font-medium text-accent">Misaligned Optimization</h4>
                  <p className="text-sm mt-1">
                    Teams optimizing for different KPIs (marketing for clicks, product for conversions, finance for margins)
                    create an unintentionally disjointed user experience.
                  </p>
                </div>
                
                <div className="p-4 bg-secondary/30 rounded-lg">
                  <h4 className="font-medium text-accent">Self-Reinforcing Friction</h4>
                  <p className="text-sm mt-1">
                    Revenue pressures from high abandonment rates often lead to tactics that increase short-term conversion
                    but further erode trust, creating a reinforcing negative cycle.
                  </p>
                </div>
                
                <div className="p-4 bg-secondary/30 rounded-lg">
                  <h4 className="font-medium text-accent">Delayed Experience Feedback</h4>
                  <p className="text-sm mt-1">
                    Time delays between UX decisions and clear metric impacts make it difficult to correctly attribute cause
                    and effect in abandonment behavior.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-background/50 border border-white/10 lg:col-span-2">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Proposed Interventions</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="h-1.5 w-16 bg-accent/70 rounded-full mb-3"></div>
                  <h4 className="text-lg font-medium">Trust-First Checkout Architecture</h4>
                  <p className="text-sm text-muted-foreground">
                    Restructure the checkout flow based on progressive trust building rather than data collection efficiency.
                    Show value before requesting information and maintain total cost transparency from the first interaction.
                  </p>
                  <div className="pt-2">
                    <span className="text-xs bg-accent/10 text-accent rounded-full px-2 py-1">
                      Structure-Level Intervention
                    </span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="h-1.5 w-16 bg-accent/70 rounded-full mb-3"></div>
                  <h4 className="text-lg font-medium">Cross-Functional Metrics Alignment</h4>
                  <p className="text-sm text-muted-foreground">
                    Develop shared KPIs across marketing, product, and finance teams that optimize for lifetime customer value
                    rather than short-term conversion or per-transaction revenue maximization.
                  </p>
                  <div className="pt-2">
                    <span className="text-xs bg-accent/10 text-accent rounded-full px-2 py-1">
                      Structure-Level Intervention
                    </span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="h-1.5 w-16 bg-accent/70 rounded-full mb-3"></div>
                  <h4 className="text-lg font-medium">Friction-Conscious Design System</h4>
                  <p className="text-sm text-muted-foreground">
                    Implement a design system with built-in "friction budgets" that quantify and limit the cumulative
                    cognitive load placed on users during the checkout process, especially on mobile devices.
                  </p>
                  <div className="pt-2">
                    <span className="text-xs bg-accent/10 text-accent rounded-full px-2 py-1">
                      Pattern-Level Intervention
                    </span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="h-1.5 w-16 bg-accent/70 rounded-full mb-3"></div>
                  <h4 className="text-lg font-medium">Continuous Trust Monitoring</h4>
                  <p className="text-sm text-muted-foreground">
                    Develop real-time measurement of user trust signals beyond conversion metrics, including
                    hesitation patterns, field correction rates, and progress/abandonment ratios at each step.
                  </p>
                  <div className="pt-2">
                    <span className="text-xs bg-accent/10 text-accent rounded-full px-2 py-1">
                      Pattern-Level Intervention
                    </span>
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

export default InsightsSection;
