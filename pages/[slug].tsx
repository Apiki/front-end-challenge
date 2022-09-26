import React, { useEffect, useState } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { Avatar, Box, Image, Stack, Text } from "@chakra-ui/react";
import { sanitize } from "isomorphic-dompurify";
import parse from "html-react-parser";
import Head from "next/head";
import Link from "next/link";

import { dateFormat } from "../utils/constants";
import { controller } from "../utils/controller";
import Loading from "../components/Loading";
import * as S from "../styles/post"

export const getStaticProps: GetStaticProps = async(context) => {
    const { params } = context
    const data = await controller.fetchPost(params.slug);

    const post = await data[0];

    return {
      props: { post }, 
      revalidate: 60 * 60 * 12
    }
}

export const getStaticPaths: GetStaticPaths = async() => {
    const data = await controller.fetchPosts()

    const paths = data.map((post) => {
        return {
            params: {
                slug: post.slug
            }
        }
    })

    return { paths, fallback: false }
}

const Post = ({post}) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if(!post){
            setLoading(true)
        }
        setLoading(false)
    }, [post])

    return (
        <>
            {post ? <Head>{parse(post.yoast_head)}</Head> : null}
            {loading ? <Loading fontSize="3rem" position="absolute" height="5rem" /> :
            <S.Container>
                <S.Title>{post.title.rendered}</S.Title>
                <S.Holder>
                    <Image 
                        src={post._embedded['wp:featuredmedia'][0].media_details.sizes["jnews-750x375"].source_url} 
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
                        <Link href={ post._embedded.author[0].link ?? post.slug } >
                            <a>
                                <Avatar
                                    size={"lg"}
                                    src={post._embedded.author[0].avatar_urls ? post._embedded.author[0].avatar_urls[96] : ""}
                                />
                            </a>
                        </Link>
                        <Stack direction={'column'} spacing={0} fontSize={"2xl"}>
                            <Link href={ post._embedded.author[0].link ?? post.slug } >
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

export default Post;