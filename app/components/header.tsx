"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="text-white p-4">
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
          className="md:hidden p-2 shadow-sm/20 hover:shadow-none hover:inset-shadow-sm/50 rounded-full"
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
        <ul className="md:hidden text-right text-2xl mt-4 animate-slideDownFade">
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
