"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { nav } from "@/lib/site-data";
import { Logo } from "./logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-colors duration-300",
        scrolled
          ? "border-espresso/10 bg-ivory/90 backdrop-blur-md"
          : "border-transparent bg-ivory"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" onClick={() => setMobileOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-espresso/80 transition-colors hover:text-espresso"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <Link
            href="https://app.bridalrentalos.example.com/login"
            className="text-sm font-medium text-espresso/80 hover:text-espresso"
          >
            Log In
          </Link>
          <Button href="/book-demo" size="md">
            Book a Free Demo
          </Button>
        </div>

        <button
          type="button"
          className="flex items-center justify-center rounded-full border border-espresso/20 p-2 lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-espresso/10 bg-ivory px-6 pb-8 pt-2 lg:hidden">
          <nav className="flex flex-col" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="border-b border-espresso/10 py-4 text-base font-medium text-espresso"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-6 flex flex-col gap-3">
            <Button href="/book-demo" size="md" className="w-full" onClick={() => setMobileOpen(false)}>
              Book a Free Demo
            </Button>
            <Link
              href="https://app.bridalrentalos.example.com/login"
              onClick={() => setMobileOpen(false)}
              className="text-center text-sm font-medium text-espresso/80"
            >
              Log In
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
