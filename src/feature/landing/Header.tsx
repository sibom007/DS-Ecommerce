"use client";

import { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import { ThemeToggle } from "@/components/ThemeToggle";
import Link from "next/link";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-border bg-background sticky top-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="shrink-0 flex gap-2 items-center">
            <Image src={"./logo.svg"} alt="img" width={30} height={30} />
            <span className="text-2xl font-bold text-primary">DS</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#"
              className="text-foreground hover:text-primary transition-colors">
              Products
            </a>
            <a
              href="#"
              className="text-foreground hover:text-primary transition-colors">
              Collections
            </a>
            <a
              href="#"
              className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a
              href="#"
              className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />

            <Link
              href={"/sign-in"}
              className={buttonVariants({ variant: "secondary" })}>
              Sign in
            </Link>
            <Button size="sm" className="gap-2">
              <ShoppingCart className="w-4 h-4" />
              Cart
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-border">
            <a
              href="#"
              className="block py-2 text-foreground hover:text-primary">
              Products
            </a>
            <a
              href="#"
              className="block py-2 text-foreground hover:text-primary">
              Collections
            </a>
            <a
              href="#"
              className="block py-2 text-foreground hover:text-primary">
              About
            </a>
            <a
              href="#"
              className="block py-2 text-foreground hover:text-primary">
              Contact
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
