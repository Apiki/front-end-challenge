export const dynamic = "force-dynamic";
import { Navbar } from "@/_components/(header)/Navbar";
import HeaderPrimary from "../_components/(header)/HeaderPrimary";
import Title from "@/_components/Title";
import BlogPosts from "@/_components/BlogPosts";
import Footer from "@/_components/Footer";

export default function Home() {
  return (
    <div className="container mx-auto flex flex-col gap-4 md:px-0 px-4 mb-4">
      <Navbar />
      <HeaderPrimary />
      <Title>Postagens</Title>
      <BlogPosts />
      <Footer />
    </div>
  );
}
