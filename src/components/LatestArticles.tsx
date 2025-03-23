"use client";
import { useState } from "react";
import ArticleCard from "@/components/ArticleCard";
import { ArticleCardType } from "@/global";
import { ArticleTransform } from "@/utils/Transforms";

export default function LatestArticles({
  initialArticles,
  totalPages,
}: {
  initialArticles: ArticleCardType[];
  totalPages: number;
}) {
  const [articles, setArticles] = useState<ArticleCardType[]>(initialArticles);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showMoreButton, setShowMoreButton] = useState<boolean>(true);
  async function loadMore() {
    try {
      if (currentPage >= totalPages) setShowMoreButton(false);
      setLoading(true);
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      const newArticles = await (
        await fetch(
          `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${nextPage}`
        )
      ).json();

      setArticles((prev) => [...prev, ...newArticles.map(ArticleTransform)]);
      setLoading(false);
      console.log([...articles, ...newArticles.map(ArticleTransform)]);
    } catch {
      setShowMoreButton(false);
    }
  }
  return (
    <div>
      <h2 className="text-2xl text-center">Últimos artigos</h2>
      <div className="flex flex-col items-center mt-12 px-4 sm:px-0">
        <div className="gap-x-4 inline-grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-y-4">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
        <div className="w-full mt-6 py-3">
          <button
            disabled={loading}
            onClick={loadMore}
            hidden={!showMoreButton}
            className="bg-accent-light h-12 w-36 mx-auto mt-10 text-const-dark flex justify-center items-center rounded-md hover:bg-accent-dark active:bg-accent-light transition-colors"
          >
            {loading ? (
              <i className="LoadingIcon animate-fade size-9 text-const-dark"></i>
            ) : (
              "Carregar mais..."
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
