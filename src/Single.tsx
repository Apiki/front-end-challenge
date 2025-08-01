import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Single() {
  const { slug } = useParams();
  const [post, setPost] = useState();
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      const res = await fetch(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${slug}`);
      const data = await res.json();
      setPost(data[0]);
      setCarregando(false);
    }
    fetchPost();
  }, [slug]);

  if (!post) return <p>Nenhum post encontrado!</p>;

return (
  <div className="post">
    <div className="post__container">
      <img className="post__image" src={post._embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url} alt="Imagem do post" title="Imagem do post"/>
      <h1 className="post__title" dangerouslySetInnerHTML={{ __html: post.title.rendered }}/>
      <div className="post__content" dangerouslySetInnerHTML={{ __html: post.content.rendered }}/>
    </div>
  </div>
);

}

export default Single;
