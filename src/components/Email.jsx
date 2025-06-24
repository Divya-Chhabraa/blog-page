import React from "react";
import { HiOutlineMail, HiArrowNarrowRight } from "react-icons/hi";

export const Email = () => (
  <footer className="w-full px-[100px] pb-6 flex flex-col md:flex-row items-center justify-between gap-4 border-b font-roboto">
    <div className="flex items-center gap-3">
      <span className="h-10 w-10 flex items-center justify-center rounded-full border border-gray-800">
        <HiOutlineMail className="h-5 w-5 text-gray-600" />
      </span>
      <p className="text-l font-bold whitespace-nowrap pl-6">
        Receive free, actionable real-estate strategy in your inbox.
      </p>
    </div>

    <form className="flex w-full max-w-2xl">
      <input
        type="email"
        className="flex-grow border border-black-900 px-4 py-2 text-sm "
      />
      <button
        type="submit"
        className="bg-black text-white px-4 py-2 border border-l-0 border-gray-800 flex items-center"
      >
        <HiArrowNarrowRight className="h-5 w-5" />
      </button>
    </form>
  </footer>
);
