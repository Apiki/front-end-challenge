import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "./styles.module.scss";

interface Props {
  postList: {
    title: string;
    slug: string;
    id: number;
    _embedded: string;
    modified_gmt: string;
  };
}

export default function Posts() {
  const [post, setPost] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [postPage, setPostPage] = useState(10);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${page}`
    )
      .then((response) => {
        setTotalPage(response.headers.get("X-WP-TotalPages") / postPage);
        return response.json();
      })
      .then((data) => {
        setPost([...post, ...data]);
        setLoading(false);
      });
  }, [page]);

  return (
    <>
      <Head>
        <title>Posts | Apiki</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          {post.map((item) => {
            return (
              <>
                <Link key={item.id} href={`/posts/${item.slug}`}>
                  <a>
                    <img
                      src={item._embedded["wp:featuredmedia"]?.map(
                        (url: { source_url: any }) => url.source_url
                      )}
                      alt={item.title.rendered}
                      key={item.id}
                    />
                    <time>
                      {new Date(item.modified_gmt)?.toLocaleDateString(
                        "pt-BR",
                        {
                          day: "2-digit",
                          month: "long",
                          year: "numeric",
                        }
                      )}
                    </time>
                    <strong>{item.title.rendered}</strong>
                    <p>{item.excerpt.rendered.replace(/(<([^>]+)>)/gi, "")}</p>
                  </a>
                </Link>
              </>
            );
          })}
          <button
            onClick={() => setPage(page + 1)}
            
          >
            Carregar mais ...
          </button>
        </div>
      </main>
    </>
  );
}

