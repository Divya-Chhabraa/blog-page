import React from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { LatestArticles } from "./components/LatestArticles";
import { Email } from "./components/Email";
import { BlogHome } from "./components/BlogHome";
import { MarketingSection } from "./components/MarketingSection";

export default function App() {
  return (
    <div className="max-w-[1351px] mx-auto px-4 font-sans text-gray-800">
      <Header />
      <HeroSection />
      <LatestArticles />
      <Email />
      <BlogHome />
      <MarketingSection />
    </div>
  );
}