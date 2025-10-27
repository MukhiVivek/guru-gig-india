import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, Users } from "lucide-react";
import heroImage from "@/assets/hero-professional.jpg";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90  pb-28">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]" />
      
      <div className="container relative mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm font-medium">
              <Users className="w-4 h-4" />
              <span>Connecting 120M+ Experienced Professionals</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Unlock Decades of <span className="text-secondary">Expertise</span>
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed max-w-xl">
              India's premier marketplace connecting retired professionals with businesses seeking affordable, high-quality consultants and mentors.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                variant="hero" 
                size="xl"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 group"
              >
                Hire an Expert
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="hero" 
                size="xl"
                className="bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20"
              >
                <Briefcase className="w-5 h-5" />
                Join as Expert
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-6 text-white/80">
              <div>
                <div className="text-3xl font-bold text-white">15K+</div>
                <div className="text-sm">Verified Experts</div>
              </div>
              <div className="h-12 w-px bg-white/20" />
              <div>
                <div className="text-3xl font-bold text-white">5K+</div>
                <div className="text-sm">Projects Completed</div>
              </div>
              <div className="h-12 w-px bg-white/20" />
              <div>
                <div className="text-3xl font-bold text-white">98%</div>
                <div className="text-sm">Client Satisfaction</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-transparent rounded-3xl blur-3xl" />
            <img 
              src={heroImage} 
              alt="Experienced professional working confidently"
              className="relative rounded-2xl shadow-[var(--shadow-elevated)] w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
