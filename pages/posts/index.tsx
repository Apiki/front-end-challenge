import React from "react";
import { GetStaticProps } from "next";

import * as S from "./styles";
import Card from "../../components/Card";
import { BASE_URL } from "../../utils/constants";

const Posts = ({posts}) => {
    return ( 
        <S.Container>
            {
                posts.map((post) => (
                    <Card key={post.id} post={post} />
                ))
            }
        </S.Container>
    );
};

export const getStaticProps: GetStaticProps = async() => {
    const data = await fetch(`${BASE_URL}&categories=518`);

    const posts = await data.json();

    return {
      props: { posts }
    };
};

export default Posts;
