import React from "react";

export const MissionSection = () => (
  <section className="my-20 grid md:grid-cols-3 gap-8 px-6 md:px-10">
    <div className="flex flex-col col-span-1">
      <h3 className="text-3xl font-semibold">Our Mission</h3>
      <a
        href="#"
        className="text-red-600 font-medium text-sm mt-3 hover:underline"
      >
        more →
      </a>
    </div>

    <p className="text-lg text-gray-700 md:col-span-2 leading-loose font-roboto">
      Launched in January 1978, The Close is a world-class real-estate website
      designed to give agents, teams, and brokerages actionable, strategic insight.
      From our research-driven articles to our professionally backed analyses, we
      leverage the perspective of working agents and brokers who want to take
      their businesses to the next level.
    </p>
  </section>
);
