import { PlusSquareIcon } from "@chakra-ui/icons";
import { Button, Icon, SimpleGrid, Text, Skeleton } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import { PostCard } from "../components/PostCard";

function HomePage() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518")
      .then((res) => {
        setPosts(res.data);
        setIsLoading(false);
      });
  }, []);

  return (
    <Layout>
      <Skeleton isLoaded={!isLoading}>
        <SimpleGrid
          columns={[1, 2, 3]}
          spacing={{ base: 2, md: 4, lg: 8 }}
          pb={4}
        >
          {posts.map((post) => (
            <PostCard post={post} key={post.id} />
          ))}

          <Button
            h="100%"
            variant="outline"
            py={4}
            borderWidth={4}
            borderStyle="dashed"
          >
            <Icon
              aria-label="Color Mode Switcher"
              fontSize="3xl"
              as={PlusSquareIcon}
            />
            <Text ml={2}>Carregar Mais</Text>
          </Button>
        </SimpleGrid>
      </Skeleton>
    </Layout>
  );
}

export default HomePage;
