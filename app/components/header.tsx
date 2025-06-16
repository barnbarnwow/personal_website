"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="text-white p-4">
      {/* Only nav is flex */}
      <nav className="container mx-auto flex items-center justify-between">
        <h1 className="bg-radial-[at_50%_75%] from-teal-950 via-teal-700 to-teal-100 text-3xl p-5 rounded-full">
          J.
        </h1>

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
        <button
          className="md:hidden bg-radial-[at_50%_75%] from-teal-950 via-teal-700 to-teal-100 rounded-full"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <img src="/close_icon.svg" alt="Close" width={28} height={28} />
          ) : (
            <img src="/menu_icon.svg" alt="Menu" width={28} height={28} />
          )}
        </button>
      </nav>

      {/* Mobile nav, appears below nav row */}
      {isOpen && (
        <ul className="md:hidden items-center mt-4">
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
