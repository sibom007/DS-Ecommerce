"use client";

import { useState } from "react";
import { Bell, Menu, X } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useAuth } from "@/feature/auth/hooks/useAuth";
import { SignOutButton, useClerk, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Skeleton } from "@/components/ui/skeleton";

export function DashboardNavbar() {
  const { isAuthenticated, isLoading, user } = useAuth();
  const { openUserProfile } = useClerk();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = ["Products", "Collections", "About", "Contact"];

  return (
    <header className="w-full border-b bg-background/80 backdrop-blur-md sticky top-0 z-40">
      <div className="w-full h-14 px-4 flex items-center justify-between">
        {/* LEFT: Sidebar Trigger */}
        <div className="flex items-center gap-3">
          <SidebarTrigger />
          <div>
            <h1 className="flex items-center">
              Hi,{user?.username ?? <Skeleton className="h-5 w-32" />}
            </h1>
          </div>
        </div>

        {/* CENTER: Desktop Links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((item) => (
            <Link
              key={item}
              href="/"
              className="text-foreground hover:text-primary transition-colors">
              {item}
            </Link>
          ))}
        </nav>

        {/* RIGHT: User + Theme + Notifications */}
        <div className="flex items-center gap-4">
          <ThemeToggle />

          {isAuthenticated ? (
            <>
              <button className="p-2 rounded-md hover:bg-muted transition">
                <Bell className="w-5 h-5" />
              </button>

              <UserButton
                appearance={{
                  elements: {
                    avatarBox: {
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                    },
                  },
                }}
              />
            </>
          ) : (
            <div className="flex gap-4">
              <Skeleton className="rounded-lg w-9 h-9" />
              <Skeleton className="rounded-full w-9 h-9" />
            </div>
          )}

          {!isAuthenticated && !isLoading && (
            <Link
              href="/sign-in"
              className="text-sm font-medium underline underline-offset-4">
              Sign in
            </Link>
          )}

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t px-4 py-3 flex flex-col gap-3 bg-background">
            {/* Mobile Links */}
            {links.map((item) => (
              <Link
                key={item}
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-foreground hover:text-primary transition-colors py-1">
                {item}
              </Link>
            ))}

            {/* Mobile user actions */}
            {isAuthenticated && (
              <div className="flex flex-col gap-2 mt-2">
                <button
                  onClick={() => openUserProfile()}
                  className="text-left py-1 hover:text-primary">
                  Profile
                </button>

                <SignOutButton redirectUrl="/sign-in">
                  <button className="text-left py-1 text-red-600">
                    Logout
                  </button>
                </SignOutButton>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
