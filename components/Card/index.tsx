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
import { decode } from "html-entities";
import Swal from "sweetalert2";

import { dateFormat } from "../../utils/constants"

export default function Card({ post }) {

    const data = post._embedded.author[0].avatar_urls

    let avatar: string

    if (data) {
        avatar = Object.values(data)[1] as string
    }

    const showAlertSuccess = () => {
        let timerInterval: NodeJS.Timer
        Swal.fire({
            position: 'top',
            icon: 'info',
            title: 'Carregando, aguarde!',
            showConfirmButton: false,
            timer: 5000, 
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading()
              timerInterval = setInterval(() => {
                Swal.getTimerLeft()
              }, 100)
            },
            willClose: () => {
              clearInterval(timerInterval)
            }
        })
    }

    return (
        <Box p="2" m="0.8rem" minW="16rem" maxW="22rem" borderWidth="1px" borderRadius="md">
            <Link href={`/${post.slug}`} >
                <a onClick={showAlertSuccess}>
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
                <Link href={`/${post.slug}`} >
                    <a onClick={showAlertSuccess}>
                        <Heading
                            color={useColorModeValue('gray.700', 'white')}
                            fontSize={'2xl'}
                            fontFamily={'body'}>
                            {decode(post.title.rendered)}
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
