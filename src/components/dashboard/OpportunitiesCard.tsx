import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, MapPin, Clock } from "lucide-react";

const opportunities = [
  {
    title: "Senior Financial Advisor Needed",
    company: "Tech Startups India",
    budget: "₹50,000-75,000",
    duration: "3 months",
    location: "Remote",
    matchScore: 95,
  },
  {
    title: "Business Strategy Consultant",
    company: "Retail Solutions Co",
    budget: "₹40,000-60,000",
    duration: "2 months",
    location: "Hybrid - Mumbai",
    matchScore: 88,
  },
  {
    title: "Tax Planning Expert",
    company: "Finance Group Ltd",
    budget: "₹30,000-45,000",
    duration: "1 month",
    location: "Remote",
    matchScore: 82,
  },
];

export function OpportunitiesCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-secondary" />
          New Opportunities - AI Matched
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {opportunities.map((opp, index) => (
          <div key={index} className="border rounded-lg p-4 space-y-3">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h4 className="font-semibold text-sm">{opp.title}</h4>
                <p className="text-xs text-muted-foreground">{opp.company}</p>
              </div>
              <Badge variant="secondary" className="text-xs">
                {opp.matchScore}% Match
              </Badge>
            </div>
            
            <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {opp.location}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {opp.duration}
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-secondary">{opp.budget}</p>
              <Button size="sm" variant="outline">View Details</Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
