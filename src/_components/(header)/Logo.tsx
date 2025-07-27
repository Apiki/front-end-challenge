import Link from "next/link";

export default function Logo() {
  return (
    <div>
      <Link href="/" className="font-bold text-lg cursor-pointer">
        GiovaniBlog
      </Link>
    </div>
  );
}
