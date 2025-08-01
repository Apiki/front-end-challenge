import { Menu, X } from "lucide-react";
import { useState } from "react";

import Button from "../Button";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { label: "Início", href: "/", current: true },
    { label: "Story", href: "/story", current: false },
    { label: "Menu", href: "/menu", current: false },
    { label: "Espaço", href: "/space", current: false },
    { label: "Comunidade", href: "/community", current: false },
    { label: "Notícias", href: "/news", current: false },
  ];

  return (
    <header className="w-full relative mb-10">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white px-2 py-1 rounded-md text-sm font-medium"
      >
        Pular para o conteúdo
      </a>

      <nav
        className="w-full bg-white py-4 shadow-sm"
        aria-label="Menu de navegação principal"
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6">
          <h1 className="text-2xl font-bold text-gray-900">
            <a
              href="/"
              className="inline-flex items-center focus:outline-none focus:ring-2 focus:ring-amber-700"
            >
              Apiki
              <span className="text-amber-700 ml-1">Geferson</span>
            </a>
          </h1>

          <ul className="hidden md:flex items-center space-x-4 lg:space-x-8 text-gray-600">
            {links.map(({ label, href, current }) => (
              <li key={label}>
                <a
                  href={href}
                  className="transition-colors focus:outline-none focus:ring-2 focus:ring-amber-700"
                  aria-current={current ? "page" : undefined}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-4">
            <Button
              type="button"
              className="py-2 px-5 rounded-none hidden lg:inline-block"
            >
              Ordem
            </Button>
            <Button
              type="button"
              className="!bg-transparent border border-primary !text-primary py-2 px-5 rounded-none hidden md:inline-block"
            >
              Entrar
            </Button>

            <button
              onClick={() => setMobileMenuOpen((o) => !o)}
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-700"
            >
              {mobileMenuOpen ? (
                <X color="black" size={24} />
              ) : (
                <Menu color="black" size={24} />
              )}
            </button>
          </div>
        </div>

        <div
          id="mobile-menu"
          className={`
            fixed inset-0 z-50 bg-white md:hidden
            transform ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}
            transition-transform duration-300 ease-in-out
          `}
          aria-hidden={!mobileMenuOpen}
        >
          <div className="flex justify-end p-4">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-700"
              aria-label="Fechar menu"
            >
              <X size={24} color="black" />
            </button>
          </div>
          <ul className="flex flex-col space-y-2 px-6 pt-4 pb-2 text-gray-600">
            {links.map(({ label, href, current }) => (
              <li key={label}>
                <a
                  href={href}
                  className="block py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-700"
                  aria-current={current ? "page" : undefined}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col space-y-2 px-6 pb-4">
            <a
              href="/order"
              className="block text-center bg-amber-700 text-white py-2 px-5 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-700"
            >
              Ordem
            </a>
            <a
              href="/login"
              className="block text-center border border-amber-700 text-amber-700 py-2 px-5 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-700"
            >
              Entrar
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
