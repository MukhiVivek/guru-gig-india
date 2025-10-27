import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MapPin, Star, Briefcase } from "lucide-react";

const experts = [
  {
    name: "Rajesh Kumar",
    initials: "RK",
    expertise: "Financial Consultant",
    experience: "35 years",
    location: "Mumbai",
    rating: 4.9,
    reviews: 127,
    rate: "₹2,500/hr",
    specialties: ["CFO Advisory", "Tax Planning", "Risk Management"],
  },
  {
    name: "Priya Sharma",
    initials: "PS",
    expertise: "HR Strategy Expert",
    experience: "28 years",
    location: "Delhi",
    rating: 5.0,
    reviews: 89,
    rate: "₹2,000/hr",
    specialties: ["Talent Development", "Change Management", "Culture Building"],
  },
  {
    name: "Venkatesh Iyer",
    initials: "VI",
    expertise: "Marketing Advisor",
    experience: "32 years",
    location: "Bangalore",
    rating: 4.8,
    reviews: 156,
    rate: "₹3,000/hr",
    specialties: ["Brand Strategy", "Digital Marketing", "Market Research"],
  },
];

export const FeaturedExperts = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4">Featured Experts</Badge>
          <h2 className="text-4xl font-bold mb-4">Meet Our Top-Rated Professionals</h2>
          <p className="text-lg text-muted-foreground">
            Verified experts ready to bring decades of experience to your projects
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {experts.map((expert, index) => (
            <Card key={index} className="border shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elevated)] transition-all hover:-translate-y-1">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-4">
                  <Avatar className="w-16 h-16 border-2 border-primary/10">
                    <AvatarFallback className="bg-primary/10 text-primary text-lg font-semibold">
                      {expert.initials}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">{expert.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{expert.expertise}</p>
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="w-4 h-4 fill-secondary text-secondary" />
                      <span className="font-semibold">{expert.rating}</span>
                      <span className="text-muted-foreground">({expert.reviews})</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Briefcase className="w-4 h-4" />
                    <span>{expert.experience} experience</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{expert.location}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {expert.specialties.map((specialty, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t">
                  <span className="text-lg font-bold text-primary">{expert.rate}</span>
                  <Button size="sm">View Profile</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button size="lg" variant="outline">
            Browse All Experts
          </Button>
        </div>
      </div>
    </section>
  );
};
