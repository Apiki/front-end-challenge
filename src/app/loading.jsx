import Image from "next/image";
import logomarca from "@/../public/logomarca.svg";

export default function Loading() {
  return (
    <div className="flex w-full place-items-center justify-center gap-4 pointer-events-none">
      <Image
        title="logo marca da Apiki"
        className="size-max border-5 border-primary rounded-full animate-[spin_3s_linear_infinite]"
        src={logomarca}
        alt="logo marca da Apiki"
        priority // Adiciona prioridade máxima de carregamento
      />
      <p>Calminha aí dev...</p>
    </div>
  );
}
