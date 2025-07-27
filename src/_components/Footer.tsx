import {
  GithubIcon,
  Linkedin,
  Twitter,
  DribbbleIcon,
  Heart,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="rounded-xl bg-dark text-light">
      <div className="flex flex-col items-center justify-center py-8 gap-4">
        <h3 className="font-semibold text-center capitalize text-2xl sm:text-3xl lg:text-4xl px-4">
          GiovaniBlog - Desenvolvido por Giovani
        </h3>
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/giovanimatoss/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 transition-transform duration-200"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 transition-transform duration-200"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/giovanimf/"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 transition-transform duration-200"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href="#"
            aria-label="Dribbble"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 transition-transform duration-200"
          >
            <DribbbleIcon className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="w-full border-t border-light py-6 px-8 flex flex-col md:flex-row items-center justify-between text-sm font-medium">
        <span className="text-center">
          &copy; {new Date().getFullYear()} GiovaniBlog. All rights reserved.
        </span>

        <p className="text-center flex items-center gap-1">
          Made with <Heart className="w-4 h-4 text-red-500 inline" fill="red" />{" "}
          by{" "}
          <a
            href="https://www.linkedin.com/in/giovanimatoss/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Giovani Matos
          </a>
        </p>
      </div>
    </footer>
  );
}
