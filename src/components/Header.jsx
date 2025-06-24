import React, { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center py-4 px-4 sm:px-8 md:px-10 lg:px-[100px] border-b">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src="/images/logo.png" alt="ROUND DIGITAL" className="h-8 w-auto" />
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center space-x-6 lg:space-x-8 font-grotesk">
        <nav className="flex space-x-4 lg:space-x-6 text-base lg:text-lg">
          <a href="/" className="hover:underline">About us</a>
          <a href="/" className="hover:underline">Services</a>
          <a href="/" className="hover:underline">Use Cases</a>
          <a href="/" className="hover:underline">Pricing</a>
          <a href="/" className="hover:underline">Blog</a>
        </nav>

        <button className="border border-gray-800 px-4 py-1.5 text-sm lg:text-base rounded hover:bg-gray-100">
          Book a call
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <button
        className="md:hidden text-2xl text-gray-700"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <HiOutlineMenu />
      </button>

      {/* Mobile Drawer Menu (optional if needed later) */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start px-6 py-4 space-y-3 text-base md:hidden z-50">
          <a href="/" className="hover:underline">About us</a>
          <a href="/" className="hover:underline">Services</a>
          <a href="/" className="hover:underline">Use Cases</a>
          <a href="/" className="hover:underline">Pricing</a>
          <a href="/" className="hover:underline">Blog</a>
          <button className="mt-2 border border-gray-800 px-4 py-1 rounded hover:bg-gray-100">
            Book a call
          </button>
        </div>
      )}
    </header>
  );
};
