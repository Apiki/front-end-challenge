/* eslint-disable no-unused-vars */
import "./internPage.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPostBySlug } from "../../services/api";
import InternBanner from "../../components/InternBanner";
import Loading from "../../components/Loading";
import InternBody from "../../components/InternBody";

const InternPage = () => {
  const params = useParams();
  const [post, setPost] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    getPostBySlug(params.slug)
      .then((post) => {
        setPost(post);
      })
      .catch((err) => {
        setError(err);
      });
  }, [params]);

  return (
    <main className="intern--page">
      {post ? (
        <>
          <InternBanner post={post} />
          <InternBody post={post} />
        </>
      ) : (
        <section className="intern--page__loading">
          <Loading />
        </section>
      )}
    </main>
  );
};

export default InternPage;
