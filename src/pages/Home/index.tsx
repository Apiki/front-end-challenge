/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from "react";

import { Loader } from "~/components/Loader";
import { PostViewer } from "~/components/PostViewer";
import { getAllPosts } from "~/services/Posts";
import { IPost } from "~/services/Posts/types";

const Home = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [firstPost, setFirstPost] = useState<IPost>();
    const [posts, setPosts] = useState<IPost[]>([]);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(false);

    const handleOnClick = async () => {
        setLoading(true);
        try {
            if (currentPage < totalPages) {
                const result = await getAllPosts(currentPage + 1);
                const newPosts: IPost[] = [];

                Object.assign(newPosts, posts);

                (result.data as IPost[]).forEach((post) => newPosts.push(post));

                setCurrentPage(currentPage + 1);
                setPosts(newPosts);
            }
        } catch (e) {
            console.log(
                "Não foi possível carregar os posts. Tente novamente mais tarde"
            );
        }
        setLoading(false);
    };

    useEffect(() => {
        const getPosts = async () => {
            setLoading(true);
            try {
                setLoading(true);
                const result = await getAllPosts();
                const posts = result.data as IPost[];
                setFirstPost(posts.reverse().pop());
                setPosts(posts.reverse());
                setTotalPages(parseInt(result.headers["x-wp-totalpages"], 10));
            } catch (e) {
                console.log(
                    "Não foi possível carregar os posts. Tente novamente mais tarde"
                );
            }
            setLoading(false);
        };

        getPosts();
    }, []);

    return (
        <>
            {loading && <Loader />}
            <PostViewer
                firstPost={firstPost}
                posts={posts}
                handleOnClick={handleOnClick}
            />
        </>
    );
};

export { Home };
