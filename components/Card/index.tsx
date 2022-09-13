import * as React from "react";
import { Box, Image, Text, Stack, Avatar, Heading, useColorModeValue } from "@chakra-ui/react";

import Link from "next/link";

export default function Card() {
    return (
        <Box p="2" maxW="320px" borderWidth="1px" borderRadius="md">
            <Link href={"/"} >
                <a>
                    <Image borderRadius="md" src="https://bit.ly/2k1H1t6" alt="Images" mb="2.5" />
                </a>
            </Link>
            <Stack>
                <Text
                    color={'green.500'}
                    textTransform={'uppercase'}
                    fontWeight={800}
                    fontSize={'0.6rem'}
                    letterSpacing={1.1}>
                    Category
                </Text>
                <Link href={"/"} >
                    <a>
                        <Heading
                            color={useColorModeValue('gray.700', 'white')}
                            fontSize={'2xl'}
                            fontFamily={'body'}>
                            Title
                        </Heading>
                    </a>
                </Link>
                <Text color={'gray.500'} noOfLines={3}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                    erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                    et ea rebum.
                </Text>
            </Stack>
            <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                <Link href={"/"} >
                    <a>
                        <Avatar
                            src={'https://avatars.githubusercontent.com/u/61671015?v=4'}
                        // alt='Author'
                        />
                    </a>
                </Link>
                <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                    <Link href={"/"} >
                        <a>
                            <Text fontWeight={600}>Rommel Santhiago</Text>
                        </a>
                    </Link>
                    <Text color={'gray.500'}>Sep 12, 2022 · 6min read</Text>
                </Stack>
            </Stack>
        </Box>
    )
}