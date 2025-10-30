import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, DollarSign } from "lucide-react";

export function EarningsSummaryCard() {
  return (
    <Card className="bg-gradient-to-r from-secondary to-accent border-none">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center">
              <DollarSign className="h-8 w-8 text-secondary-foreground" />
            </div>
            <div className="text-secondary-foreground">
              <p className="text-sm font-medium opacity-90">Total Earnings (Last 30 Days)</p>
              <p className="text-4xl font-bold mt-1">₹87,500</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-secondary-foreground">
            <TrendingUp className="h-5 w-5" />
            <div className="text-right">
              <p className="text-2xl font-semibold">+18%</p>
              <p className="text-sm opacity-80">vs last month</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
