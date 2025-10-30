import { ProfessionalDashboardLayout } from "@/components/dashboard/ProfessionalDashboardLayout";
import { EarningsSummaryCard } from "@/components/dashboard/EarningsSummaryCard";
import { CurrentProjectsCard } from "@/components/dashboard/CurrentProjectsCard";
import { ProfileCompletionCard } from "@/components/dashboard/ProfileCompletionCard";
import { OpportunitiesCard } from "@/components/dashboard/OpportunitiesCard";
import { PerformanceCard } from "@/components/dashboard/PerformanceCard";
import { GrowthUpskillCard } from "@/components/dashboard/GrowthUpskillCard";
import { SubscriptionStatusCard } from "@/components/dashboard/SubscriptionStatusCard";

const ProfessionalDashboard = () => {
  return (
    <ProfessionalDashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Professional Dashboard</h1>
          <p className="text-muted-foreground mt-2">Manage your projects, earnings, and professional growth</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="md:col-span-2 lg:col-span-3">
            <EarningsSummaryCard />
          </div>

          <div className="md:col-span-2 lg:col-span-2">
            <CurrentProjectsCard />
          </div>

          <div className="md:col-span-2 lg:col-span-1">
            <ProfileCompletionCard />
          </div>

          <div className="md:col-span-2 lg:col-span-2">
            <OpportunitiesCard />
          </div>

          <div className="md:col-span-1">
            <PerformanceCard />
          </div>

          <div className="md:col-span-1">
            <GrowthUpskillCard />
          </div>

          <div className="md:col-span-2 lg:col-span-1">
            <SubscriptionStatusCard />
          </div>
        </div>
      </div>
    </ProfessionalDashboardLayout>
  );
};

export default ProfessionalDashboard;
