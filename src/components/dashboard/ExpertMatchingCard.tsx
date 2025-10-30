import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles } from "lucide-react";
import { useState } from "react";

export function ExpertMatchingCard() {
  const [requirements, setRequirements] = useState("");

  return (
    <Card className="border-secondary/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-secondary" />
          AI Expert Matching
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Textarea
          placeholder="Describe your project requirements... (e.g., Need a CA for tax planning, Looking for marketing consultant...)"
          value={requirements}
          onChange={(e) => setRequirements(e.target.value)}
          className="min-h-[100px]"
        />
        <Button className="w-full" variant="accent">
          <Sparkles className="h-4 w-4 mr-2" />
          Find Me the Right Guru Now
        </Button>
        <p className="text-xs text-muted-foreground text-center">
          Our AI will match you with the top 3 experts based on your needs
        </p>
      </CardContent>
    </Card>
  );
}
