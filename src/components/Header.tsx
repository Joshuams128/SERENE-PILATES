"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/classes", label: "Classes" },
    { path: "/booking", label: "Book Now" },
    { path: "/pricing", label: "Pricing" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
    { path: "/faq", label: "FAQ" },
  ];

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="bg-white/98 backdrop-blur-md sticky top-0 z-50 border-b border-[#B8C79D]/15 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="h-16 md:h-20 flex items-center">
              {/* Placeholder for logo - replace with actual logo when uploaded */}
              <div className="text-2xl md:text-3xl text-[rgb(96,108,55)] group-hover:text-[#BC6C24] transition-colors">
                Serene Pilates
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`transition-all duration-300 text-lg px-4 py-2 rounded-lg ${
                  isActive(item.path)
                    ? "text-[#BC6C24] bg-[#FFFDF5] font-normal"
                    : "text-[#606C37] hover:text-[#283517] hover:bg-[#FAF8F3] font-light"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#283517] p-3 hover:bg-[#FAF8F3] rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-6 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`block py-4 px-5 rounded-xl text-lg transition-colors duration-300 ${
                  isActive(item.path)
                    ? "text-[#BC6C24] bg-[#FFFDF5] font-normal"
                    : "text-[#606C37] hover:text-[#283517] hover:bg-[#FAF8F3] font-light"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
