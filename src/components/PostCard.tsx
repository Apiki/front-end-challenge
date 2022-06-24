import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import ReactHtmlParser from "html-react-parser";
import { Post } from "../types/post";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  const author = {
    name: post._embedded.author[0].name,
    img: post._embedded.author[0].avatar_urls?.[96],
  };
  const date = format(parseISO(post.date), "dd MMM yyyy", { locale: ptBR });

  return (
    <Box
      mx="auto"
      rounded="lg"
      shadow="md"
      bg="white"
      _dark={{
        bg: "whiteAlpha.200",
      }}
      mb={4}
    >
      {post._embedded["wp:featuredmedia"] && (
        <Image
          roundedTop="lg"
          w="full"
          h={64}
          fit="cover"
          src={post._embedded["wp:featuredmedia"][0].source_url}
          alt="Article"
        />
      )}

      <Box p={6}>
        <Box>
          <Link
            href={`posts/${post.slug}`}
            display="block"
            color="gray.800"
            _dark={{
              color: "white",
            }}
            fontWeight="bold"
            fontSize="2xl"
            mt={2}
            _hover={{
              color: "gray.600",
              textDecor: "underline",
            }}
          >
            {ReactHtmlParser(post.title.rendered)}
          </Link>
          <Text
            mt={2}
            fontSize="sm"
            color="gray.600"
            _dark={{
              color: "gray.400",
            }}
            dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
          />
        </Box>

        <Box mt={4}>
          <Flex alignItems="center">
            <Flex alignItems="center">
              {author.img && (
                <Image
                  h={10}
                  fit="cover"
                  rounded="full"
                  src={author.img}
                  alt="Avatar"
                />
              )}
              {author.name && (
                <Link
                  mx={2}
                  fontWeight="bold"
                  color="gray.700"
                  _dark={{
                    color: "gray.200",
                  }}
                >
                  {author.name}
                </Link>
              )}
            </Flex>
            <Text
              as="span"
              mx={1}
              fontSize="sm"
              color="gray.600"
              _dark={{
                color: "gray.300",
              }}
            >
              {date}
            </Text>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
