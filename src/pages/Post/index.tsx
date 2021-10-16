/* eslint-disable react/no-danger */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Loader } from "~/components/Loader";
import { getPost } from "~/services/Posts";
import { IAuthor, IPost } from "~/services/Posts/types";
import { generateKey } from "~/utils/Key";

import {
    Author,
    AuthorContainer,
    Comment,
    CommentContainer,
    CommentText,
    Container,
    Content,
    Description,
    Header,
    NoComment,
    Title,
} from "./style";
import { IPostProps } from "./types";

const Post = ({ match }: IPostProps) => {
    const [authors, setAuthors] = useState<IAuthor[]>([]);
    const [post, setPost] = useState<IPost>();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        window.scrollTo({ top: 0 });

        const getPostData = async (slug: string) => {
            setLoading(true);
            const result = await getPost(slug);
            const post = result.data[0] as IPost;
            if (post._embedded.author[0].name) {
                const authors = post._embedded.author;
                setAuthors(authors);
            }

            setPost(post);
            setLoading(false);
        };

        getPostData(match.params.slug);
    }, []);

    return (
        <>
            {loading && <Loader />}
            {post ? (
                <Container>
                    <Header>
                        <Title>{post.title.rendered}</Title>

                        <Description
                            dangerouslySetInnerHTML={{
                                __html: post.excerpt.rendered,
                            }}
                        />

                        {authors && (
                            <AuthorContainer>
                                {authors.map((author) => (
                                    <Link
                                        to={`/author/${author.id}`}
                                        title={author.description}
                                        key={generateKey()}
                                    >
                                        <Author>
                                            <img
                                                src={author.avatar_urls["96"]}
                                                alt={author.name}
                                            />

                                            {author.name}
                                        </Author>
                                    </Link>
                                ))}
                            </AuthorContainer>
                        )}
                    </Header>

                    <Content
                        dangerouslySetInnerHTML={{
                            __html: post.content.rendered as string,
                        }}
                    />

                    {post._embedded.replies ? (
                        <CommentContainer>
                            {post._embedded.replies[0]
                                .sort((a, b) => (a.date > b.date ? 1 : -1))
                                .map((comment) => (
                                    <Comment key={generateKey()}>
                                        <img
                                            src={
                                                comment.author_avatar_urls["96"]
                                            }
                                            height="96"
                                            width="96"
                                            alt={comment.author_name}
                                        />

                                        <CommentText>
                                            <p>
                                                <b>{comment.author_name}</b>{" "}
                                                diz:
                                            </p>
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html: comment.content
                                                        .rendered,
                                                }}
                                            />
                                        </CommentText>
                                    </Comment>
                                ))}
                        </CommentContainer>
                    ) : (
                        <NoComment>
                            <p>Poxa, não tem comentários ainda!</p>
                        </NoComment>
                    )}
                </Container>
            ) : (
                <></>
            )}
        </>
    );
};

export { Post };
