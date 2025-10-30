import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wallet, Plus, FileText } from "lucide-react";

export function BillingWalletCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base flex items-center gap-2">
          <Wallet className="h-4 w-4" />
          Wallet & Billing
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="text-sm text-muted-foreground mb-1">Current Balance</p>
          <p className="text-3xl font-bold text-secondary">₹45,000</p>
        </div>

        <div className="flex gap-2">
          <Button variant="accent" size="sm" className="flex-1">
            <Plus className="h-4 w-4 mr-1" />
            Add Funds
          </Button>
          <Button variant="outline" size="sm" className="flex-1">
            <FileText className="h-4 w-4 mr-1" />
            Invoices
          </Button>
        </div>

        <div className="pt-2 border-t">
          <p className="text-xs text-muted-foreground">Last transaction: ₹8,500 on 15 Mar 2024</p>
        </div>
      </CardContent>
    </Card>
  );
}
