import { Box, IconButton, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import Head from "next/head";
import { ReactNode } from "react";
import { Header } from "./Header";

type LayoutProps = {
  title?: string;
  children: ReactNode;
};

export function Layout({ title, children }: LayoutProps) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box minH="100vh" maxW="2xl" mx="auto">
      <Head>
        <title>{title ? `Apiki Blog - ${title}` : "Apiki Blog"}</title>
      </Head>

      <Header />

      <Box px={{ base: 4, md: 6, lg: 8 }}>{children}</Box>

      <IconButton
        aria-label="Color Mode Switcher"
        isRound
        size="lg"
        icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        position="fixed"
        bottom={4}
        right={4}
        onClick={toggleColorMode}
      />
    </Box>
  );
}
