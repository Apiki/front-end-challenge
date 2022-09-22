import React, { useEffect, useState } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { Avatar, Box, Image, Stack, Text } from "@chakra-ui/react";
import Head from "next/head";
import { sanitize } from "isomorphic-dompurify";
import parse from "html-react-parser";
import Link from "next/link";

import { BASE_URL, dateFormat } from "../utils/constants";
import Loading from "../components/Loading";
import * as S from "../styles/post"
import axios from "axios";

const Post = ({posts}) => {
    const [loading, setLoading] = useState(true);

    const post = posts[0]

    useEffect(() => {
        if(!post){
            setLoading(true)
        }
        setLoading(false)
    }, [post])

    return (
        <>
            {post.yoast_head ? <Head>{parse(post.yoast_head)}</Head> : null}
            {loading ? <Loading fontSize="3rem" position="absolute" height="5rem" /> :
            <S.Container>
                <S.Title>{post.title.rendered}</S.Title>
                <S.Holder>
                    <Image 
                        src={post._embedded['wp:featuredmedia'][0].source_url} 
                        alt={post._embedded['wp:featuredmedia'][0].alt_text} 
                        height="25rem" 
                        width="45rem"
                    />
                    <span dangerouslySetInnerHTML={{ __html: sanitize(post.excerpt.rendered) }} />
                </S.Holder>
                <S.Content
                    dangerouslySetInnerHTML={{ __html: sanitize(post.content.rendered) }}
                />
                <Box w="100%">
                    <Stack w="80%" justify={"center"} m={6} direction={'row'} spacing={4} align={'center'}>
                        <Link href={"/"} >
                            <a>
                                <Avatar
                                    size={"lg"}
                                    src={post._embedded.author[0].avatar_urls}
                                />
                            </a>
                        </Link>
                        <Stack direction={'column'} spacing={0} fontSize={"2xl"}>
                            <Link href={"/"} >
                                <a>
                                    <Text fontWeight={600}>{post._embedded.author[0].name ?? "Indisponível"}</Text>
                                </a>
                            </Link>
                            <Text color={'gray.500'}>{dateFormat(post.date_gmt) ?? "Indisponível"}</Text>
                        </Stack>
                    </Stack>
                </Box>
            </S.Container>
            }
        </>
    )
}

export const getStaticProps: GetStaticProps = async(context) => {
    const { params } = context
    const data = await axios(`${BASE_URL}&slug=${params.slug}`)

    const posts = await data.data;

    return {
      props: { posts }, 
      revalidate: 60 * 60 * 12
    }
}

export const getStaticPaths: GetStaticPaths = async() => {
    const response = await axios(`${BASE_URL}&categories=518`)

    const data = await response.data;

    const paths = data.map((post) => {
        return {
            params: {
                slug: post.slug
            }
        }
    })

    return { paths, fallback: true }
}

export default Post;