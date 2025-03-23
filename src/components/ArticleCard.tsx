import { ArticleCardType } from "@/global";
import DateFormatter from "@/utils/DateFormatter";
import Image from "next/image";
import Link from "next/link";

type ArticleCard = {
  article: ArticleCardType;
};
export default function ArticleCard({ article }: ArticleCard) {
  return (
    <Link
      href={`/${article.slug}`}
      className="sm:h-[28.3rem] hover:brightness-90 animate-fade-down transition-all inline-block group w-full sm:w-[23rem] relative bg-secondary rounded-xl overflow-hidden shadow-lg"
    >
      <span className="bg-red-500/60 text-sm shadow-lg shadow-red-500/0 z-40 backdrop-blur-sm py-2 px-3 absolute top-2 left-2 rounded-full inline-flex">
        {article.category}
      </span>
      <div className="aspect-[3/2] relative overflow-hidden">
        <Image
          src={article.icon}
          className="size-full object-cover group-hover:rotate-6 group-hover:scale-110 duration-300 transition-all"
          alt={article.title}
          fill
        />
      </div>
      <div className="p-2">
        <span className="text-placeholder text-sm line-clamp-1">
          {DateFormatter(article.createdAt)} * {article.readTime}
        </span>
        <h3 className="font-semibold mt-2 h-12 line-clamp-2">
          {article.title}
        </h3>
        <p className="mt-2 h-12 line-clamp-2">{article.excerpt}</p>
        <div className="flex items-center mt-5">
          {article.authorAvatar ? (
            <div className="size-10 relative">
              <Image
                src={article.authorAvatar}
                className="rounded-full object-cover size-full"
                alt={`author ${article.author}`}
                fill
              />
            </div>
          ) : (
            <i className="UserIcon text-placeholder -ml-0.5 -mr-1 size-[2.65rem]"></i>
          )}

          <span className="ml-2.5">{article.author}</span>
        </div>
      </div>
    </Link>
  );
}
