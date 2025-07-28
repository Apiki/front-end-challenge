"use client";

import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import { fetchPostBySlug } from "@/lib/services/api";
import { formatDate } from "@/lib/utils/formatDate";
import { calculateReadingTime } from "@/lib/utils/calculateReadingTime";

import { ArrowLeft, Calendar, Clock, User } from "lucide-react";

import Image from "next/image";
import Loading from "@/app/loading";
import MyButton from "@/components/MyButton";

export default function PostPage() {
  const params = useParams();
  const [post, setPost] = useState(null);
  const contentRef = useRef(null);

  const featuredImage = post && post._embedded?.["wp:featuredmedia"]?.[0];
  const imageUrl = featuredImage?.source_url;
  const imageAlt = featuredImage?.alt_text || post?.title?.rendered;
  const author = post && post._embedded?.author?.[0];

  useEffect(() => {
    if (params.slug) {
      loadPost(params.slug);
    }
  }, [params.slug]);

  // faz com que os links internos do conteúdo da API tenham a prop target="_blank"
  useEffect(() => {
    if (!contentRef.current) return;

    const links = contentRef.current.querySelectorAll("a");
    links.forEach((link) => {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    });
  }, [post]);

  const loadPost = async (slug) => {
    try {
      const postData = await fetchPostBySlug(slug);
      // console.log(postData);

      if (!postData) {
        return;
      }

      setPost(postData);
    } catch (err) {
      console.error("Erro ao carregar o post: ", err);
    }
  };

  return (
    <>
      {/* esta verificação do post é obrigatória aqui */}
      {post ? (
        <div className="flex flex-col max-w-full lg:max-w-[70%] mx-auto">
          <article>
            <div className="mb-6">
              <h1
                className="text-xl lg:text-4xl font-bold text-primary mb-2"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />

              <div className="flex flex-wrap gap-4 text-muted-foreground text-xs sm:text-sm mb-4">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  {formatDate(post.date)} de fevereiro de 2025
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  {calculateReadingTime(post.content.rendered)} min de leitura
                </div>

                {author && (
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    {author.name}
                  </div>
                )}
              </div>
            </div>

            <Image
              src={imageUrl}
              title={imageAlt}
              alt={imageAlt}
              width={800}
              height={400}
              className="mx-auto mb-6 rounded-lg object-contain"
              priority
              loading="eager"
              onError={(e) => {
                e.target.src =
                  "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop";
              }}
            />

            {/* 
              - Abaixo estilizei o conteúdo externo de cada post através de seletores do TailwindCSS (cada caso é um caso)
              - Se houver mais elementos que não foram estilizados precisamos analizar isto 
            */}
            <div
              ref={contentRef}
              className={`text-foreground text-xs sm:text-base mb-4 [&_div]:!w-full [&_h2]:text-primary [&_h2]:text-lg lg:[&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mb-2 [&_p]:mb-4 [&_p]:leading-relaxed [&_a]:text-primary [&_img]:w-full [&_img]:mb-4 [&_img]:rounded-lg [&_table]:mb-4 [&_table]:rounded-md [&_table]:overflow-hidden [&_th]:p-2 [&_th]:border-2 [&_th]:border-primary [&_td]:p-2 [&_td]:border-2 [&_td]:border-primary [&_td]:text-center [&_td]:mb-4 [&_iframe]:w-full [&_iframe]:h-[400px] [&_iframe]:rounded-md`}
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
          </article>

          <div className="bg-background sticky self-end bottom-2">
            <MyButton url="/">
              <ArrowLeft size={16} />
              Voltar para o início
            </MyButton>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
