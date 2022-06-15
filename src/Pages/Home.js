import React from "react";
import Posts from "../Components/Posts";
import styles from "./Home.module.css";
import HeroSection from "../Components/HeroSection";

const Home = () => {
	const [pages, setPages] = React.useState([1]);
	const [totalPages, setTotalPages] = React.useState(0);

	function handleClick() {
		setPages((pages) => [...pages, pages.length + 1]);
	}

	return (
		<section>
			<HeroSection>
				<h1>Blog</h1>
			</HeroSection>
			{pages.map((page, i) => (
				<Posts
					key={i}
					page={page}
					setPages={setPages}
					setTotalPages={setTotalPages}
				/>
			))}
			{pages.length !== totalPages ? (
				<button className={styles.button} onClick={handleClick}>
					Carregar mais posts!
				</button>
			) : (
				<p className={styles.overPosts}>Não há mais posts!</p>
			)}
		</section>
	);
};

export default Home;
