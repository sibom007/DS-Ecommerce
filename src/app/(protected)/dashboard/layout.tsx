import React from "react";
import { cookies } from "next/headers";
import { fetchQuery } from "convex/nextjs";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

import { api } from "../../../../convex/_generated/api";
import { SidebarProvider } from "@/components/ui/sidebar";

import { DashboardNavbar } from "@/feature/dashboard/components/dashboard-navbar";
import { DashboardSidebar } from "@/feature/dashboard/components/dashboard-sidebar";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const { userId } = await auth();
  if (!userId) {
    return redirect("/");
  }
  const role = await fetchQuery(api.auth.getUserRole, { clerkId: userId });
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  return (
    <div className="h-screen flex  overflow-hidden">
      <SidebarProvider defaultOpen={defaultOpen}>
        <DashboardSidebar role={role!} />
        <div className="flex flex-col flex-1 h-full w-full">
          <DashboardNavbar />

          <main className="flex-1 p-3 md:p-6 overflow-y-auto ">{children}</main>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default DashboardLayout;
