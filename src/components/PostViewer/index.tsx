/* eslint-disable no-underscore-dangle */
import React from "react";
import { Link } from "react-router-dom";

import { generateKey } from "~/utils/Key";

import { Card } from "../Card";
import { Container, GridContainer, MoreButton } from "./style";
import { IPostViewer } from "./types";

const PostViewer = ({ firstPost, posts, handleOnClick }: IPostViewer) => {
    return (
        <Container>
            {firstPost && (
                <Link to={`/post/${firstPost.slug}`}>
                    <Card
                        date={firstPost.date}
                        embedded={{ ...firstPost._embedded }}
                        excerpt={firstPost.excerpt.rendered}
                        title={firstPost.title.rendered}
                        first
                    />
                </Link>
            )}

            <GridContainer>
                {posts &&
                    posts.map((post) => (
                        <Link to={`/post/${post.slug}`} key={generateKey()}>
                            <Card
                                date={post.date}
                                embedded={{ ...post._embedded }}
                                excerpt={post.excerpt.rendered}
                                title={post.title.rendered}
                            />
                        </Link>
                    ))}
            </GridContainer>

            <MoreButton type="button" onClick={handleOnClick}>
                Mais
            </MoreButton>
        </Container>
    );
};

export { PostViewer };
