
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SystemArchetypes = () => {
  return (
    <section id="archetypes" className="bg-secondary/30">
      <div className="section-container">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-gradient mb-4">System Archetypes</h2>
          <p>
            System archetypes are common patterns of behavior in systems. We've identified three key archetypes
            operating in the e-commerce cart abandonment system that help explain persistent challenges.
          </p>
        </div>

        <Tabs defaultValue="fixes" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="fixes">Fixes that Fail</TabsTrigger>
            <TabsTrigger value="burden">Shifting the Burden</TabsTrigger>
            <TabsTrigger value="erosion">Eroding Goals</TabsTrigger>
          </TabsList>
          
          <TabsContent value="fixes">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <Card className="bg-background/50 border border-white/10 h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Fixes that Fail</h3>
                    
                    <p className="text-sm mb-4">
                      This archetype describes situations where a problem symptom is addressed with a quick fix
                      that seems effective in the short term but actually worsens the underlying problem over time.
                    </p>
                    
                    <div className="p-4 bg-secondary/30 rounded-lg mb-4">
                      <h4 className="text-sm font-medium text-accent mb-2">Archetype Structure</h4>
                      <ul className="text-xs space-y-1.5">
                        <li>• Initial problem symptom triggers response</li>
                        <li>• Quick fix temporarily alleviates symptom</li>
                        <li>• Unintended consequence of fix worsens underlying problem</li>
                        <li>• Problem symptom returns stronger over time</li>
                      </ul>
                    </div>
                    
                    <div className="relative w-full aspect-square bg-secondary/30 rounded-md flex items-center justify-center mb-4">
                      <div className="text-xs text-muted-foreground">Archetype Diagram Placeholder</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="lg:col-span-2">
                <Card className="bg-background/50 border border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">In E-Commerce Cart Abandonment</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="text-lg font-medium text-accent mb-3">The Pattern</h4>
                        <p className="text-sm">
                          When faced with high cart abandonment rates, e-commerce businesses commonly implement quick fixes like
                          exit-intent popups offering discounts or abandoned cart emails with incentives. These temporarily boost
                          conversions but train customers to expect discounts when abandoning carts, ultimately increasing abandonment
                          rates and decreasing full-price purchases.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-medium text-accent mb-3">Data Evidence</h4>
                        <ul className="text-sm space-y-2">
                          <li className="flex items-start gap-2">
                            <span className="text-accent">•</span>
                            <span>Initial 10-15% recovery rates from abandoned cart emails</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-accent">•</span>
                            <span>Decline in effectiveness to 3-5% over time</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-accent">•</span>
                            <span>15% increase in initial cart abandonment rates after implementing recovery programs</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-accent">•</span>
                            <span>20% decrease in full-price purchases within 6 months</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-secondary/30 p-4 rounded-lg">
                      <h4 className="text-lg font-medium text-accent mb-3">Breaking the Archetype</h4>
                      <p className="text-sm">
                        To escape this archetype, businesses need to focus on fundamental checkout experience improvements rather than
                        symptom-treating discounts. Companies that have successfully broken this pattern typically:
                      </p>
                      <ul className="text-sm mt-2 space-y-1">
                        <li className="flex items-start gap-2">
                          <span className="text-accent">•</span>
                          <span>Temporarily suspend discount-based recovery while implementing structural improvements</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent">•</span>
                          <span>Focus on addressing core friction points in the checkout experience</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent">•</span>
                          <span>Reserve recovery incentives for genuinely inactive users rather than recent abandoners</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent">•</span>
                          <span>Implement value-added recovery options (like extended warranties) instead of price discounts</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="burden">
            <Card className="bg-background/50 border border-white/10">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">Shifting the Burden</h3>
                    <p className="text-sm">
                      This archetype occurs when a symptomatic solution is used to address a problem instead of a more fundamental solution,
                      reducing pressure to implement the fundamental solution while creating dependency on the symptomatic one.
                    </p>
                    
                    <div className="p-4 bg-secondary/30 rounded-lg">
                      <h4 className="text-sm font-medium text-accent mb-2">Archetype Structure</h4>
                      <ul className="text-xs space-y-1.5">
                        <li>• Problem symptom can be addressed two ways</li>
                        <li>• Symptomatic solution works quickly but temporarily</li>
                        <li>• Fundamental solution works slowly but permanently</li>
                        <li>• Reliance on symptomatic solution reduces capacity for fundamental solution</li>
                        <li>• Side effects of symptomatic solution create new problems</li>
                      </ul>
                    </div>
                    
                    <div className="relative w-full aspect-square bg-secondary/30 rounded-md flex items-center justify-center">
                      <div className="text-xs text-muted-foreground">Archetype Diagram Placeholder</div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h3 className="text-xl font-bold mb-4">In E-Commerce Cart Abandonment</h3>
                      <p className="text-sm">
                        Cart abandonment can be addressed either through systematic UX improvement (fundamental) or through marketing tactics
                        like retargeting ads and recovery emails (symptomatic). The immediate results from retargeting create reliance on these
                        methods while reducing organizational capacity to undertake the more complex work of checkout redesign.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 bg-secondary/30 rounded-lg">
                        <h4 className="text-sm font-medium text-accent mb-2">Symptomatic Solution</h4>
                        <ul className="text-xs space-y-1.5">
                          <li>• Retargeting ads to abandoned users</li>
                          <li>• Automated email recovery sequences</li>
                          <li>• Exit-intent popups with discounts</li>
                          <li>• Temporary results with diminishing returns</li>
                          <li>• Creates trained behavior to abandon for offers</li>
                        </ul>
                      </div>
                      
                      <div className="p-4 bg-secondary/30 rounded-lg">
                        <h4 className="text-sm font-medium text-accent mb-2">Fundamental Solution</h4>
                        <ul className="text-xs space-y-1.5">
                          <li>• Systematic user research and journey mapping</li>
                          <li>• Checkout flow redesign based on trust principles</li>
                          <li>• Mobile-first optimization of all touchpoints</li>
                          <li>• Slower implementation but sustainable results</li>
                          <li>• Addresses root causes of abandonment behavior</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-secondary/30 rounded-lg">
                      <h4 className="text-lg font-medium text-accent mb-3">Breaking the Archetype</h4>
                      <p className="text-sm">
                        Organizations can escape this archetype by:
                      </p>
                      <ul className="text-sm mt-2 space-y-1">
                        <li className="flex items-start gap-2">
                          <span className="text-accent">•</span>
                          <span>Allocating fixed percentage of resources to fundamental solutions regardless of symptomatic performance</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent">•</span>
                          <span>Establishing metrics that track progress on fundamental solutions separate from conversion KPIs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent">•</span>
                          <span>Setting explicit timelines for reducing reliance on symptomatic solutions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent">•</span>
                          <span>Using A/B tests to directly compare long-term effects of both approaches</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="erosion">
            <Card className="bg-background/50 border border-white/10">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">Eroding Goals</h3>
                    <p className="text-sm">
                      This archetype describes a situation where performance standards are lowered to justify
                      current poor performance, rather than improving processes to meet the original goals.
                    </p>
                    
                    <div className="p-4 bg-secondary/30 rounded-lg">
                      <h4 className="text-sm font-medium text-accent mb-2">Archetype Structure</h4>
                      <ul className="text-xs space-y-1.5">
                        <li>• Gap exists between goal and actual performance</li>
                        <li>• Actions taken to improve performance</li>
                        <li>• Parallel process to adjust goal downward</li>
                        <li>• Goal adjustment perceived as easier than improvement</li>
                        <li>• Standards gradually deteriorate over time</li>
                      </ul>
                    </div>
                    
                    <div className="relative w-full aspect-square bg-secondary/30 rounded-md flex items-center justify-center">
                      <div className="text-xs text-muted-foreground">Archetype Diagram Placeholder</div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h3 className="text-xl font-bold mb-4">In E-Commerce Cart Abandonment</h3>
                      <p className="text-sm">
                        Many e-commerce businesses have gradually normalized high abandonment rates by adjusting their expectations
                        rather than addressing fundamental experience issues. What was once considered problematic cart abandonment
                        (e.g., 50%) has become accepted as "industry standard" (70%+), shifting focus to managing rather than resolving the problem.
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="p-4 bg-secondary/30 rounded-lg">
                        <h4 className="text-sm font-medium text-accent mb-2">Evidence of Goal Erosion</h4>
                        <ul className="text-xs space-y-1.5">
                          <li>• Historical industry benchmarks show 40-50% abandonment rates in early e-commerce (2000-2010)</li>
                          <li>• Current "acceptable" benchmarks normalized to 65-75% abandonment (2020+)</li>
                          <li>• Shift in industry language from "reducing abandonment" to "recovering abandonment"</li>
                          <li>• Resource allocation favoring abandonment recovery over abandonment prevention</li>
                          <li>• Redefinition of success metrics toward partial recovery rather than full prevention</li>
                        </ul>
                      </div>
                      
                      <div className="p-4 bg-secondary/30 rounded-lg">
                        <h4 className="text-lg font-medium text-accent mb-3">Breaking the Archetype</h4>
                        <p className="text-sm">
                          Organizations can escape the eroding goals trap by:
                        </p>
                        <ul className="text-sm mt-2 space-y-1">
                          <li className="flex items-start gap-2">
                            <span className="text-accent">•</span>
                            <span>Establishing absolute performance standards rather than industry-relative benchmarks</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-accent">•</span>
                            <span>Implementing regular review of historical performance standards to prevent normalization</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-accent">•</span>
                            <span>Creating stretch goals based on theoretical optimums rather than incremental improvements</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-accent">•</span>
                            <span>Celebrating and studying examples of exceptional performance to maintain high standards</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default SystemArchetypes;
