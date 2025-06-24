import React from "react";

export const ArticleCard = ({ img, date, category, title, summary, author }) => (
  <div className="flex flex-col md:flex-row gap-4 border-b pb-4 w-full max-w-3xl mx-auto font-roboto">
    
    <div className="p-0">
      <p className="text-xs font-normal text-gray-400">{date} · {category}</p>
      <h4 className="text-lg font-bold my-5">{title}</h4>
      <p className="text-sm mt-1 text-gray-700">{summary}</p>
      <div className="flex items-center gap-5 pt-3">
        <img
            src="/images/th.jpeg"
            className="w-8 h-8 rounded-full object-cover"
        />
        <p className="text-xs text-gray-500 mt-">
            {author}
        </p>
        </div>
    </div>
    <img src={img} alt={title} className="w-[500px] h-[250px]" />
  </div>
);
