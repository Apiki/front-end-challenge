"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/_components/ui/sheet";
import { Menu, X } from "lucide-react";
import { Button } from "@/_components/ui/button";
import Logo from "./Logo";
import { AnimatedLink } from "../AnimatedLink";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white md:px-0 px-4 border-b">
      <div className="flex items-center justify-between container mx-auto h-15">
        <Logo />
        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild className="cursor-pointer">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="gap-2">
              <div className="flex flex-col ml-4 h-15 justify-center  border-b">
                <Logo />
              </div>
              <div className="flex flex-col gap-4 ml-4">
                <AnimatedLink href="/">Home</AnimatedLink>
                <AnimatedLink href="/sobre">Sobre</AnimatedLink>
                <AnimatedLink href="/contato">Contato</AnimatedLink>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8">
          <AnimatedLink href="/">Home</AnimatedLink>
          <AnimatedLink href="/sobre">Sobre</AnimatedLink>
          <AnimatedLink href="/contato">Contato</AnimatedLink>
        </nav>
      </div>
    </nav>
  );
}
