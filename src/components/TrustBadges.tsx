import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Users, Lock } from "lucide-react";

const badges = [
  {
    icon: Shield,
    title: "Verified Profiles",
    description: "Every expert undergoes thorough background and credential verification",
  },
  {
    icon: Award,
    title: "Quality Ratings",
    description: "Transparent reviews and ratings from verified clients",
  },
  {
    icon: Lock,
    title: "Secure Payments",
    description: "Protected transactions with escrow and payment guarantees",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "24/7 customer support for both experts and clients",
  },
];

export const TrustBadges = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <Card key={index} className="border-none bg-card text-center">
                <CardContent className="pt-8 pb-6">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">{badge.title}</h3>
                  <p className="text-sm text-muted-foreground">{badge.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
