"use client";

import { useSidebar } from "@/components/ui/sidebar";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { sidebarItems } from "./sidebar-Items";
import { Role } from "@/feature/auth/constant";

export function AppSidebar({ role }: { role: Role }) {
  const { openMobile } = useSidebar();
  const items = sidebarItems[role];

  return (
    <Sidebar collapsible="icon">
      {/* Collapse toggle */}
      <SidebarTrigger className="absolute top-3 right-3" />

      <SidebarContent>
        <SidebarGroup>
          {/* DS logo */}
          <SidebarGroupLabel className="text-xl font-bold flex items-center justify-center">
            {!openMobile ? "DS Dashboard" : "DS"}
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center gap-2">
                      <item.icon className="h-5 w-5" />

                      {/* Hide text when collapsed */}
                      {!openMobile && <span>{item.title}</span>}
                    </a>
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
