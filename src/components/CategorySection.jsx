import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { ACards } from "./ACards";

export const CategorySection = ({ title, articles }) => (
  <section className="mb-10">
    <header className="flex items-center justify-between mb-4">
      <h3 className="text-3xl font-extrabold my-8 text-red-500 md:text-2xl">{title}</h3>
      <a
        href="#"
        className="text-s font-medium text-gray-500 hover:underline flex items-center gap-1 text-red-500"
      >
        all posts
        <HiOutlineArrowNarrowRight className="h-3.5 w-3.5" />
      </a>
    </header>

    {/* cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {articles.map((a) => (
        <ACards key={a.title} {...a} category={title} />

      ))}
    </div>

    <div className="h-px bg-gray-200 mt-6" />
  </section>
);
