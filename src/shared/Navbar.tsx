"use client";

import { useState } from "react";
import {
  ShoppingCart,
  Menu,
  X,
  LogOutIcon,
  User2Icon,
  LayoutDashboardIcon,
} from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import { SignOutButton, useClerk, UserButton } from "@clerk/nextjs";
import { ThemeToggle } from "@/components/ThemeToggle";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

import { useAuth } from "@/feature/auth/hooks/useAuth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const { isAuthenticated, isLoading, user } = useAuth();
  const { openUserProfile } = useClerk();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const MotionLink = motion(Link);

  return (
    <nav className="border-b border-border sticky top-0 z-40 backdrop-blur-xl bg-background/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="shrink-0 flex gap-2 items-center">
            <Image src={"/logo.svg"} alt="img" width={30} height={30} />
            <span className="text-2xl font-bold text-primary">DS</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {["Products", "Collections", "About", "Contact"].map((item, i) => (
              <MotionLink
                key={item}
                href="/"
                custom={i}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                variants={linkVariants}
                className="text-foreground hover:text-primary transition-colors relative">
                {item}
                <motion.span
                  className="absolute left-0 -bottom-1 h-0.5 w-full bg-primary"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </MotionLink>
            ))}
          </nav>

          {/* Desktop Right Section */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />

            {/* Loading state (prevents auth flicker) */}
            {isLoading && (
              <div className="w-24 h-8 bg-muted animate-pulse rounded-md" />
            )}

            {/* Not Authenticated */}
            {!isLoading && !isAuthenticated && (
              <Link
                href="/sign-in"
                className={buttonVariants({ variant: "secondary" })}>
                Sign in
              </Link>
            )}

            {/* Authenticated */}
            {!isLoading && isAuthenticated && (
              <div className="flex gap-4 items-center">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <div className="cursor-pointer">
                      <UserButton
                        appearance={{
                          elements: {
                            avatarBox: {
                              width: "40px",
                              height: "40px",
                              borderRadius: "50%",
                              overflow: "hidden",
                            },
                          },
                        }}
                      />
                    </div>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent
                    align="end"
                    className="w-48"
                    sideOffset={8}>
                    {/* Profile */}
                    <DropdownMenuItem
                      onClick={() => {
                        openUserProfile();
                      }}
                      className="flex gap-2 cursor-pointer">
                      <User2Icon className="w-4 h-4" />
                      Profile
                    </DropdownMenuItem>

                    {/* Cart */}
                    <DropdownMenuItem className="flex gap-2 cursor-pointer">
                      <ShoppingCart className="w-4 h-4" />
                      Cart
                    </DropdownMenuItem>
                    {/* Dashboard */}
                    <DropdownMenuItem className="flex gap-2 cursor-pointer">
                      <LayoutDashboardIcon className="w-4 h-4" />
                      <Link href={`/dashboard/${user?.role}`}>Dashboard</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Logout */}
                <SignOutButton redirectUrl="/sign-in">
                  <Button icon={<LogOutIcon />} variant="destructive">
                    Logout
                  </Button>
                </SignOutButton>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="md:hidden overflow-hidden border-t border-border pb-4">
              {["Products", "Collections", "About", "Contact"].map(
                (item, i) => (
                  <motion.a
                    key={item}
                    href="#"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      transition: { delay: i * 0.07 },
                    }}
                    exit={{ opacity: 0, x: -20 }}
                    className="block py-2 text-foreground hover:text-primary pl-2">
                    {item}
                  </motion.a>
                )
              )}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col gap-3 mt-4 px-2">
                <ThemeToggle />

                {/* Mobile Loading */}
                {isLoading && (
                  <div className="w-10 h-10 bg-muted animate-pulse rounded-full" />
                )}

                {/* Mobile Not Logged In */}
                {!isLoading && !isAuthenticated && (
                  <Link
                    href="/sign-in"
                    className={buttonVariants({ variant: "secondary" })}>
                    Sign in
                  </Link>
                )}

                {/* Mobile Logged In */}
                {!isLoading && isAuthenticated && (
                  <UserButton
                    appearance={{
                      elements: {
                        avatarBox: {
                          width: "34px",
                          height: "34px",
                          borderRadius: "50%",
                        },
                      },
                    }}
                  />
                )}

                {/* Mobile Cart Button */}
                <Button
                  size="sm"
                  className="gap-2 w-full"
                  icon={<ShoppingCart />}>
                  Cart
                </Button>
              </motion.div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export const linkVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08 },
  }),
  hover: { scale: 1.1, x: 4 },
};