import React from "react";

export const HeroSection = () => (
  <section className="w-full px-[100px] md:flex gap-8 items-center border-b">
    <img
      src="/images/hero.png"
      alt="Real Estate Conference"
      className="w-[600px] max-w-full h-auto flex-shrink-0 my-10"
    />

    <div className="md:flex-1 flex flex-col justify-center ml-[70px] w-[521px]">
      <p className="text-xs text-red-600 font-semibold font-roboto tracking-widest">THE BASICS</p>
      <h2 className="text-3xl font-bold mt-6 font-playfair">10 Must-Attend Real Estate Conferences + Events in 2025</h2>
      <div className="flex items-center gap-5 pt-3">
        <img
            src="/images/th.jpeg"
            className="w-12 h-12 rounded-full object-cover"
        />
        <p className="text-sm font-medium font-roboto">
            Jolina Aliva | March 4, 2025
        </p>
        </div>
      <p className="mt-4 text-sm text-gray-600 font-roboto">
        Discover the top must-attend events in 2025 to network, gain industry insights, and stay ahead. Don’t
        miss these opportunities!
      </p>
      <a href="#" className="text-sm font-medium mt-5 inline-block font-roboto">
        Keep reading →
      </a>
    </div>
  </section>
);
