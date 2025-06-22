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
          className="md:hidden p-2 shadow-sm/20 rounded-full"
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
        <ul className="block p-2 w-1/2 ml-auto rounded bg-teal-500 md:hidden text-right animate-slideDownFade">
          <li>
            <Link href="/" className="m-2 hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="m-2 hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" className="m-2 hover:underline">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className="m-2 hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
}
