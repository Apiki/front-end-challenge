import { SidebarTrigger } from "@/components/ui/sidebar";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="sticky z-10 bg-background top-0 h-16 shrink-0 place-content-center gap-2 border-b-2 border-foreground/15">
      <div className="flex justify-between flex-row-reverse md:flex-row items-center gap-2 px-3">
        <SidebarTrigger className="cursor-pointer hover:scale-125 bg-primary/50" />
        <ThemeToggle />
      </div>
    </header>
  );
}
