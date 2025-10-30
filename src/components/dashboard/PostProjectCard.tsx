import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Search } from "lucide-react";

export function PostProjectCard() {
  return (
    <Card className="bg-gradient-to-r from-primary to-primary/80 border-none">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-primary-foreground">
            <h2 className="text-2xl font-bold mb-2">Ready to Hire India's Best Talent?</h2>
            <p className="text-primary-foreground/80">
              Post a project or browse verified experts from our Silver Workforce
            </p>
          </div>
          <div className="flex gap-3">
            <Button size="lg" variant="secondary" className="gap-2">
              <Plus className="h-5 w-5" />
              Post New Project
            </Button>
            <Button size="lg" variant="outline" className="gap-2 bg-white/10 border-white/20 text-primary-foreground hover:bg-white/20">
              <Search className="h-5 w-5" />
              Browse Experts
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
