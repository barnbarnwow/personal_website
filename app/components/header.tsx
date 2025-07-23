"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="text-white p-4">
      {/* Logo */}
      <nav className="container mx-auto flex items-center justify-between">
        <div>
          <img
            src="/logo.png"
            alt=""
            className="w-15 h-15 md:w-20 md:h-20 object-contain rounded-full"
          />
        </div>

        {/* Desktop nav */}
        <ul className="hidden md:flex space-x-4">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:underline">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile toggle button */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <img src="/close_icon.svg" alt="Close" width={28} height={28} />
          ) : (
            <img src="/menu_icon.svg" alt="Menu" width={28} height={28} />
          )}
        </button>
      </nav>

      {/* Mobile nav, appears below nav row */}
      {isOpen && (
        <ul className="md:hidden text-xl mt-4 animate-slideDownFade">
          <li>
            <Link href="/" className="block hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="block hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" className="block hover:underline">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className="block hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
}
