import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProblemSolution } from "@/components/ProblemSolution";
import { HowItWorks } from "@/components/HowItWorks";
import { FeaturedExperts } from "@/components/FeaturedExperts";
import { TrustBadges } from "@/components/TrustBadges";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <FeaturedExperts />
      <TrustBadges />
      <Footer />
    </div>
  );
};

export default Index;
