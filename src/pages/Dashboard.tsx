import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { PostProjectCard } from "@/components/dashboard/PostProjectCard";
import { MyProjectsCard } from "@/components/dashboard/MyProjectsCard";
import { ExpertMatchingCard } from "@/components/dashboard/ExpertMatchingCard";
import { HiringAnalyticsCard } from "@/components/dashboard/HiringAnalyticsCard";
import { AccountStatusCard } from "@/components/dashboard/AccountStatusCard";
import { BillingWalletCard } from "@/components/dashboard/BillingWalletCard";
import { RatingsCard } from "@/components/dashboard/RatingsCard";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Client Command Center</h1>
          <p className="text-muted-foreground mt-2">Manage your projects and connect with India's Silver Workforce</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="md:col-span-2 lg:col-span-3">
            <PostProjectCard />
          </div>

          <div className="md:col-span-2 lg:col-span-2">
            <MyProjectsCard />
          </div>

          <div className="md:col-span-2 lg:col-span-1">
            <ExpertMatchingCard />
          </div>

          <div className="md:col-span-2 lg:col-span-2">
            <HiringAnalyticsCard />
          </div>

          <div className="md:col-span-1">
            <AccountStatusCard />
          </div>

          <div className="md:col-span-1">
            <BillingWalletCard />
          </div>

          <div className="md:col-span-2 lg:col-span-1">
            <RatingsCard />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
