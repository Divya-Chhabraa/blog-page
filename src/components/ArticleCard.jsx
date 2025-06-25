import React from "react";

export const ArticleCard = ({
  img,
  date,
  category,
  title,
  summary,
  author,
}) => (
  <div className="flex flex-col md:flex-row gap-6 border-b pb-6 w-full max-w-3xl mx-auto font-roboto">
    <div className="flex-1">
      <p className="text-xs text-gray-400">
        {date} · <span className={"text-red-400"}>{category}</span>
      </p>

      <h4 className="mt-4 text-lg md:text-xl font-bold">{title}</h4>

      <p className="mt-2 text-sm md:text-base text-gray-700">{summary}</p>

      <div className="flex items-center gap-4 mt-4">
        <img src="/images/th.jpeg" className="w-8 h-8 rounded-full object-cover" />
        <p className="text-xs md:text-sm text-gray-500">{author}</p>
      </div>
    </div>

    <img
      src={img}
      alt={title}
      className="w-full md:w-[320px] lg:w-[400px] h-[200px] sm:h-[250px] sm:w-[400px] sm:mx-auto object-cover flex-shrink-0"
    />
  </div>
);
