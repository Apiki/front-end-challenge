import React from "react";
import styles from "./PostCard.module.css";
import { Link } from "react-router-dom";

const PostCard = ({ id, title, slug, image, avatar, author }) => {
	return (
		<div className={styles.card}>
			<Link className={styles.imageHolder} to={`post/${slug}`}>
				<div
					className={styles.scaleDiv}
					style={{ backgroundImage: `url(${image})` }}
				></div>
			</Link>
			<Link className={styles.wrapper} to={`post/${slug}`}>
				<h3 className={styles.title}>{title}</h3>
			</Link>

			<div className={styles.wrapper}>
				<img className={styles.avatar} src={avatar} alt="" />
				<span className={styles.author}>{author}</span>
			</div>
		</div>
	);
};

export default PostCard;
