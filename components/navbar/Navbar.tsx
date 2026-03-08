"use client";

import { useState, useEffect } from "react";
import Container from "@/app/container";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hakkımda", href: "#about" },
  { label: "Projeler", href: "#projects" },
  { label: "Deneyim", href: "#experience" },
  { label: "İletişim", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "border-b border-white/10 bg-black/60 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <Container>
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              className="text-lg font-semibold tracking-tight hover:opacity-80 transition"
            >
              Semih.dev
            </Link>

            <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative hover:text-white transition after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden text-white"
            >
              <Menu size={22} />
            </button>
          </div>
        </Container>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 z-50 h-full w-[280px] bg-black border-l border-white/10 backdrop-blur-xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-8 gap-8 text-lg">
          <div className="flex items-center justify-between mb-6">
            <button onClick={() => setIsOpen(false)}>
              <X size={24} />
            </button>
          </div>

          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-neutral-300 hover:text-white transition"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
