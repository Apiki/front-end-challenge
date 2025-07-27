import Link from "next/link";

type TagProps = {
  link: string;
  name: string;
};

export default function Tag({ link = "#", name }: TagProps) {
  return (
    <Link
      href={link}
      className="inline-block py-1 px-4 bg-dark text-light rounded-xl capitalize font-semibold border-2 border-solid border-light hover:scale-105 transition-all ease duration-200 text-xs"
    >
      {name}
    </Link>
  );
}
