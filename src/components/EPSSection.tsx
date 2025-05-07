
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EPSSection = () => {
  return (
    <section id="eps">
      <div className="section-container">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-gradient mb-4">System Analysis (EPS)</h2>
          <p>
            Using the Event-Pattern-Structure framework, we analyze cart abandonment at three levels of depth, 
            from visible symptoms to the underlying system structure creating those symptoms.
          </p>
        </div>

        <div className="space-y-16">
          {/* Event Level */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">E</div>
              <h3 className="text-2xl font-bold">Event: Surface Symptoms</h3>
            </div>
            
            <Card className="bg-background/50 border border-white/10">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-medium text-accent mb-3">Observable Symptoms</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>70% average cart abandonment rate</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Spike in exits during shipping cost display</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Form field errors causing frustration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Account creation requests leading to drop-offs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Mobile conversion rates 40% lower than desktop</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium text-accent mb-3">Event-Level Analysis</h4>
                    <p>
                      These events represent the visible symptoms of deeper system issues. Most e-commerce
                      businesses respond reactively at this level with tactical fixes like abandoned cart emails
                      or exit-intent popups that provide temporary relief but fail to address root causes.
                    </p>
                    <p className="mt-2">
                      Our data shows these tactical approaches typically yield 5-15% recovery rates while leaving
                      the underlying abandonment patterns intact.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Pattern Level */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">P</div>
              <h3 className="text-2xl font-bold">Pattern: Trends Over Time</h3>
            </div>
            
            <Card className="bg-background/50 border border-white/10">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-medium text-accent mb-3">Identified Patterns</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Increasing abandonment rates year-over-year despite UX improvements</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Cyclical patterns where tactical solutions show diminishing returns</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Growing gap between mobile and desktop conversion rates</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Decreasing effectiveness of recovery emails over multiple campaigns</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium text-accent mb-3">Pattern-Level Analysis</h4>
                    <p>
                      Looking at these trends over time reveals recurring patterns that suggest deeper structural issues. The temporary success
                      of tactical fixes followed by return to baseline abandonment rates indicates potential "Fixes that Fail" system archetype.
                    </p>
                    <p className="mt-2">
                      Our trend analysis shows rising customer expectations for checkout experiences are outpacing
                      the incremental improvements most businesses implement, creating a widening gap.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Structure Level */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">S</div>
              <h3 className="text-2xl font-bold">Structure: Root Causes</h3>
            </div>
            
            <Card className="bg-background/50 border border-white/10">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-medium text-accent mb-3">Structural Elements</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Incentive misalignment: Marketing KPIs vs. User Experience KPIs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Mental models: Business perception of checkout vs. user expectations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Technical debt: Legacy systems limiting checkout optimization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Decision processes: Short-term revenue focus vs. long-term customer value</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Information flows: Delayed feedback on abandonment root causes</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium text-accent mb-3">Structure-Level Analysis</h4>
                    <p>
                      At the structural level, we uncovered fundamental misalignments in how e-commerce
                      systems are designed, measured, and evolved. These structural elements create the
                      conditions that generate persistent abandonment patterns.
                    </p>
                    <p className="mt-2">
                      Businesses focused on structure-level changes have achieved 30-50% improvements
                      in conversion rates through comprehensive redesign of incentives, processes, and
                      mental models rather than surface-level symptom management.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EPSSection;
