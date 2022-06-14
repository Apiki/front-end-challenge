import React from "react";
import PostCard from "./PostCard";
import styles from "./Posts.module.css";
import { POSTS_GET } from "../api";
import useFetch from "../Hooks/useFetch";

const Posts = ({ page, setTotalPages }) => {
	const { data, loading, error, request } = useFetch();

	React.useEffect(() => {
		async function getPosts() {
			const { url, options } = POSTS_GET(page);

			const { response, json } = await request(url, options);

			setTotalPages(Number(response.headers.get("x-wp-totalpages")));
		}

		getPosts();
	}, [page]);

	if (data)
		return (
			<div className={styles.postsGrid}>
				{data.map((post) => (
					<PostCard
						key={post.id}
						title={post.title.rendered}
						slug={post.slug}
						image={
							post._embedded["wp:featuredmedia"]
								? post._embedded["wp:featuredmedia"][0].source_url
								: ""
						}
						author={post._embedded.author[0].name || "Autor Desconhecido"}
						avatar={
							post._embedded.author[0].name
								? post._embedded.author[0].avatar_urls[96]
								: "https://palmbayprep.org/wp-content/uploads/2015/09/user-icon-placeholder.png"
						}
					/>
				))}
			</div>
		);
	else return null;
};

export default Posts;
