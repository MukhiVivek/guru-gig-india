import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Award } from "lucide-react";

export function PerformanceCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base flex items-center gap-2">
          <Award className="h-4 w-4" />
          Performance & Credibility
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center p-4 bg-secondary/10 rounded-lg">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Star className="h-6 w-6 fill-secondary text-secondary" />
            <p className="text-3xl font-bold text-secondary">4.8</p>
          </div>
          <p className="text-sm text-muted-foreground">Average Client Rating</p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="text-center p-3 border rounded-lg">
            <p className="text-2xl font-bold text-foreground">27</p>
            <p className="text-xs text-muted-foreground mt-1">Projects Completed</p>
          </div>
          <div className="text-center p-3 border rounded-lg">
            <p className="text-2xl font-bold text-foreground">98%</p>
            <p className="text-xs text-muted-foreground mt-1">Success Rate</p>
          </div>
        </div>

        <div className="text-center pt-2">
          <p className="text-xs text-muted-foreground">
            Member since March 2023
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
