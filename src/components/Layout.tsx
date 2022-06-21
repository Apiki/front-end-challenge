import { Box } from "@chakra-ui/react";
import Head from "next/head";
import { ReactNode } from "react";
import { Header } from "./Header";

type LayoutProps = {
  title?: string;
  children: ReactNode;
};

export function Layout({ title, children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title ? `Apiki Blog - ${title}` : "Apiki Blog"}</title>
      </Head>

      <Header />
      <Box px={{ base: 4, md: 6, lg: 8 }}>{children}</Box>
    </>
  );
}
