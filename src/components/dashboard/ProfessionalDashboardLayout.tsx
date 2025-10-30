import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import {
  LayoutDashboard,
  Briefcase,
  User,
  TrendingUp,
  GraduationCap,
  Settings,
  LogOut,
  Home,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface ProfessionalDashboardLayoutProps {
  children: ReactNode;
}

export function ProfessionalDashboardLayout({ children }: ProfessionalDashboardLayoutProps) {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const menuItems = [
    { title: "Dashboard", icon: LayoutDashboard, url: "/professional-dashboard" },
    { title: "My Projects", icon: Briefcase, url: "/professional-dashboard/projects" },
    { title: "My Profile", icon: User, url: "/professional-dashboard/profile" },
    { title: "Earnings", icon: TrendingUp, url: "/professional-dashboard/earnings" },
    { title: "Growth & Training", icon: GraduationCap, url: "/professional-dashboard/training" },
  ];

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar className="border-r border-border bg-primary text-primary-foreground">
          <SidebarHeader className="p-6 border-b border-primary-foreground/10">
            <h2 className="text-xl font-bold text-primary-foreground">RetireFreelancer</h2>
            <p className="text-xs text-primary-foreground/70">Professional Portal</p>
          </SidebarHeader>

          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel className="text-primary-foreground/70">Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild className="hover:bg-primary-foreground/10 text-primary-foreground">
                      <a href="/">
                        <Home className="h-4 w-4" />
                        <span>Home</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  {menuItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild className="hover:bg-primary-foreground/10 text-primary-foreground">
                        <a href={item.url}>
                          <item.icon className="h-4 w-4" />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild className="hover:bg-primary-foreground/10 text-primary-foreground">
                      <a href="/settings">
                        <Settings className="h-4 w-4" />
                        <span>Settings</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter className="p-4 border-t border-primary-foreground/10">
            <div className="flex items-center gap-3 mb-3">
              <Avatar className="h-10 w-10">
                <AvatarFallback className="bg-secondary text-secondary-foreground">
                  {user?.email?.[0].toUpperCase() || "P"}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-primary-foreground truncate">
                  {user?.email}
                </p>
                <p className="text-xs text-primary-foreground/70">Professional Account</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={signOut}
              className="w-full justify-start text-primary-foreground hover:bg-primary-foreground/10"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </SidebarFooter>
        </Sidebar>

        <main className="flex-1 p-6 bg-background overflow-auto">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
