import Link from "next/link";
import { Button } from "./ui/button";

export default function MyButton({
  url = "",
  targetBlank = false,
  className = "",
  children,
  ...props
}) {
  return (
    <Button
      className={`flex place-self-center cursor-pointer h-fit bg-primary/30 text-accent-foreground font-bold transition-all hover:scale-105 ${className} ${
        url && "p-0"
      }`}
      {...props}
    >
      {url ? (
        <Link
          href={url}
          target={targetBlank ? "_blank" : undefined}
          className={`flex gap-2 items-center py-2 px-4`}
        >
          {children}
        </Link>
      ) : (
        <>{children}</>
      )}
    </Button>
  );
}
