import { ArticleType } from "@/global";
import DateFormatter from "@/utils/DateFormatter";
import { ArticleTransform } from "@/utils/Transforms";
import { Metadata } from "next";
import Image from "next/image";
type PageParams = {
  slug: string;
};
export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { slug } = await params;

  if (!slug) {
    return {
      title: "Article Not Found",
      description: "The requested article could not be found.",
    };
  }

  const response = await fetch(
    `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${slug}`
  );
  const data = await response.json();
  if (!data || data.length === 0) {
    return {
      title: "Article Not Found",
      description: "The requested article could not be found.",
    };
  }

  const article: ArticleType = ArticleTransform(data[0]);

  return {
    title: article.title,
    description: article.excerpt,
    robots: "index, follow",
    authors: [{ name: article.author }],
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      url: `https://blog.apiki.com/${slug}`,
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },

    alternates: {
      canonical: `https://blog.apiki.com/${slug}`,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { slug } = await params;

  async function getArticleBySlug() {
    const response = await fetch(
      `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${slug}`
    );
    const data = await response.json();
    return ArticleTransform(data[0]);
  }
  const article: ArticleType = await getArticleBySlug();
  return (
    <main className="animate-fade">
      <div className="p-2 sm:p-4 md:p-6 lg:p-12">
        <div className=" w-full xl:w-4/6 mx-auto">
          <article className=" group shadow-md md:rounded-xl overflow-hidden relative">
            <div className="">
              <Image
                src={article.image}
                className="w-full group-hover:blur-sm rounded-xl md:rounded-none group-hover:brightness-75 transition duration-300 aspect-[1.7/1]"
                alt={article.title}
                width={1920}
                height={1080}
                loading="lazy"
              />
              <div className="absolute hidden md:block inset-0 bg-gradient-radial opacity-85 pointer-events-none"></div>
            </div>

            <div className="rounded-xl w-full md:w-5/6 bg-secondary shadow-md md:bg-transparent md:shadow-none lg:w-4/5 2xl:w-3/5 p-2.5 sm:p-6 mt-2.5 sm:mt-4 md:mt-0 md:absolute top-0 left-0">
              <ul className="flex flex-wrap text-xs 2xl:text-sm space-x-0.5 text-body font-light items-center">
                <li>
                  <a
                    target="_blank"
                    className="text-nowrap"
                    href="https://blog.apiki.com/"
                  >
                    Início
                  </a>
                </li>
                <li>
                  <i className="ArrowIcon text-body size-3.5 block -rotate-90"></i>
                </li>
                <li className="text-nowrap">{article.category}</li>
                <li>
                  <i className="ArrowIcon text-body size-3.5 block -rotate-90"></i>
                </li>
                <li>{article.title}</li>
              </ul>

              <h1 className="text-xl md:text-2xl lg:text-3xl 2xl:text-5xl leading-5 md:leading-7 lg:leading-9 2xl:leading-[3.6rem] font-bold mt-4">
                {article.title}
              </h1>
              <p className="text-sm lg:text-base 2xl:text-lg mt-2 lg:mt-3.5 xl:mt-5 text-justify">
                {article.excerpt}
              </p>
              <div className="flex items-center mt-8">
                {article.authorAvatar ? (
                  <Image
                    src={article.authorAvatar}
                    className="rounded-full size-8 2xl:size-9"
                    alt={article.author}
                    width={32}
                    height={32}
                    loading="lazy"
                  />
                ) : (
                  <i className="UserIcon -mr-0.5 size-8 2xl:size-9"></i>
                )}

                <span className=" ml-2 2xl:ml-3 text-xs 2xl:text-sm">
                  Escrito Por {article.author} em{" "}
                  {DateFormatter(article.createdAt, false)} * {article.readTime}{" "}
                  de leitura
                </span>
              </div>
            </div>
          </article>
          <section className=" py-3 px-3 mt-2 sm:my-6 md:my-12 rounded-lg bg-secondary shadow-md">
            <a
              className="flex items-center"
              href="https://blog.apiki.com/desenvolvimento/"
            >
              <span className=" size-7 2xl:size-8 shadow-lg shadow-red-500/40 bg-red-500 rounded-full flex justify-center items-center">
                <i className="CodeIcon size-5"></i>
              </span>
              <span className=" text-xs 2xl:text-sm ml-2">
                Desenvolvimento WordPress
              </span>
            </a>
          </section>

          <section className="grid grid-cols-12 mt-9 sm:relative">
            <aside className=" order-2 sm:order-1 sm:mt-0 mt-6 col-span-12 sm:col-span-1 sm:h-96 static sm:sticky left-0 bottom-0 sm:top-28 flex flex-row sm:flex-col lg:items-center justify-center">
              <ul className="sm:space-y-1.5 space-x-1.5 sm:space-x-0 flex items-center sm:block sm:py-2 md:p-2">
                <li className="relative group">
                  <a
                    className=" size-11 group hover:scale-95 flex shadow-md justify-center items-center rounded-xl bg-secondary transition-colors"
                    href="#"
                  >
                    <i className="FacebookIcon group-hover:text-blue-500 transition-colors size-7"></i>
                  </a>
                  <span className="hidden sm:inline-block group-hover:scale-100 group-hover:opacity-100 w-max opacity-0 scale-50 transition-all origin-left bg-tertiary absolute rounded-md left-16 top-1/2 -translate-y-1/2 py-1 px-3 h-fit">
                    <span className="block text-sm 2xl:text-base text-center">
                      Facebook
                    </span>
                    <i className="Arrow2Icon absolute bg-tertiary -translate-x-1/2 left-0.5 top-1/2 -translate-y-1/2 size-11"></i>
                  </span>
                </li>

                <li className="relative group">
                  <a
                    className=" rounded-xl group hover:scale-95  shadow-md pb-1 bg-secondary size-11 inline-flex justify-center items-center transition-colors"
                    href="#"
                  >
                    <i className="WhatsappIcon group-hover:text-green-500 transition-colors size-7 mt-1"></i>
                  </a>
                  <span className=" group-hover:scale-100 group-hover:opacity-100 w-max opacity-0 scale-50 transition-all origin-left bg-tertiary hidden sm:inline-block absolute rounded-md left-16 top-1/2 -translate-y-1/2 py-1 px-3 h-fit">
                    <span className="block text-sm 2xl:text-base text-center">
                      WhatsApp
                    </span>
                    <i className="Arrow2Icon absolute bg-tertiary -translate-x-1/2 left-0.5 top-1/2 -translate-y-1/2 size-11"></i>
                  </span>
                </li>
                <li className="relative group">
                  <a
                    className=" group rounded-xl hover:scale-95  shadow-md pb-1 bg-secondary size-11 inline-flex justify-center items-center transition-colors"
                    href="#"
                  >
                    <i className="LinkedinIcon group-hover:text-sky-500 transition-colors size-[1.45rem]"></i>
                  </a>
                  <span className=" group-hover:scale-100 group-hover:opacity-100 w-max opacity-0 scale-50 transition-all origin-left bg-tertiary hidden sm:inline-block absolute rounded-md left-16 top-1/2 -translate-y-1/2 py-1 px-3 h-fit">
                    <span className="block text-sm 2xl:text-base text-center">
                      LinkedIn
                    </span>
                    <i className="Arrow2Icon absolute bg-tertiary -translate-x-1/2 left-0.5 top-1/2 -translate-y-1/2 size-11"></i>
                  </span>
                </li>
                <li className="relative group">
                  <a
                    className=" rounded-xl hover:scale-95  shadow-md group pb-1 bg-secondary size-11 inline-flex justify-center items-center transition-colors"
                    href="#"
                  >
                    <i className="TwitterIcon group-hover:text-gray-500 transition-colors size-6 mt-1"></i>
                  </a>
                  <span className=" group-hover:scale-100 group-hover:opacity-100 w-max opacity-0 scale-50 transition-all origin-left bg-tertiary hidden sm:inline-block absolute rounded-md left-16 top-1/2 -translate-y-1/2 py-1 px-3 h-fit">
                    <span className="block text-sm 2xl:text-base text-center">
                      Twitter-X
                    </span>
                    <i className="Arrow2Icon absolute bg-tertiary -translate-x-1/2 left-0.5 top-1/2 -translate-y-1/2 size-11"></i>
                  </span>
                </li>
              </ul>
              <span className="sm:min-h-px sm:h-0 h-12 min-w-px sm:w-12 rounded-sm my-1 mx-1.5 sm:mx-0 rotate-0 2xl:my-2 lg:mx-auto inline-block opacity-40 bg-placeholder"></span>
              <ul className="sm:space-y-1.5 space-x-1.5 sm:space-x-0 sm:py-2 flex items-center sm:block md:p-2">
                <li className="relative group">
                  <a
                    className=" size-11 group hover:scale-95 flex shadow-md justify-center items-center rounded-xl bg-secondary transition-colors"
                    href="#"
                  >
                    <i className="HeartOutlineIcon group-hover:text-red-500 transition-colors size-6"></i>
                  </a>
                  <span className=" group-hover:scale-100 group-hover:opacity-100 w-max opacity-0 scale-50 transition-all origin-left bg-tertiary hidden sm:inline-block absolute rounded-md left-16 top-1/2 -translate-y-1/2 py-1 px-3 h-fit">
                    <span className="block text-sm 2xl:text-base text-center">
                      Like
                    </span>
                    <i className="Arrow2Icon absolute bg-tertiary -translate-x-1/2 left-0.5 top-1/2 -translate-y-1/2 size-11"></i>
                  </span>
                </li>

                <li className="relative group">
                  <a
                    className=" rounded-xl group hover:scale-95  shadow-md pb-1 bg-secondary size-11 inline-flex justify-center items-center transition-colors"
                    href="#commentInputId"
                  >
                    <i className="CommentIcon group-hover:text-sky-500 transition-colors size-[1.6rem] mt-1.5"></i>
                  </a>
                  <span className=" group-hover:scale-100 group-hover:opacity-100 w-max opacity-0 scale-50 transition-all origin-left bg-tertiary hidden sm:inline-block absolute rounded-md left-16 top-1/2 -translate-y-1/2 py-1 px-3 h-fit">
                    <span className="block text-sm 2xl:text-base text-center">
                      Comment
                    </span>
                    <i className="Arrow2Icon absolute bg-tertiary -translate-x-1/2 left-0.5 top-1/2 -translate-y-1/2 size-11"></i>
                  </span>
                </li>
              </ul>
            </aside>
            <article className=" order-1 col-span-12 p-2.5 sm:p-0 sm:col-span-11">
              <div
                className="render-content"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </article>
            <div className="order-3 col-start-1 mb-12 col-span-12 p-2.5 sm:p-0 sm:col-start-2 sm:col-span-11">
              <span className="h-px bg-placeholder my-4 sm:my-16 block rounded-sm"></span>
              <div className="mt-6">
                <span className=" text-xl 2xl:text-2xl font-bold">
                  3 Comentarios
                </span>
                <ul className="mt-6 space-y-4">
                  <li className="p-4 lg:p-6 flex flex-col bg-secondary rounded-lg">
                    <div>
                      <div className=" flex items-center ">
                        <Image
                          className="size-12 2xl:size-14 rounded-full"
                          src="/user.webp"
                          alt="profileImage"
                          width={48}
                          height={48}
                          loading="lazy"
                        />
                        <div className="flex items-center flex-col ml-3.5">
                          <span className="block text-left w-full text-sm 2xl:text-base">
                            Adriana Lopez
                          </span>
                          <span className="text-xs 2xl:text-sm text-placeholder">
                            em 21 de abril de 2020
                          </span>
                        </div>
                      </div>
                      <div className="px-1 md:px-14 mt-3 xl:mt-2">
                        <p className="text-sm 2xl:text-base">
                          Artigo útil, legal, Lorem ipsum dolor sit amet
                          consectetur, adipisicing elit. Porro sunt obcaecati
                          quas a beatae, in, laborum totam commodi numquam
                          perferendis officia maxime ducimus aspernatur delectus
                          expedita itaque nostrum doloremque consequatur!
                        </p>
                      </div>
                      <div className="flex justify-end mt-4 xl:mt-6">
                        <button className="text-accent-light text-sm 2xl:text-base px-3 py-2 rounded-lg bg-tertiary hover:bg-quaternary shadow-md active:bg-tertiary transition-colors">
                          responder
                        </button>
                      </div>
                    </div>
                    <div className="p-3.5 md:p-4 lg:p-6 bg-tertiary rounded-lg mt-4 sm:mt-5 md:mt-6 lg:mt-8 shadow-md">
                      <div>
                        <div className="flex items-center ">
                          <Image
                            className="size-12 2xl:size-14 rounded-full"
                            src={article.authorAvatar}
                            alt="userImage"
                            width={48}
                            height={48}
                            loading="lazy"
                          />
                          <div className="flex items-center flex-col ml-3.5">
                            <span className="block text-left w-full text-sm 2xl:text-base">
                              Elias Pascoal
                            </span>
                            <span className="text-xs 2xl:text-sm text-placeholder">
                              em 22 de abril de 2020
                            </span>
                          </div>
                        </div>
                        <div className="px-1 md:px-14 mt-3 xl:mt-2">
                          <p className="text-sm 2xl:text-base">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Porro sunt obcaecati quas a beatae, in,
                            laborum totam commodi numquam perferendis officia
                            maxime ducimus aspernatur delectus expedita itaque
                            nostrum doloremque consequatur!
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="p-4 lg:p-6 flex bg-secondary rounded-lg">
                    <div>
                      <div className="flex items-center ">
                        <Image
                          className="size-12 2xl:size-14 rounded-full"
                          src="/user.webp"
                          alt="userImage"
                          width={48}
                          height={48}
                          loading="lazy"
                        />
                        <div className="flex items-center flex-col ml-3.5">
                          <span className="block text-left w-full text-sm 2xl:text-base">
                            Adriana Lopez
                          </span>
                          <span className="text-xs 2xl:text-sm text-placeholder">
                            em 24 de abril de 2020
                          </span>
                        </div>
                      </div>
                      <div className="px-1 md:px-14 mt-3 xl:mt-2">
                        <p className="text-sm 2xl:text-base">
                          Artigo útil, legal, Lorem ipsum dolor sit amet
                          consectetur, adipisicing elit. Porro sunt obcaecati
                          quas a beatae, in, laborum totam commodi numquam
                          perferendis officia maxime ducimus aspernatur delectus
                          expedita itaque nostrum doloremque consequatur!
                        </p>
                      </div>
                      <div className="flex justify-end mt-4 xl:mt-6">
                        <button className="text-accent-light text-sm 2xl:text-base px-3 py-2 rounded-lg bg-tertiary hover:bg-quaternary shadow-md active:bg-tertiary transition-colors">
                          responder
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="mt-12 w-full md:w-1/2 flex flex-col">
                <span className="text-xl 2xl:text-2xl text-heading font-bold">
                  Deixe um comentário
                </span>
                <span className="text-lg 2xl:text-xl text-body opacity-85 font-semibold">
                  Escreva sua opinião sobre este artigo
                </span>
                <textarea
                  className="bg-secondary outline-none h-44 mt-2 focus:ring-2 placeholder:text-placeholder text-body ring-accent-light transition rounded-md p-3"
                  name=""
                  id="commentInputId"
                ></textarea>
                <button className="py-3 2xl:text-base text-sm font-semibold transition-colors mt-3 lg:mt-4 px-3 bg-accent-light hover:bg-accent-dark rounded-md shadow-md text-const-dark">
                  Enviar comentário
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
