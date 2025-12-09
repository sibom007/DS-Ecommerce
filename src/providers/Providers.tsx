"use client";

import { ThemeProvider } from "@/providers/theme-provider";

import { ClerkProvider } from "@clerk/nextjs";
import ConvexClientProvider from "./ConvexProviderWithClerk";
import SyncUser from "@/feature/auth/components/sync-user";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange>
      <ClerkProvider>
        <ConvexClientProvider>
          <SyncUser />
          {children}
        </ConvexClientProvider>
      </ClerkProvider>
    </ThemeProvider>
  );
}
