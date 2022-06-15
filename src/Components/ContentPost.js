import React from "react";
import HeroSection from "./HeroSection";
import styles from "./ContentPost.module.css";

const ContentPost = ({ data }) => {
	const [equalImage, setEqualImage] = React.useState(false);

	React.useEffect(() => {
		if (
			data._embedded["wp:featuredmedia"] &&
			data.content.rendered.includes(
				data._embedded["wp:featuredmedia"][0].source_url
			)
		) {
			setEqualImage(true);
		}
	}, [data]);

	return (
		<section className="animeLeft">
			<HeroSection>
				<h1 className={styles.title}>{data.title.rendered}</h1>
				<p
					className={styles.description}
					dangerouslySetInnerHTML={{ __html: data.excerpt.rendered }}
				></p>
				<div className={styles.wrapper}>
					<img
						className={styles.avatar}
						src={
							data._embedded.author[0].name
								? data._embedded.author[0].avatar_urls[96]
								: "https://palmbayprep.org/wp-content/uploads/2015/09/user-icon-placeholder.png"
						}
						alt="Avatar Profile"
					/>
					<span className={styles.author}>
						{`${
							data._embedded.author[0].name || "Autor Desconhecido"
						} - ${new Date(data.date).toLocaleDateString()}`}
					</span>
				</div>
			</HeroSection>

			<article className={styles.contentWrapper}>
				{!equalImage && (
					<figure className={styles.mainImage}>
						<img
							src={
								data._embedded["wp:featuredmedia"]
									? data._embedded["wp:featuredmedia"][0].source_url
									: ""
							}
							alt=""
							srcSet=""
						/>
					</figure>
				)}
				<div
					className={styles.text}
					dangerouslySetInnerHTML={{ __html: data.content.rendered }}
				></div>
			</article>
		</section>
	);
};

export default ContentPost;
