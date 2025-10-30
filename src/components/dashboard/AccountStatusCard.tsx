import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Crown, ArrowUpRight } from "lucide-react";

export function AccountStatusCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Account Status</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Current Plan</span>
          <Badge variant="secondary" className="gap-1">
            <Crown className="h-3 w-3" />
            Premium
          </Badge>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Projects this month</span>
            <span className="font-semibold">3 / Unlimited</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">AI Matches</span>
            <span className="font-semibold">Priority</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Support</span>
            <span className="font-semibold">24/7</span>
          </div>
        </div>

        <Button variant="outline" className="w-full" size="sm">
          Manage Subscription
          <ArrowUpRight className="h-4 w-4 ml-1" />
        </Button>
      </CardContent>
    </Card>
  );
}
