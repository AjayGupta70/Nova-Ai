"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { WebAryaLogo } from "./NovaAiLogo";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact Us" },
];

const cn = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(" ");

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <WebAryaLogo />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex space-x-8">
          {LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.href} className="relative group">
                <Link
                  href={link.href}
                  className={cn(
                    "text-sm sm:text-base font-medium transition-colors hover:text-blue-600",
                    active ? "text-blue-600" : "text-gray-700"
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-[2px] bg-blue-600 transition-all duration-300",
                      active ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA Buttons */}
        <div className="hidden lg:flex items-center space-x-3">
          <Link
            href="/free-demo"
            className="px-5 py-2 rounded-lg bg-blue-600 text-white font-medium text-sm hover:bg-blue-700 transition"
          >
            Free Demo
          </Link>
          <Link
            href="/services"
            className="px-5 py-2 rounded-lg ring-2 ring-blue-600 text-blue-600 font-medium text-sm hover:bg-blue-50 transition"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white shadow-lg border-t border-gray-200">
          <ul className="space-y-2 px-5 py-6">
            {LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "block text-lg px-3 py-2 rounded-lg transition-colors",
                      active
                        ? "bg-blue-50 text-blue-600 font-semibold"
                        : "text-gray-700 hover:bg-gray-100"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <div className="mt-4 space-y-3">
              <Link
                href="/free-demo"
                onClick={() => setMobileOpen(false)}
                className="block text-center bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
              >
                Free Demo
              </Link>
              <Link
                href="/book-now"
                onClick={() => setMobileOpen(false)}
                className="block text-center ring-2 ring-blue-600 text-blue-600 py-2 rounded-lg font-medium hover:bg-blue-50 transition"
              >
                Book Now
              </Link>
            </div>
          </ul>
        </div>
      )}
    </header>
  );
}
