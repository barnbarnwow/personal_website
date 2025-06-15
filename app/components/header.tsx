"use client";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="text-white p-4">
      {/* Only nav is flex */}
      <nav className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">Barney Jesse</h1>

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
          className="md:hidden p-1 bg-red-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <img
              src="/PixelarticonsClose.svg"
              alt="Close"
              width={28}
              height={28}
            />
          ) : (
            <img
              src="/pixelarticonsMenu.svg"
              alt="Menu"
              width={28}
              height={28}
            />
          )}
        </button>
      </nav>

      {/* Mobile nav, appears below nav row */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-2 mt-4">
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
      )}
    </header>
  );
}
