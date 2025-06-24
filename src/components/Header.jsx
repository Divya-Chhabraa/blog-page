import React from "react";

export const Header = () => (
  <header className="flex justify-between items-center py-6 px-[100px] border-b">
    <div className="flex items-center gap-4">
      <img src="/images/logo.png" alt="ROUND DIGITAL" className="h-8 w-auto" />
    </div>

    <div className="flex items-center space-x-8 font-grotesk">
      <nav className="flex space-x-8 text-base font-normal ">
        <a href="/" className="hover:underline text-xl">About us</a>
        <a href="/" className="hover:underline text-xl">Services</a>
        <a href="/" className="hover:underline text-xl">Use Cases</a>
        <a href="/" className="hover:underline text-xl">Pricing</a>
        <a href="/" className="hover:underline text-xl">Blog</a>
      </nav>

      <button className="border border-gray-800 px-5 py-2 text-xl rounded hover:bg-gray-100">
        Book a call
      </button>
    </div>
  </header>
);
