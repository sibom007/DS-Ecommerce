"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";

import { sidebarItems } from "./sidebar-Items";
import { Role } from "@/feature/auth/constant";

export function DashboardSidebar({ role }: { role: Role }) {
  const pathname = usePathname();
  const items = sidebarItems[role];

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarHeader className="h-[57px] text-center text-2xl font-bold border-b">
          <Link href="/">DS Dashboard</Link>
        </SidebarHeader>

        <SidebarMenu>
          {items.map((item) => {
            const isActive = pathname === item.url;

            return (
              <SidebarMenuItem key={item.title} className="px-2 py-0.5">
                <SidebarMenuButton asChild>
                  <Link
                    href={item.url}
                    className={`
                      flex items-center gap-2 rounded-md px-2 py-2 transition-colors
                      ${
                        isActive
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }
                    `}>
                    <item.icon className="h-5 w-5" />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
