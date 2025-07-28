import MyButton from "@/components/MyButton";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import logomarca from "@/../public/logomarca.svg";

export default function NotFound() {
  return (
    <div className="min-h-full flex flex-col justify-center items-center">
      <span className="flex items-center justify-center text-6xl font-bold mb-4">
        <Image title="logomarca da Apiki" width={100} src={logomarca} alt="logomarca da Apiki" />
        404
      </span>
      <h2 className="text-2xl mb-2">Página não encontrada</h2>
      <p className="mb-6">
        Desculpe, não conseguimos encontrar o recurso solicitado.
      </p>

      <MyButton url="/">
        <ArrowLeft size={16} />
        Voltar para a página inicial
      </MyButton>
    </div>
  );
}
