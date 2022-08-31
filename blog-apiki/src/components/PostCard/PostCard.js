import { useNavigate } from "react-router-dom";
import styles from "./PostCard.module.css";
import ButtonCard from "../Button/ButtonCard";

function PostCard(props) {
  const navigate = useNavigate();

  const readPost = (slug) => {
    navigate(`/page/${slug}`);
  };

  return (
    <div className={styles.cardContainer}>
      <p
        className={styles.title}
        dangerouslySetInnerHTML={{
          __html: props.post.title.rendered,
        }}
      ></p>
      <img
        className={styles.image}
        src={props.post._embedded["wp:featuredmedia"]?.[0].source_url}
        alt="example"
      />

      <ButtonCard
        text={"CLIQUE PARA ACESSAR A POSTAGEM"}
        onClickBtn={() => readPost(props.post.slug)}
      ></ButtonCard>
    </div>
  );
}

export default PostCard;
