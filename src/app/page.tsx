import Categories from "@/components/Categories";
import LatestArticles from "@/components/LatestArticles";
import { ArticleCardType } from "@/global";
import { ArticleTransform } from "@/utils/Transforms";
import Image from "next/image";

export default async function Home() {
  async function getLastArticles() {
    const response = await fetch(
      "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518"
    );
    const data = await response.json();
    return {
      totalPages: parseInt(response.headers.get("X-WP-TotalPages")!),
      data: data.map(ArticleTransform),
    };
  }
  const articles: {
    totalPages: number;
    data: ArticleCardType[];
  } = await getLastArticles(); // * Self-invoking function
  return (
    <div className="">
      <section className="mx-auto xl:w-5/6 2xl:w-4/6">
        <div className=" p-10 md:p-20 flex flex-col gap-y-8 items-center">
          <div className="space-x-1 text-lg">
            <a
              className="text-accent-light underline"
              target="_blank"
              href="https://apiki.com"
            >
              Apiki
            </a>
            <span>/</span>
            <span>Blogs</span>
          </div>
          <h1 className="text-5xl font-bold">Blogs</h1>
          <p className="text-center text-3xl">
            O que você quer saber
            <br />
            <span className="text-accent-light">sobre WordPress?</span>
          </p>
          <div className="relative w-full sm:w-3/5 mx-auto">
            <input
              type="text"
              placeholder="Buscar"
              className="rounded-full shadow-md px-14 bg-secondary h-16 w-full"
            />
            <i className="SearchIcon size-8 absolute left-4 top-1/2 -translate-y-1/2"></i>
          </div>
        </div>
        <section className=" hidden sm:block">
          <h2 className="text-2xl text-center">Categorias de Artigos</h2>
          <div className="mt-12 flex flex-col justify-center">
            <Categories />
          </div>
        </section>
        <section className=" p-4 sm:p-8 md:p-12 mt-14">
          <article className="size-full bg-secondary relative rounded-3xl overflow-hidden shadow-lg shadow-black/30 px-8 py-4 sm:px-12 sm:py-6 md:px-16 md:py-12 xl:px-24 xl:py-16">
            <div className="h-40 md:h-56 lg:h-72 absolute -translate-x-1/3 -translate-y-1/3 left-0 top-0">
              <Image
                src="logo/logo.svg"
                className="object-cover"
                alt="apiki blogs logo"
                fill
              />
            </div>

            <div className="relative items-center flex gap-y-6 lg:gap-y-12 flex-col lg:flex-row z-20">
              <p className=" text-2xl  text-center lg:text-left lg:text-3xl xl:text-4xl text-heading font-bold leading-8 md:leading-[3.1rem] xl:leading-[3.1rem]">
                Construa seu site{" "}
                <span className="text-accent-light">WordPress sob medida</span>{" "}
                com os maiores especialistas em WordPress da America Latina
              </p>
              <a
                target="_blank"
                href="https://apiki.com/"
                className="py-4 h-min lg:ml-6 text-const-dark min-w-max px-6 hover:bg-accent-dark transition-colors shadow-lg text-xl bg-accent-light rounded-full"
              >
                Conheça a Apiki
              </a>
            </div>
          </article>
        </section>
      </section>

      <section className="py-24">
        <LatestArticles
          initialArticles={articles.data}
          totalPages={articles.totalPages}
        />
      </section>
    </div>
  );
}
