import { Hero } from "./Hero";
import { Navbar } from "./NavBar";

export function Header() {
    return (
        <header className="w-full h-96 flex flex-col">
            <Navbar />
            <Hero />
        </header>
    )
}