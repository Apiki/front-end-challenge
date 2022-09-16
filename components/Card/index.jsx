import Styles from "../../styles/card.module.css";
import { useEffect } from "react";
import Link from "next/link";
const Card = (props) => {
  return (
    <>
      {props.cards?._embedded["wp:featuredmedia"] && (
        <>
          {props.cards._embedded.author[0].description && (
            <Link href={`blog/${props.cards.slug}`}>
              <div className={Styles.card}>
                <img
                  className={Styles.card__image}
                  src={
                    props.cards?._embedded["wp:featuredmedia"][0]?.source_url
                  }
                  alt=""
                />
                <p className={Styles.card__title}>
                  {props.cards._embedded[
                    "wp:featuredmedia"
                  ][0].title.rendered.replace(/-/g, " ")}
                </p>
                <div className={Styles.card__content__description}>
                  <p className={Styles.card__description}>
                    {props.cards._embedded.author[0].description}
                  </p>
                </div>
              </div>
            </Link>
          )}
        </>
      )}
    </>
  );
};

export default Card;
