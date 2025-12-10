import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/feature/dashboard/components/app-sidebar";
import { auth } from "@clerk/nextjs/server";
import { fetchQuery } from "convex/nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";
import { api } from "../../../../convex/_generated/api";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const { userId } = await auth();
  if (!userId) {
    return redirect("/");
  }
  const role = await fetchQuery(api.auth.getUserRole, { clerkId: userId });
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";
  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar role={role!} />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
};

export default DashboardLayout;
