import "./style.css";
import { useState, useEffect } from "react";
import getPost from "../../../services/getPost";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

//import CommentBox from "../../CommentBox";

function PostsCards() {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const { slug } = useParams();

  useEffect(() => {
    async function loadData() {
      const data = await getPost(setPost, slug);
      if (data) {
        console.log(data);
        console.log(post);
        setLoading(true);
      }
    }

    loadData();
  }, []);

  function handleDate(date) {
    const formattedDate = new Date(date).toLocaleDateString("pt-BR");
    return formattedDate;
  }

  return (
    <>
      {loading && (
        <div className="main-content">
          <div className="post-img">
            <img
              src={post[0]._embedded["wp:featuredmedia"][0].source_url}
              alt="Imagem do Post"
            />
          </div>
          <h2>{post[0].title.rendered}</h2>
          <div className="post-info">
            <span>{handleDate(post[0].date)}</span>•
            <span>
              {post[0].yoast_head_json.twitter_misc["Est. tempo de leitura"]} de
              leitura
            </span>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: post[0].content.rendered }}
            className="post-content"
          ></div>

          <h4>Escrito por: {post[0]._embedded.author[0].name}</h4>
          <footer>
            <a href="#">↟ Voltar ao início</a>
            <Link to={"/"}>↻ Voltar à página principal</Link>
          </footer>
        </div>
      )}
      {/* <CommentBox></CommentBox> */}
    </>
  );
}

export default PostsCards;
