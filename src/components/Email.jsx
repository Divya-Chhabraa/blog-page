import React from "react";
import { HiOutlineMail, HiArrowNarrowRight } from "react-icons/hi";

export const Email = () => (
  <footer className="w-full px-4 sm:px-8 md:px-16 lg:px-[100px] py-6 flex flex-col md:flex-row items-center justify-between gap-6 border-b font-roboto">
    <div className="flex items-center gap-4 w-full md:w-auto text-center md:text-left">
      <span className="h-10 w-10 flex items-center justify-center rounded-full border border-gray-800 flex-shrink-0">
        <HiOutlineMail className="h-5 w-5 text-gray-600" />
      </span>
      <p className="text-base font-medium">
        Receive free, actionable real-estate strategy in your inbox.
      </p>
    </div>

    <form className="flex w-full max-w-xl">
      <input
        type="email"
        placeholder="Enter your email"
        className="flex-grow border border-black px-4 py-2 text-sm"
      />
      <button
        type="submit"
        className="bg-black text-white px-4 py-2 border border-l-0 border-black flex items-center"
      >
        <HiArrowNarrowRight className="h-5 w-5" />
      </button>
    </form>
  </footer>
);
