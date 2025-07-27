import { notFound } from "next/navigation";
import Image from "next/image";
import { getPostBySlug } from "../_actions/getPostBySlug";
import { Navbar } from "@/_components/(header)/Navbar";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import Footer from "@/_components/Footer";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;

  const post = await getPostBySlug(slug);

  if (!post) return notFound();

  const formatted = format(post?.date as string, "dd/MM/yyyy 'às' HH:mm", {
    locale: ptBR,
  });

  return (
    <>
      <div className="container mx-auto flex flex-col gap-4 md:px-0 px-4 mb-4">
        <Navbar />
        <article className="mt-19 flex flex-col gap-4">
          <Image
            src={post._embedded["wp:featuredmedia"][0]?.source_url}
            alt={post.title.rendered}
            width={1200}
            height={630}
            priority
            className="w-full rounded-xl"
          />
          <div className="border-b flex flex-col gap-2 pb-4">
            <div className="flex items-center gap-4 border border-gray-100 p-4 rounded-xl shadow-sm bg-white w-full">
              <Image
                key={slug}
                src={post._embedded.author[0].avatar_urls["96"]}
                alt={post._embedded.author[0].name}
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
              <div className="flex-1">
                <p className="font-semibold text-gray-800">
                  {post._embedded.author[0].name}
                </p>
                <p className="text-sm text-gray-500">
                  Publicado em: {formatted}
                </p>
              </div>
            </div>
            <h2 className="text-3xl font-bold">{post.title.rendered}</h2>
          </div>
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </article>
        <Footer />
      </div>
    </>
  );
}
