"use client";
import { useState } from "react";
import Link from "next/link";

const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const desktopNav = (
  <nav className="hidden md:flex space-x-4">
    {navigationLinks.map((link) => (
      <Link
        key={link.name}
        href={link.href}
        className="hover:underline"
      >
        {link.name}
      </Link>
    ))}
  </nav>
);

const mobileNav = (
  <nav className="md:hidden">
    {navigationLinks.map((link) => (
      <Link
        key={link.name}
        href={link.href}
      >
        {link.name}
      </Link>
    ))}
  </nav>
);

export default function Header() {
  return (
    <header className="bg-transparent p-4 flex flex-col md:flex-row md:justify-around items-center">
      <div className = "items-center text-center">
        <img src="/logo.png" alt="JPOINT Logo" className="h-15 w-15 rounded-full" />
        <div className="font-bold">J-POINT</div>
      </div>
      {desktopNav}
      {mobileNav}
    </header>
  );
}