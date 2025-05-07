
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SystemDynamicsSection = () => {
  return (
    <section id="dynamics" className="bg-secondary/30">
      <div className="section-container">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-gradient mb-4">System Dynamics Explanation</h2>
          <p>
            System dynamics explores how the structure of the e-commerce abandonment system
            produces the patterns of behavior observed over time, revealing deeper insights
            than simple cause-and-effect analysis.
          </p>
        </div>

        <Tabs defaultValue="dynamics" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="dynamics">System Dynamics</TabsTrigger>
            <TabsTrigger value="sfd">Stock & Flow Diagram</TabsTrigger>
          </TabsList>
          
          <TabsContent value="dynamics">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-background/50 border border-white/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Temporal Dimension</h3>
                  <p>
                    Our analysis reveals that cart abandonment isn't a static issue but evolves dynamically
                    over time through several distinct phases:
                  </p>
                  
                  <div className="mt-4 space-y-4">
                    <div className="p-3 bg-secondary/30 rounded-lg">
                      <h4 className="font-medium text-accent">Initial Engagement</h4>
                      <p className="text-sm mt-1">
                        Users enter with positive shopping intent but accumulate friction points throughout their journey.
                      </p>
                    </div>
                    
                    <div className="p-3 bg-secondary/30 rounded-lg">
                      <h4 className="font-medium text-accent">Trust Assessment</h4>
                      <p className="text-sm mt-1">
                        Trust deteriorates when unexpected elements appear, creating a threshold effect where abandonment probability increases exponentially.
                      </p>
                    </div>
                    
                    <div className="p-3 bg-secondary/30 rounded-lg">
                      <h4 className="font-medium text-accent">Threshold Crossing</h4>
                      <p className="text-sm mt-1">
                        Once the combined friction exceeds the user's patience threshold, abandonment occurs. This threshold varies by user segment and device.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-background/50 border border-white/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Dynamic Interactions</h3>
                  <p>
                    Our system thinking approach identified several key dynamic interactions that traditional analytics often miss:
                  </p>
                  
                  <ul className="mt-4 space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>Time delays between implementation of solutions and observable effects create misleading evaluation metrics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>Adaptive expectations where users' tolerance for friction decreases over time as competitive experiences improve</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>Non-linear responses where small improvements in key areas like trust signals can produce disproportionate conversion improvements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>Path dependency where users who have previously abandoned are significantly more likely to abandon again in future sessions</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="sfd">
            <Card className="border border-white/10">
              <div className="bg-gradient-to-br from-background to-secondary/30 flex items-center justify-center p-8">
                <div className="relative w-full max-w-3xl aspect-[16/9] bg-secondary/30 rounded-md border border-white/5 flex items-center justify-center">
                  <div className="text-muted-foreground">Stock & Flow Diagram Placeholder</div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-50"></div>
                </div>
              </div>
            </Card>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                The stock and flow diagram illustrates how the accumulation of friction points and trust degradation 
                contribute to cart abandonment rates over time, with intervention points marked at key process stages.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default SystemDynamicsSection;
