import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
type CardProps = {
  title: string;
  date: string;
  imageUrl: string;
  slug: string;
};

export default function Card({ title, date, imageUrl, slug }: CardProps) {
  const formatted = format(date, "dd/MM/yyyy 'às' HH:mm", { locale: ptBR });
  return (
    <div className="group flex flex-col items-start text-dark gap-2">
      <Link
        href={`/post/${slug}`}
        className="h-full rounded-xl overflow-hidden"
      >
        <Image
          src={imageUrl}
          alt={title}
          width={500}
          height={380}
          className="aspect-[4/3] w-full h-full object-cover object-center group-hover:scale-105 transition-all ease duration-300"
          sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw, 33vw"
        />
      </Link>
      <div className="flex flex-col gap-0">
        <span className="text-accent font-semibold text-sm italic">
          Desenvolvimento com WordPress
        </span>
        <Link
          href={`/post/${slug}`}
          className="text-sm italic font-bold md:text-2xl bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500"
        >
          {title}
        </Link>
        <span className="text-gray font-semibold text-sm italic">
          {formatted}
        </span>
      </div>
    </div>
  );
}
