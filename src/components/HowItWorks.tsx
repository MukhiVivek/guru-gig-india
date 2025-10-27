import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UserCheck, Search, CreditCard, Award, FileCheck, Handshake } from "lucide-react";

const steps = {
  professionals: [
    {
      icon: UserCheck,
      title: "Register & Verify",
      description: "Create your profile and complete our verification process to showcase your decades of experience",
    },
    {
      icon: Award,
      title: "Set Your Rates",
      description: "Choose competitive hourly or project rates that reflect your expertise and availability",
    },
    {
      icon: Handshake,
      title: "Connect & Earn",
      description: "Get matched with clients and start meaningful work on your own schedule",
    },
  ],
  clients: [
    {
      icon: Search,
      title: "Browse or Match",
      description: "Search our database or let our AI match you with the perfect expert for your needs",
    },
    {
      icon: FileCheck,
      title: "Review Profiles",
      description: "Examine verified credentials, expertise, ratings, and reviews from previous clients",
    },
    {
      icon: CreditCard,
      title: "Book & Pay",
      description: "Secure booking through our platform with transparent pricing and payment protection",
    },
  ],
};

export const HowItWorks = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4">How It Works</Badge>
          <h2 className="text-4xl font-bold mb-4">Simple Process, Powerful Results</h2>
          <p className="text-lg text-muted-foreground">
            Whether you're an experienced professional or seeking expertise, getting started is easy
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* For Professionals */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold">1</span>
              For Professionals
            </h3>
            
            <div className="space-y-6">
              {steps.professionals.map((step, index) => {
                const Icon = step.icon;
                return (
                  <Card key={index} className="border shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elevated)] transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg mb-2">{step.title}</h4>
                          <p className="text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
          
          {/* For Clients */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-lg font-bold">2</span>
              For Clients
            </h3>
            
            <div className="space-y-6">
              {steps.clients.map((step, index) => {
                const Icon = step.icon;
                return (
                  <Card key={index} className="border shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elevated)] transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                            <Icon className="w-6 h-6 text-secondary" />
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg mb-2">{step.title}</h4>
                          <p className="text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
