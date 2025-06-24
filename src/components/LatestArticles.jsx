import React from "react";
import { ArticleCard } from "./ArticleCard";

export const LatestArticles = () => (
  <section className="p-8">
    <h3 className="text-2xl font-semibold my-6 w-full max-w-3xl mx-auto font-playfair text-gray-700">The Latest</h3>
    <div className="grid gap-8">
      <ArticleCard
        img="/images/article1.png"
        date="April 6, 2025"
        category="THE BASICS"
        title="The Complete Guide to Real Estate Referral Fees for 2025"
        summary="Let’s remove some of the mystery around real estate referrals and the associated fees..."
        author="Yasbel Garcia"
      />
      <ArticleCard
        img="/images/article2.png"
        date="April 6, 2025"
        category="APPS + SOFTWARE"
        title="The Best 6 Real Estate AI Tools for 2025"
        summary="Tools powered by artificial intelligence (AI) continue to become more powerful..."
        author="Andrew Wan"
      />
      <ArticleCard
        img="/images/article3.png"
        date="April 7, 2025"
        category="REAL ESTATE HUMOR"
        title="Real Estate Trivia: 16 Fun Facts You Must Know in 2025"
        summary="We compiled a list of real estate facts that are peculiar, surprising, quirky..."
        author="Yasbel Garcia"
      />
    </div>
  </section>
);