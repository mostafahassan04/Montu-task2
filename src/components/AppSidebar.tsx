import { useState } from "react";
import { LayoutDashboard, Users, Settings, BarChart3 } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const items = [
  { title: "Dashboard", id: "dashboard", icon: LayoutDashboard },
  { title: "Analytics", id: "analytics", icon: BarChart3 },
  { title: "Team", id: "team", icon: Users },
  { title: "Settings", id: "settings", icon: Settings },
];

export function AppSidebar() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <Sidebar>
      <SidebarHeader className="p-4 font-bold text-lg">Montu</SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    isActive={activeTab === item.id}
                    onClick={() => setActiveTab(item.id)}
                  >
                    <item.icon />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}