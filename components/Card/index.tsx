import React from "react";
import Link from "next/link";
import { 
    Box, 
    Image, 
    Text, 
    Stack, 
    Avatar, 
    Heading, 
    useColorModeValue 
} from "@chakra-ui/react";

import { dateFormat } from "../../utils/constants"

export default function Card({post}) {

    const data = post._embedded.author[0].avatar_urls

    let avatar: string

    if(data) {
        avatar = Object.values(data)[1] as string
    }

    return (
        <Box p="2" m="0.8rem" minW="16rem" maxW="22rem" borderWidth="1px" borderRadius="md">
            <Link href={"/"} >
                <a>
                    <Image borderRadius="md" src={post.yoast_head_json.og_image[0].url} alt="Images" mb="2.5" />
                </a>
            </Link>
            <Stack>
                <Text
                    color={'green.500'}
                    textTransform={'uppercase'}
                    fontWeight={800}
                    fontSize={'0.6rem'}
                    letterSpacing={1.1}>
                    {post.yoast_head_json.og_type}
                </Text>
                <Link href={"/"} >
                    <a>
                        <Heading
                            color={useColorModeValue('gray.700', 'white')}
                            fontSize={'2xl'}
                            fontFamily={'body'}>
                            {post.title.rendered}
                        </Heading>
                    </a>
                </Link>
                <Text color={'gray.500'} noOfLines={4}>
                    {post.yoast_head_json.description}
                </Text>
            </Stack>
            <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                <Link href={"/"} >
                    <a>
                        <Avatar
                            src={avatar}
                        />
                    </a>
                </Link>
                <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                    <Link href={"/"} >
                        <a>
                            <Text fontWeight={600}>{post._embedded.author[0].name ?? "Indisponível"}</Text>
                        </a>
                    </Link>
                    <Text color={'gray.500'}>{dateFormat(post.date_gmt) ?? "Indisponível"}</Text>
                </Stack>
            </Stack>
        </Box>
    )
}

// export const getStaticProps: GetStaticProps = async(context) => {
//     const { params } = context
//     const data = await fetch(
//         `${BASE_URL}/${params.post}`
//     )

//     const post = await data.json();

//     return {
//       props: { post }
//     }
// }

// export const getStaticPaths: GetStaticPaths = async() => {
//     const response = await fetch(BASE_URL)

//     const data = await response.json()

//     const paths = data.map((post) => {
//         return {
//             params: {
//                 post: `${post.slug}`
//             }
//         }
//     })

//     return { paths, fallback: false }
// }