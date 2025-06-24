import React, { useRef } from "react";
import { HiOutlinePlay, HiChevronLeft, HiChevronRight } from "react-icons/hi";

export const FeatureVideo = ({ hero, thumbs }) => {
  const strip = useRef(null);

  const scroll = (dir) => {
    if (!strip.current) return;
    const delta = dir === "left" ? -220 : 220;
    strip.current.scrollBy({ top: delta, behavior: "smooth" });
  };

  return (
    <section className="bg-black text-white py-12 sm:py-16 lg:py-20 w-full lg:w-screen lg:relative lg:left-1/2 lg:right-1/2 lg:-translate-x-1/2 font-roboto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="relative w-full lg:w-[900px]">
            <img src={hero.img} alt={hero.title} className="w-full h-full object-cover" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-white/80 backdrop-blur grid place-content-center">
                <HiOutlinePlay className="h-8 w-8 sm:h-10 sm:w-10 text-pink-600" />
              </span>
            </span>
            <span className="hidden lg:block absolute right-0 top-0 h-full w-[3px] bg-neutral-800" />
          </div>

          <aside className="flex flex-col w-full lg:w-[320px]">
            <div ref={strip} className="flex flex-col gap-6 overflow-y-auto max-h-[260px] sm:max-h-[320px] lg:max-h-[340px] pr-2">
              {thumbs.map((t) => (
                <div key={t.title}>
                  <img src={t.img} alt={t.title} className="w-full h-[110px] sm:h-[130px] object-cover" />
                  <p className="text-xs sm:text-sm font-medium mt-2 leading-snug">{t.title}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-end gap-6 mt-6">
              <button onClick={() => scroll("left")}>
                <HiChevronLeft className="h-8 w-8 sm:h-10 sm:w-10" />
              </button>
              <button onClick={() => scroll("right")}>
                <HiChevronRight className="h-8 w-8 sm:h-10 sm:w-10" />
              </button>
            </div>
          </aside>
        </div>
        <h4 className="text-lg sm:text-xl font-semibold mt-6">{hero.title}</h4>
      </div>
    </section>
  );
};
