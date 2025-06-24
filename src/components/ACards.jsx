import React from "react";

export const ACards = ({ img, title, author }) => (
  <div className="flex flex-col gap-2 max-w-s py-6 font-roboto">
    <img
      src={img}
      alt={title}
      className="w-full h-[250px] object-cover"
    />
    <h5 className="text-xl font-bold leading-snug">{title}</h5>
    <div className="flex items-center gap-5 pt-3">
        <img
            src="/images/th.jpeg"
            className="w-6 h-6 rounded-full object-cover"
        />
        <p className="text-s text-gray-800">
            {author}
        </p>
        </div>
  </div>
);
