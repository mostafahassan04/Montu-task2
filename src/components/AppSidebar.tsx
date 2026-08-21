import { useState } from "react";
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
import { APP_CONFIG, NAV_ITEMS } from "@/data/staticContent";
import { useAppSelector } from "@/store/hooks";
import { selectCartTotalCount } from "@/store/cartSlice";

export function AppSidebar() {
  const [activeTab, setActiveTab] = useState("home");
  const cartCount = useAppSelector(selectCartTotalCount);

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
                const isProducts = item.id === "products";

                return (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton
                      asChild
                      isActive={activeTab === item.id}
                      onClick={() => setActiveTab(item.id)}
                    >
                      <a href={item.href} className="flex justify-between items-center w-full">
                        <div className="flex items-center gap-2">
                          <Icon />
                          <span>{item.title}</span>
                        </div>
                        {isProducts && cartCount > 0 && (
                          <span className="bg-sky-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">
                            {cartCount}
                          </span>
                        )}
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