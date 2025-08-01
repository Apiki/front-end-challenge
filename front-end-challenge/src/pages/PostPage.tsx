import { lazy, Suspense, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";

import AsyncFallback from "../components/layout/AsyncFallback";
import FallbackSpinner from "../components/layout/FallbackSpinner";
import Image from "../components/ui/Img";
import { usePost } from "../hooks/usePost";
import { extractYoastDescription } from "../utils/generics/extractYoastDescription";
import { formatDateTimeWithRelative } from "../utils/generics/formatDate";
import stripCaptionWidth from "../utils/generics/RemoveStyle";

const ProfileCard = lazy(() => import("../components/layout/ProfileCard"));

const PostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: post, isLoading, isError } = usePost(slug || "");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AsyncFallback isLoading={isLoading} isError={isError || !post}>
      <main className="flex flex-col items-center">
        <Suspense fallback={<FallbackSpinner />}>
          <article className="post-detail mx-auto max-w-7xl">
            <Link
              to="/"
              className="flex items-center gap-2 text-primary hover:underline underline-offset-3"
            >
              <FaArrowLeft size={14} /> Voltar
            </Link>

            <div className="relative">
              <Image
                className="post-detail__img object-cover my-4 rounded"
                src={post?.mediaUrl || ""}
                alt={post?.title || "Imagem do post"}
              />
              <header className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <h1
                  className="post-detail__title text-md sm:text-3xl font-bold mb-2"
                  dangerouslySetInnerHTML={{
                    __html: post?.title || "Nenhum contéudo encontrado",
                  }}
                />
                <p className="text-sm text-gray-600">
                  {formatDateTimeWithRelative(post?.date || "")}
                </p>
              </header>
            </div>

            <div
              className="post-detail__content prose prose-lg"
              dangerouslySetInnerHTML={{
                __html: stripCaptionWidth(post?.content || ""),
              }}
            />
          </article>
        </Suspense>
        <article className="post-detail flex flex-col items-start w-full mt-8">
          <Suspense fallback={<FallbackSpinner />}>
            <ProfileCard
              imageUrl={post?.embedded?.author[0]?.avatar_urls?.["96"] || ""}
              name={post?.embedded?.author[0]?.name || "Autor Desconhecido"}
              description={
                extractYoastDescription(
                  post?.embedded?.author[0]?.yoast_head,
                ) || "Descrição não disponível"
              }
              secundaryDescription={
                post?.embedded?.author[0]?.description ||
                "Nenhum contéudo encontrado"
              }
            />
          </Suspense>
        </article>
      </main>
    </AsyncFallback>
  );
};

export default PostPage;
