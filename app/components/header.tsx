"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu when a link is clicked
  };

  return (
    <header className="bg-teal-950 sticky top-0 z-50 shadow-xs/50 backdrop-blur-sm">
      {/* Only nav is flex */}
      <nav className="container mx-auto flex items-center justify-between">
        <div className="bg-radial from-teal-700 from-10% to-teal-100 md:bg-linear-to-t box-content size-8 p-4 m-2 rounded-full flex md:w-100 items-center justify-center">
          <h1 className="text-3xl text-center">J.</h1>
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
        <button
          className="md:hidden absolute right-2 p-4 inset-shadow-sm/50 rounded-sm bg-teal-100/10"
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
        <ul className="absolute shadow-xs/50 p-1 w-1/2 right-0 top-20 rounded-l bg-teal-900/50 backdrop-blur-sm md:hidden text-center animate-slideDownFade">
          <li>
            <Link
              href="/"
              onClick={handleLinkClick}
              className="block bg-teal-950 rounded p-2 m-1 hover:underline"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              onClick={handleLinkClick}
              className="block bg-teal-950 rounded p-2 m-1 hover:underline"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              onClick={handleLinkClick}
              className="block bg-teal-950 rounded p-2 m-1 hover:underline"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              onClick={handleLinkClick}
              className="block bg-teal-950 rounded p-2 m-1 hover:underline"
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
}
