import { PlusSquareIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Icon,
  IconButton,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import { PostCard } from "../components/PostCard";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518")
      .then((res) => setPosts(res.data));
  }, []);

  console.log(posts);

  return (
    <Layout>
      <SimpleGrid
        columns={[1, 2, 3]}
        spacing={{ base: 2, md: 4, lg: 8 }}
        pb={4}
      >
        {posts.map((post) => (
          <PostCard post={post} key={post.id} />
        ))}

        <Button h="100%" colorScheme="gray">
          <Icon
            aria-label="Color Mode Switcher"
            isRound
            fontSize="4xl"
            as={PlusSquareIcon}
          />
          <Text>Carregar Mais</Text>
        </Button>
      </SimpleGrid>
    </Layout>
  );
}

export default Home;
