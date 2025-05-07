
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  ResponsiveContainer,
  LineChart,
  Line
} from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

// Cart abandonment rate data over time with trust building interventions
const cartAbandonmentData = [
  { month: 'Jan', abandonmentRate: 76, trustScore: 25 },
  { month: 'Feb', abandonmentRate: 79, trustScore: 27 },
  { month: 'Mar', abandonmentRate: 82, trustScore: 24 },
  { month: 'Apr', abandonmentRate: 78, trustScore: 28 },
  { month: 'May', abandonmentRate: 74, trustScore: 32 },
  { month: 'Jun', abandonmentRate: 69, trustScore: 38 },
  { month: 'Jul', abandonmentRate: 63, trustScore: 45 },
  { month: 'Aug', abandonmentRate: 58, trustScore: 53 },
  { month: 'Sep', abandonmentRate: 61, trustScore: 49 },
  { month: 'Oct', abandonmentRate: 55, trustScore: 58 },
  { month: 'Nov', abandonmentRate: 49, trustScore: 65 },
  { month: 'Dec', abandonmentRate: 42, trustScore: 71 },
];

// Recovery tactics effectiveness data
const recoveryTacticsData = [
  { month: 'Jan', emailRecovery: 23, discountRecovery: 18, totalRecoveryRate: 41 },
  { month: 'Feb', emailRecovery: 26, discountRecovery: 19, totalRecoveryRate: 45 },
  { month: 'Mar', emailRecovery: 24, discountRecovery: 22, totalRecoveryRate: 46 },
  { month: 'Apr', emailRecovery: 22, discountRecovery: 25, totalRecoveryRate: 47 },
  { month: 'May', emailRecovery: 20, discountRecovery: 29, totalRecoveryRate: 49 },
  { month: 'Jun', emailRecovery: 19, discountRecovery: 32, totalRecoveryRate: 51 },
  { month: 'Jul', emailRecovery: 18, discountRecovery: 34, totalRecoveryRate: 52 },
  { month: 'Aug', emailRecovery: 16, discountRecovery: 36, totalRecoveryRate: 52 },
  { month: 'Sep', emailRecovery: 15, discountRecovery: 38, totalRecoveryRate: 53 },
  { month: 'Oct', emailRecovery: 14, discountRecovery: 39, totalRecoveryRate: 53 },
  { month: 'Nov', emailRecovery: 12, discountRecovery: 40, totalRecoveryRate: 52 },
  { month: 'Dec', emailRecovery: 10, discountRecovery: 41, totalRecoveryRate: 51 },
];

// Mobile vs desktop conversion gap data
const mobileDesktopData = [
  { month: 'Jan', mobileConversion: 1.8, desktopConversion: 3.9, mobileTraffic: 62 },
  { month: 'Feb', mobileConversion: 1.7, desktopConversion: 4.1, mobileTraffic: 65 },
  { month: 'Mar', mobileConversion: 1.9, desktopConversion: 4.2, mobileTraffic: 67 },
  { month: 'Apr', mobileConversion: 2.2, desktopConversion: 4.3, mobileTraffic: 69 },
  { month: 'May', mobileConversion: 2.1, desktopConversion: 4.2, mobileTraffic: 71 },
  { month: 'Jun', mobileConversion: 2.3, desktopConversion: 4.2, mobileTraffic: 73 },
  { month: 'Jul', mobileConversion: 2.5, desktopConversion: 4.3, mobileTraffic: 74 },
  { month: 'Aug', mobileConversion: 2.8, desktopConversion: 4.4, mobileTraffic: 76 },
  { month: 'Sep', mobileConversion: 3.1, desktopConversion: 4.3, mobileTraffic: 77 },
  { month: 'Oct', mobileConversion: 3.4, desktopConversion: 4.3, mobileTraffic: 79 },
  { month: 'Nov', mobileConversion: 3.6, desktopConversion: 4.4, mobileTraffic: 80 },
  { month: 'Dec', mobileConversion: 3.7, desktopConversion: 4.4, mobileTraffic: 82 },
];

// Customer lifetime value impact data
const lifetimeValueData = [
  { month: 'Jan', trustBasedApproach: 120, discountBasedApproach: 145 },
  { month: 'Feb', trustBasedApproach: 115, discountBasedApproach: 150 },
  { month: 'Mar', trustBasedApproach: 112, discountBasedApproach: 153 },
  { month: 'Apr', trustBasedApproach: 118, discountBasedApproach: 149 },
  { month: 'May', trustBasedApproach: 125, discountBasedApproach: 146 },
  { month: 'Jun', trustBasedApproach: 132, discountBasedApproach: 142 },
  { month: 'Jul', trustBasedApproach: 141, discountBasedApproach: 138 },
  { month: 'Aug', trustBasedApproach: 150, discountBasedApproach: 137 },
  { month: 'Sep', trustBasedApproach: 163, discountBasedApproach: 133 },
  { month: 'Oct', trustBasedApproach: 178, discountBasedApproach: 131 },
  { month: 'Nov', trustBasedApproach: 196, discountBasedApproach: 129 },
  { month: 'Dec', trustBasedApproach: 215, discountBasedApproach: 125 },
];

const BOTGraphs = () => {
  const chartConfig = {
    abandonmentRate: { 
      label: "Abandonment Rate", 
      color: "#ea384c" 
    },
    trustScore: { 
      label: "Trust Score", 
      color: "#33C3F0" 
    },
    emailRecovery: { 
      label: "Email Recovery", 
      color: "#9b87f5" 
    },
    discountRecovery: { 
      label: "Discount Recovery", 
      color: "#F97316" 
    },
    totalRecoveryRate: { 
      label: "Total Recovery", 
      color: "#8B5CF6" 
    },
    mobileConversion: { 
      label: "Mobile Conversion", 
      color: "#D946EF" 
    },
    desktopConversion: { 
      label: "Desktop Conversion", 
      color: "#0EA5E9" 
    },
    mobileTraffic: { 
      label: "Mobile Traffic %", 
      color: "#7E69AB" 
    },
    trustBasedApproach: { 
      label: "Trust-Based LTV", 
      color: "#33C3F0" 
    },
    discountBasedApproach: { 
      label: "Discount-Based LTV", 
      color: "#F97316" 
    }
  };

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
              
              <div className="h-64 w-full">
                <ChartContainer config={chartConfig} className="h-full">
                  <LineChart data={cartAbandonmentData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="month" stroke="#888" />
                    <YAxis stroke="#888" />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="abandonmentRate" 
                      stroke="#ea384c" 
                      strokeWidth={2} 
                      dot={{ r: 3 }} 
                      name="Abandonment Rate %"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="trustScore" 
                      stroke="#33C3F0" 
                      strokeWidth={2} 
                      dot={{ r: 3 }} 
                      name="Trust Score"
                    />
                  </LineChart>
                </ChartContainer>
              </div>
              
              <div className="space-y-3 mt-4">
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
              
              <div className="h-64 w-full">
                <ChartContainer config={chartConfig} className="h-full">
                  <AreaChart data={recoveryTacticsData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="month" stroke="#888" />
                    <YAxis stroke="#888" />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Area 
                      type="monotone" 
                      dataKey="emailRecovery" 
                      stackId="1"
                      stroke="#9b87f5" 
                      fill="#9b87f5" 
                      fillOpacity={0.5}
                      name="Email Recovery %"
                    />
                    <Area 
                      type="monotone" 
                      dataKey="discountRecovery" 
                      stackId="1"
                      stroke="#F97316" 
                      fill="#F97316" 
                      fillOpacity={0.5}
                      name="Discount Recovery %"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="totalRecoveryRate" 
                      stroke="#8B5CF6" 
                      strokeWidth={2} 
                      dot={{ r: 3 }}
                      name="Total Recovery %"  
                    />
                  </AreaChart>
                </ChartContainer>
              </div>
              
              <div className="space-y-3 mt-4">
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
              
              <div className="h-64 w-full">
                <ChartContainer config={chartConfig} className="h-full">
                  <LineChart data={mobileDesktopData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="month" stroke="#888" />
                    <YAxis yAxisId="left" stroke="#888" />
                    <YAxis yAxisId="right" orientation="right" stroke="#888" />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Line 
                      yAxisId="left"
                      type="monotone" 
                      dataKey="mobileConversion" 
                      stroke="#D946EF" 
                      strokeWidth={2} 
                      dot={{ r: 3 }} 
                      name="Mobile Conv. %"
                    />
                    <Line 
                      yAxisId="left"
                      type="monotone" 
                      dataKey="desktopConversion" 
                      stroke="#0EA5E9" 
                      strokeWidth={2} 
                      dot={{ r: 3 }} 
                      name="Desktop Conv. %"
                    />
                    <Line 
                      yAxisId="right"
                      type="monotone" 
                      dataKey="mobileTraffic" 
                      stroke="#7E69AB" 
                      strokeWidth={2} 
                      strokeDasharray="5 5"
                      dot={{ r: 3 }} 
                      name="Mobile Traffic %"
                    />
                  </LineChart>
                </ChartContainer>
              </div>
              
              <div className="space-y-3 mt-4">
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
              
              <div className="h-64 w-full">
                <ChartContainer config={chartConfig} className="h-full">
                  <LineChart data={lifetimeValueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="month" stroke="#888" />
                    <YAxis stroke="#888" />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="trustBasedApproach" 
                      stroke="#33C3F0" 
                      strokeWidth={2} 
                      dot={{ r: 3 }} 
                      name="Trust-Based LTV"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="discountBasedApproach" 
                      stroke="#F97316" 
                      strokeWidth={2} 
                      dot={{ r: 3 }} 
                      name="Discount-Based LTV"
                    />
                  </LineChart>
                </ChartContainer>
              </div>
              
              <div className="space-y-3 mt-4">
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
