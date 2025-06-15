"use client";
import { useState } from "react";

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
            <a href="/" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="/projects" className="hover:underline">
              Projects
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:underline">
              Contact
            </a>
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
            <a href="/" className="block hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="block hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="/projects" className="block hover:underline">
              Projects
            </a>
          </li>
          <li>
            <a href="/contact" className="block hover:underline">
              Contact
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
