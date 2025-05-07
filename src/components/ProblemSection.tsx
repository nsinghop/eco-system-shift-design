
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ProblemSection = () => {
  return (
    <section id="problem" className="bg-secondary/30">
      <div className="section-container">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-gradient mb-4">Problem Framing & Research</h2>
          <p>
            Our project focuses on a significant e-commerce challenge that impacts both consumers and businesses. Through structured systems thinking, we've analyzed the deeper patterns and structures behind surface-level symptoms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-background/50 border border-white/10">
            <CardHeader>
              <CardTitle>The E-Commerce Challenge</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Cart abandonment represents a critical challenge in e-commerce, with an industry average of 70% abandonment rate. This phenomenon costs businesses billions in lost revenue annually while suggesting deeper systemic issues in the online shopping experience.
              </p>
              <p>
                While often attributed to price sensitivity, our research reveals a more complex system of interconnected variables including trust factors, checkout friction, transparency issues, and psychological barriers that create reinforcing feedback loops.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background/50 border border-white/10">
            <CardHeader>
              <CardTitle>Key Research Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>67% of abandonments occur during checkout due to unexpected costs or complex processes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>Trust signals significantly impact conversion with 92% of users hesitant to enter payment information on sites without security indicators</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>Mobile users have 85% higher abandonment rates than desktop users, highlighting device-specific experience issues</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>Businesses often implement quick fixes that create reinforcing problem loops instead of addressing structural issues</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
