import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingDown, TrendingUp } from "lucide-react";

export const ProblemSolution = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4">The Opportunity</Badge>
          <h2 className="text-4xl font-bold mb-4">Bridging the Expertise Gap</h2>
          <p className="text-lg text-muted-foreground">
            India has 120 million retired professionals with invaluable experience, while businesses struggle to find affordable expertise
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="border-destructive/20 bg-destructive/5">
            <CardContent className="pt-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                  <TrendingDown className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">The Challenge</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p className="flex items-start gap-2">
                      <span className="text-destructive font-bold mt-1">•</span>
                      <span>Skilled retirees struggle to find meaningful work despite decades of expertise</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-destructive font-bold mt-1">•</span>
                      <span>Businesses face high costs hiring full-time consultants for short-term needs</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-destructive font-bold mt-1">•</span>
                      <span>Vast experience and knowledge goes underutilized across industries</span>
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="pt-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Our Solution</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p className="flex items-start gap-2">
                      <span className="text-primary font-bold mt-1">✓</span>
                      <span>Verified platform connecting professionals with flexible opportunities</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-primary font-bold mt-1">✓</span>
                      <span>Affordable expertise on-demand with transparent pricing and ratings</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-primary font-bold mt-1">✓</span>
                      <span>AI-powered matching ensures the right expert for every business need</span>
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
