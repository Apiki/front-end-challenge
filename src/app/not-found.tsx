import { Navbar } from "@/_components/(header)/Navbar";
import Title from "@/_components/Title";
import Footer from "@/_components/Footer";
import { Button } from "@/_components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container mx-auto flex flex-col gap-4 md:px-0 px-4 mb-4">
      <Navbar />
      <div className="mt-19 flex flex-col items-center justify-center gap-4">
        <Title>Página não encontrada</Title>
        <Button className="py-2 px-4 rounded cursor-pointer w-fit">
          <Link href="/">Voltar para a página inicial</Link>
        </Button>
      </div>
      <Footer />
    </div>
  );
}
