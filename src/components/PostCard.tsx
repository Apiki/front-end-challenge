import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import { format, parseISO } from "date-fns";

type FeaturedMedia = {
  source_url: string;
  slug: string;
};

type Author = {
  avatar_urls: {
    24: string;
    48: string;
    96: string;
  };
  name: string;
};

interface PostCardProps {
  post: {
    title: { rendered };
    date: string;
    _embedded: { "wp:featuredmedia": FeaturedMedia[]; author: Author[] };
  };
}

export function PostCard({ post }: PostCardProps) {
  const title = post?.title.rendered;
  const img = post?._embedded["wp:featuredmedia"][0].source_url;
  const authorName = post?._embedded.author[0].name;
  const authorImg = post?._embedded.author[0].avatar_urls?.[96];
  const date = format(parseISO(post.date), "dd MMM yyyy");

  return (
    <Box
      mx="auto"
      mb={4}
      rounded="lg"
      shadow="md"
      bg="white"
      _dark={{
        bg: "gray.800",
      }}
      maxW="2xl"
    >
      <Image
        roundedTop="lg"
        w="full"
        h={64}
        fit="cover"
        src={img}
        alt="Article"
      />

      <Box p={6}>
        <Box>
          <Link
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
            {title}
          </Link>
          <Text
            mt={2}
            fontSize="sm"
            color="gray.600"
            _dark={{
              color: "gray.400",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
            parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris
            egestas quam volutpat viverra. In pretium nec senectus erat. Et
            malesuada lobortis.
          </Text>
        </Box>

        <Box mt={4}>
          <Flex alignItems="center">
            <Flex alignItems="center">
              {authorImg && (
                <Image
                  h={10}
                  fit="cover"
                  rounded="full"
                  src={authorImg}
                  alt="Avatar"
                />
              )}
              {authorName && (
                <Link
                  mx={2}
                  fontWeight="bold"
                  color="gray.700"
                  _dark={{
                    color: "gray.200",
                  }}
                >
                  {authorName}
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
