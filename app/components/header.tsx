"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="md:shadow-sm">
      {/* Navbar */}
      <nav className="w-full flex items-center justify-between md:justify-center">
        <div>
          {/* Logo */}
          <Link href="/">
            <img
              src="/logo.png"
              alt=""
              className="w-15 h-15 md:w-15 md:h-15 object-contain rounded-full m-3 md:mr-20"
            />
          </Link>
        </div>

        {/* Desktop nav */}
        <ul className="hidden md:flex text-xl space-x-4">
          <li>
            <Link
              href="/"
              className="relative inline-block duration-100 after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-red-500 after:transition-all after:duration-100 hover:after:w-full"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="relative inline-block duration-100 after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-red-500 after:transition-all after:duration-100 hover:after:w-full"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="relative inline-block duration-100 after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-red-500 after:transition-all after:duration-100 hover:after:w-full"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="relative inline-block duration-100 after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-red-500 after:transition-all after:duration-100 hover:after:w-full"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile toggle button */}
        <button
          className="md:hidden mx-2 p-2 bg-red-500"
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
        <ul className="md:hidden bg-red-500 text-xl p-6 m-4 animate-slideDownFade">
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
