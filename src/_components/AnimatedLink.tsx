import Link from "next/link";

interface AnimatedLinkProps {
  href: string;
  children: React.ReactNode;
}

export function AnimatedLink({ href, children }: AnimatedLinkProps) {
  return (
    <Link
      href={href}
      className="bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-no-repeat transition-[background-size] duration-500 bg-[0_calc(100%+2px)]"
    >
      {children}
    </Link>
  );
}
