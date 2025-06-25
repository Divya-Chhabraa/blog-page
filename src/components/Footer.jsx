import React from "react";
import { HiArrowNarrowRight, HiOutlineMail } from "react-icons/hi";
import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";

export const Footer = () => (
  <footer className="bg-[#191A23] text-gray-200 mt-10 rounded-t-[56px] px-4 sm:px-10 lg:px-24 pt-14 pb-10 font-grotesk mb-20">
    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">
      <h1 className="flex items-center gap-2 text-lg sm:text-xl font-bold">
        <span className="h-4 w-4 bg-red-500 rounded-full inline-block" />
        ROUNDDIGITAL
      </h1>

      <nav className="flex flex-wrap justify-center gap-4 text-sm sm:text-base lg:gap-10 underline">
        {["About us", "Services", "Use Cases", "Pricing", "Blog"].map((link) => (
          <a key={link} href="#" className="decoration-gray-400">
            {link}
          </a>
        ))}
      </nav>

      <div className="flex gap-4">
        {[FaLinkedinIn, FaFacebookF, FaTwitter].map((Icon, i) => (
          <span key={i} className="h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-white grid place-content-center">
            <Icon className="h-4 w-4 text-black" />
          </span>
        ))}
      </div>
    </div>

    <div className="mt-14 grid gap-10 lg:grid-cols-2">
      <div>
        <span className="inline-block bg-[#E14242] text-black text-base sm:text-lg font-semibold px-4 py-1.5 rounded-lg mb-6">
          Contact us:
        </span>
        <ul className="space-y-2 text-sm sm:text-base leading-relaxed">
          <li><span className="font-semibold">Email:</span> info@rounddigital.com</li>
          <li><span className="font-semibold">Phone:</span> 555-567-8901</li>
          <li>
            <span className="font-semibold">Address:</span> 1234 Main St,
            Moonstone City, Stardust State 12345
          </li>
        </ul>
      </div>

      <div className="bg-[#292A32] rounded-xl p-6 flex flex-col justify-center">
        <form className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            className="flex-grow bg-transparent border border-gray-400 rounded-md py-3 px-4 text-sm placeholder-gray-400 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-[#E14242] text-black font-medium px-6 py-3 rounded-md flex items-center justify-center gap-2"
          >
            Subscribe to news
          </button>
        </form>
      </div>
    </div>

    <hr className="border-gray-700 my-12" />

    <div className="flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm gap-4">
      <p>© 2025 RoundDigital. All Rights Reserved.</p>
      <a href="#" className="hover:underline">Privacy Policy</a>
    </div>
  </footer>
);
