import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

export function Header() {
  return (
    <Flex direction="column" align="center" py={4}>
      <Heading>Apiki Blog</Heading>
      <Text my={2}>Conteúdo sobre desenvolvimento Wordpress</Text>
    </Flex>
  );
}
