import React from "react";
import {
  HiOutlineMail,
  HiArrowNarrowRight,
} from "react-icons/hi";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

export const Footer = () => (
  <footer className="bg-[#0F0F14] text-gray-200 mt-24
                     rounded-t-[56px] px-6 md:px-24 pt-14 pb-10 mb-14 font-grotesk">
    <div className="flex flex-col lg:flex-row items-center
                    justify-between gap-10">
  
      <h1 className="flex items-center gap-2 text-xl font-bold">
        <span className="h-4 w-4 bg-red-500 rounded-full inline-block" />
        ROUNDDIGITAL
      </h1>

      
      <nav className="flex gap-10 text-base font-normal text-lg underline">
        {["About us", "Services", "Use Cases", "Pricing", "Blog"].map(
          (link) => (
            <a
              key={link}
              href="#"
              className="hover:underline decoration-gray-400"
            >
              {link}
            </a>
          )
        )}
      </nav>

     
      <div className="flex gap-4 text-black">
        <span className="h-9 w-9 rounded-full bg-white grid place-content-center">
          <FaLinkedinIn className="h-4 w-4" />
        </span>
        <span className="h-9 w-9 rounded-full bg-white grid place-content-center">
          <FaFacebookF className="h-4 w-4" />
        </span>
        <span className="h-9 w-9 rounded-full bg-white grid place-content-center">
          <FaTwitter className="h-4 w-4" />
        </span>
      </div>
    </div>

   
    <div className="mt-14 grid lg:grid-cols-2 gap-1">
      
      <div>
        <span className="inline-block bg-red-600 text-black
                         text-lg font-semibold px-5 py-1.5 rounded-lg mb-8">
          Contact us:
        </span>

        <ul className="space-y-2 text-lg leading-relaxed">
          <li>
            <span className="font-semibold">Email:</span>{" "}
            info@rounddigital.com
          </li>
          <li>
            <span className="font-semibold">Phone:</span>{" "}
            555-567-8901
          </li>
          <li>
            <span className="font-semibold">Address:</span>{" "}
            1234 Main St<br />
            Moonstone City, Stardust State 12345
          </li>
        </ul>
      </div>

      
      <div className="bg-[#1C1C22] rounded-xl px-10 flex flex-col
                      justify-center">
        <form className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Email"
            className="flex-grow bg-transparent border border-gray-400
                       rounded-md sm:rounded-md 
                       py-3 px-5 text-base placeholder-gray-400
                       focus:outline-none"
          />
          <button
            type="submit"
            className="bg-red-600 text-black font-medium
                       px-8 py-3 rounded-md sm:rounded-md"
          >
            Subscribe to news
          </button>
        </form>
      </div>
    </div>

   
    <hr className="border-gray-600 my-12" />

    
    <div className="flex flex-col md:flex-row justify-between
                    items-center text-sm gap-4">
      <p>© 2023 Positivus. All Rights Reserved.</p>
      <a href="#" className="hover:underline">
        Privacy Policy
      </a>
    </div>
  </footer>
);
