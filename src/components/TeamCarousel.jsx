import React, { useRef } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

export const TeamCarousel = ({ members }) => {
  const stripRef = useRef(null);

  const scroll = (dir) => {
    if (!stripRef.current) return;
    const delta = dir === "left" ? -180 : 180;
    stripRef.current.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <section className="my-16">

      <header className="flex items-center justify-between mb-6">
        <h3 className="text-3xl font-bold pb-20">Meet Our Team</h3>
        <span className="text-s text-gray-900 font-bold">more →</span>
      </header>

      <div className="relative">

        <button
          onClick={() => scroll("left")}
          className="absolute -left-6 top-1/2 -translate-y-1/2 hidden sm:block"
        >
          <HiChevronLeft className="h-12 w-12 text-gray-900" />
        </button>

    
        <div
          ref={stripRef}
          className="flex gap-20 overflow-x-auto scroll-smooth no-scrollbar justify-center"
        >
          {members.map((m) => (
            <div
              key={m.name}
              className="flex flex-col items-center flex-shrink-0 text-center"
            >
              <img
                src={m.img}
                alt={m.name}
                className="h-28 w-28 rounded-full object-cover mb-2 shadow-md"
              />
              <p className="text-sm font-medium">{m.name}</p>
            </div>
          ))}
        </div>

      
        <button
          onClick={() => scroll("right")}
          className="absolute -right-6 top-1/2 -translate-y-1/2 hidden sm:block"
        >
          <HiChevronRight className="h-12 w-12 text-gray-900" />
        </button>
      </div>
    </section>
  );
};
