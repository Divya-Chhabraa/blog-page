import React from "react";
import { HiArrowNarrowRight, HiOutlineMail } from "react-icons/hi";
import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";

export const Footer = () => (
  <footer className="bg-[#191A23] text-gray-200 mt-10 rounded-t-[56px] px-4 sm:px-10 lg:px-24 pt-20 pb-16 font-grotesk text-[17px] mb-20">
    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
      <h1 className="flex items-center gap-2 text-2xl sm:text-3xl font-bold">
        <span className="h-4 w-4 bg-red-500 rounded-full inline-block" />
        ROUNDDIGITAL
      </h1>

      <nav className="flex flex-wrap justify-center gap-6 text-lg lg:gap-12 underline">
        {["About us", "Services", "Use Cases", "Pricing", "Blog"].map((link) => (
          <a key={link} href="#" className="decoration-gray-400">
            {link}
          </a>
        ))}
      </nav>

      <div className="flex gap-5">
        {[FaLinkedinIn, FaFacebookF, FaTwitter].map((Icon, i) => (
          <span key={i} className="h-10 w-10 rounded-full bg-white grid place-content-center">
            <Icon className="h-5 w-5 text-black" />
          </span>
        ))}
      </div>
    </div>

    <div className="max-w-6xl mx-auto mt-16 grid gap-12 lg:grid-cols-2">
      <div>
        <span className="inline-block bg-[#E14242] text-black text-xl font-semibold px-5 py-2 rounded-lg mb-8">
          Contact us:
        </span>
        <ul className="space-y-4 text-lg leading-relaxed">
          <li><span className="font-semibold">Email:</span> info@rounddigital.com</li>
          <li><span className="font-semibold">Phone:</span> 555-567-8901</li>
          <li>
            <span className="font-semibold">Address:</span> 1234 Main St,<br />
            Moonstone City, Stardust State 12345
          </li>
        </ul>
      </div>

      <div className="bg-[#292A32] rounded-xl p-8 flex flex-col justify-center">
        <p className="mb-4 text-lg flex items-center gap-2">
          <HiOutlineMail className="h-5 w-5" /> Stay up to date
        </p>
        <form className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Email"
            className="flex-grow bg-transparent border border-gray-400 rounded-md py-3 px-5 text-base placeholder-gray-400 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-[#E14242] text-black font-semibold px-8 py-3 rounded-md flex items-center gap-2"
          >
            Subscribe
            <HiArrowNarrowRight className="h-5 w-5" />
          </button>
        </form>
      </div>
    </div>

    <hr className="border-gray-700 my-14" />

    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-base gap-6">
      <p>© 2025 RoundDigital. All Rights Reserved.</p>
      <a href="#" className="underline">Privacy Policy</a>
    </div>
  </footer>
);
