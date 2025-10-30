import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MessageSquare } from "lucide-react";

export function RatingsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Ratings & Feedback</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center py-4">
          <div className="flex items-center justify-center gap-1 mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className="h-6 w-6 fill-secondary text-secondary"
              />
            ))}
          </div>
          <p className="text-3xl font-bold text-secondary">4.8</p>
          <p className="text-sm text-muted-foreground">Average Rating</p>
        </div>

        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Total Reviews Given</span>
            <span className="font-semibold">12</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Pending Reviews</span>
            <span className="font-semibold text-secondary">2</span>
          </div>
        </div>

        <Button variant="outline" className="w-full" size="sm">
          <MessageSquare className="h-4 w-4 mr-2" />
          Review Pending Projects
        </Button>
      </CardContent>
    </Card>
  );
}
