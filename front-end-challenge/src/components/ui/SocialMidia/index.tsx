import clsx from "clsx";
import { v4 as uuidv4 } from "uuid";

import { Link } from "../Link";

interface LinkCardProps {
  href: string;
  title: string;
  icon: React.ReactNode;
}

export default function SocialMidia({
  className,
  links,
}: {
  className?: string;
  links?: LinkCardProps[];
}) {
  return (
    <section
      className={clsx("mt-4 flex gap-1 items-center justify-center", className)}
    >
      {links?.map((link) => (
        <Link
          key={uuidv4()}
          href={link.href}
          target="_blank"
          aria-label={link.title}
        >
          {link.icon}
        </Link>
      ))}
    </section>
  );
}
