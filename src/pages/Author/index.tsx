/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from "react";

import { Loader } from "~/components/Loader";
import { PostViewer } from "~/components/PostViewer";
import { getAllAuthorPosts } from "~/services/Posts";
import { IAuthor, IPost } from "~/services/Posts/types";

import { Avatar, Container, Name } from "./style";
import { IAuthorProps } from "./types";

const Author = ({
    match: {
        params: { author },
    },
}: IAuthorProps) => {
    const [authorData, setAuthorData] = useState<IAuthor>();
    const [currentPage, setCurrentPage] = useState(1);
    const [firstPost, setFirstPost] = useState<IPost>();
    const [posts, setPosts] = useState<IPost[]>([]);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(false);

    const handleOnClick = async () => {
        setLoading(true);
        try {
            if (currentPage < totalPages) {
                const result = await getAllAuthorPosts(author, currentPage + 1);
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
                const result = await getAllAuthorPosts(author);
                const posts = result.data as IPost[];
                const firstPost = posts.reverse().pop();
                const authorData = firstPost?._embedded.author.find(
                    // eslint-disable-next-line eqeqeq
                    (authorData) => authorData.id == author
                );

                setAuthorData(authorData);
                setFirstPost(firstPost);
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
            <Container>
                <Avatar
                    src={authorData?.avatar_urls["96"]}
                    alt={authorData?.name}
                />

                <Name>{authorData?.name}</Name>

                <p>{authorData?.description}</p>
            </Container>
            <PostViewer
                firstPost={firstPost}
                posts={posts}
                handleOnClick={handleOnClick}
            />
        </>
    );
};

export { Author };
