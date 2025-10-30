import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Crown, ArrowUpCircle } from "lucide-react";

export function SubscriptionStatusCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base flex items-center gap-2">
          <Crown className="h-4 w-4" />
          Subscription Status
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Current Plan</p>
            <div className="flex items-center gap-2">
              <p className="text-xl font-bold text-foreground">Standard</p>
              <Badge variant="outline">Active</Badge>
            </div>
          </div>
        </div>

        <div className="space-y-2 text-sm">
          <div className="flex items-center justify-between py-2 border-b">
            <span className="text-muted-foreground">Project Visibility</span>
            <span className="font-medium">Good</span>
          </div>
          <div className="flex items-center justify-between py-2 border-b">
            <span className="text-muted-foreground">AI Match Priority</span>
            <span className="font-medium">Normal</span>
          </div>
          <div className="flex items-center justify-between py-2">
            <span className="text-muted-foreground">Support</span>
            <span className="font-medium">Email</span>
          </div>
        </div>

        <div className="bg-gradient-to-r from-secondary/20 to-accent/20 p-4 rounded-lg">
          <div className="flex items-start gap-2 mb-2">
            <ArrowUpCircle className="h-5 w-5 text-secondary mt-0.5" />
            <div>
              <p className="font-semibold text-sm mb-1">Upgrade to Premium</p>
              <p className="text-xs text-muted-foreground">
                Get 3x visibility, priority matching, and dedicated support
              </p>
            </div>
          </div>
        </div>

        <Button variant="secondary" className="w-full">
          Manage Subscription
        </Button>
      </CardContent>
    </Card>
  );
}
