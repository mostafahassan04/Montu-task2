import { useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { APP_CONFIG, NAV_ITEMS } from "@/data/staticContent";

export function AppSidebar() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <Sidebar>
      <SidebarHeader className="p-4 font-bold text-lg text-sky-400 border-b border-sidebar-border">
        {APP_CONFIG.sidebarTitle}
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {NAV_ITEMS.map((item) => {
                const Icon = item.icon;
                return (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton
                      asChild
                      isActive={activeTab === item.id}
                      onClick={() => setActiveTab(item.id)}
                    >
                      <a href={item.href}>
                        <Icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}