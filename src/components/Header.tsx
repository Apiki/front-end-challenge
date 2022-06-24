import {
  Flex,
  Heading,
  Link,
  Text,
  Image,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";

export function Header() {
  const { colorMode } = useColorMode();
  return (
    <Flex direction="column" align="center" py={4}>
      <Heading>
        <Link
          href="/"
          color="gray.800"
          _dark={{
            color: "white",
          }}
          fontWeight="bold"
          _hover={{
            color: "gray.600",
            textDecor: "underline",
          }}
        >
          <Image
            src={
              colorMode === "light"
                ? "/logo-apiki-blog.png"
                : "/logo-apiki-blog-white.png"
            }
            alt="Apiki | Blog"
          />
        </Link>
      </Heading>
      <Text my={2}>Conteúdo sobre desenvolvimento Wordpress</Text>
    </Flex>
  );
}
