
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const LeveragePoints = () => {
  return (
    <section id="leverage">
      <div className="section-container">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-gradient mb-4">Leverage Points</h2>
          <p>
            In systems thinking, leverage points are places where a small change can produce large shifts
            in system behavior. We've identified the highest-impact intervention points in the e-commerce
            abandonment system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-background/50 border border-white/10">
            <CardContent className="p-6">
              <div className="mb-4 flex justify-between items-center">
                <span className="text-xs uppercase tracking-wider text-muted-foreground">Structure Level</span>
                <span className="text-xs bg-accent/20 text-accent rounded-full px-2 py-0.5">Highest Leverage</span>
              </div>
              
              <h3 className="text-xl font-bold mb-3">Paradigm Shift:</h3>
              <h4 className="text-lg font-medium text-accent mb-3">From Transaction to Relationship Model</h4>
              
              <p className="text-sm mb-4">
                The highest leverage point involves shifting from a transaction-focused optimization model to a
                relationship-building approach that values long-term customer relationships over short-term conversions.
              </p>
              
              <div className="bg-secondary/30 p-3 rounded-lg">
                <h5 className="text-sm font-medium mb-1">Impact Assessment</h5>
                <p className="text-xs">
                  Companies implementing this paradigm shift have seen 40-60% improvements in repeat purchase rates
                  and 25-35% reductions in acquisition costs, fundamentally transforming their economics.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-background/50 border border-white/10">
            <CardContent className="p-6">
              <div className="mb-4 flex justify-between items-center">
                <span className="text-xs uppercase tracking-wider text-muted-foreground">Structure Level</span>
                <span className="text-xs bg-accent/20 text-accent rounded-full px-2 py-0.5">High Leverage</span>
              </div>
              
              <h3 className="text-xl font-bold mb-3">Rules Restructuring:</h3>
              <h4 className="text-lg font-medium text-accent mb-3">Aligned Incentives System</h4>
              
              <p className="text-sm mb-4">
                Redesigning incentive structures across departments to optimize for customer lifetime value rather
                than departmental KPIs eliminates conflicting goals that create friction points for users.
              </p>
              
              <div className="bg-secondary/30 p-3 rounded-lg">
                <h5 className="text-sm font-medium mb-1">Impact Assessment</h5>
                <p className="text-xs">
                  Organizations implementing cross-functional incentive alignment report 15-25% improvements
                  in conversion rates and 20-30% increases in customer retention within 6-12 months.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-background/50 border border-white/10">
            <CardContent className="p-6">
              <div className="mb-4 flex justify-between items-center">
                <span className="text-xs uppercase tracking-wider text-muted-foreground">Pattern Level</span>
                <span className="text-xs bg-accent/20 text-accent rounded-full px-2 py-0.5">Medium Leverage</span>
              </div>
              
              <h3 className="text-xl font-bold mb-3">Information Flows:</h3>
              <h4 className="text-lg font-medium text-accent mb-3">Trust Signal Framework</h4>
              
              <p className="text-sm mb-4">
                Developing comprehensive real-time metrics for user trust throughout the journey provides
                earlier feedback on potential abandonment causes before they manifest in lost sales.
              </p>
              
              <div className="bg-secondary/30 p-3 rounded-lg">
                <h5 className="text-sm font-medium mb-1">Impact Assessment</h5>
                <p className="text-xs">
                  Companies implementing advanced trust metrics report the ability to detect potential
                  abandonment patterns 2-3x earlier than traditional funnel analytics, enabling proactive intervention.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-background/50 border border-white/10">
            <CardContent className="p-6">
              <div className="mb-4 flex justify-between items-center">
                <span className="text-xs uppercase tracking-wider text-muted-foreground">Pattern Level</span>
                <span className="text-xs bg-accent/20 text-accent rounded-full px-2 py-0.5">Medium Leverage</span>
              </div>
              
              <h3 className="text-xl font-bold mb-3">Feedback Loops:</h3>
              <h4 className="text-lg font-medium text-accent mb-3">Progressive Trust Building</h4>
              
              <p className="text-sm mb-4">
                Restructuring the checkout flow as a series of trust-building interactions rather than
                data collection steps creates positive reinforcing feedback that increases completion probability.
              </p>
              
              <div className="bg-secondary/30 p-3 rounded-lg">
                <h5 className="text-sm font-medium mb-1">Impact Assessment</h5>
                <p className="text-xs">
                  A/B tests of trust-first checkout architectures show 15-20% improvements in completion rates
                  with particularly strong results (25%+) among first-time customers.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-background/50 border border-white/10">
            <CardContent className="p-6">
              <div className="mb-4 flex justify-between items-center">
                <span className="text-xs uppercase tracking-wider text-muted-foreground">Event Level</span>
                <span className="text-xs bg-accent/20 text-accent rounded-full px-2 py-0.5">Lower Leverage</span>
              </div>
              
              <h3 className="text-xl font-bold mb-3">Constants & Parameters:</h3>
              <h4 className="text-lg font-medium text-accent mb-3">Mobile-First Friction Budget</h4>
              
              <p className="text-sm mb-4">
                Establishing strict limitations on interaction complexity, particularly for mobile users,
                by quantifying and optimizing the cognitive load required at each checkout stage.
              </p>
              
              <div className="bg-secondary/30 p-3 rounded-lg">
                <h5 className="text-sm font-medium mb-1">Impact Assessment</h5>
                <p className="text-xs">
                  Mobile conversion improvements of 10-15% are typical when implementing strict friction budgets,
                  though results are more modest without addressing higher-level structural issues.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-background/50 border border-white/10">
            <CardContent className="p-6">
              <div className="mb-4 flex justify-between items-center">
                <span className="text-xs uppercase tracking-wider text-muted-foreground">Event Level</span>
                <span className="text-xs bg-accent/20 text-accent rounded-full px-2 py-0.5">Lower Leverage</span>
              </div>
              
              <h3 className="text-xl font-bold mb-3">Buffers:</h3>
              <h4 className="text-lg font-medium text-accent mb-3">Persistent Cart Recovery</h4>
              
              <p className="text-sm mb-4">
                Implementing sophisticated cart persistence and recovery mechanisms that maintain the
                user's progress across devices and sessions to buffer against temporary abandonment.
              </p>
              
              <div className="bg-secondary/30 p-3 rounded-lg">
                <h5 className="text-sm font-medium mb-1">Impact Assessment</h5>
                <p className="text-xs">
                  Cross-device cart persistence typically recovers 5-10% of otherwise lost sales but functions
                  best when combined with higher-leverage structural interventions.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LeveragePoints;
