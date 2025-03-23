"use client";
import { useEffect, useState } from "react";
import FontMode from "./FontMode";
import ThemeMode from "./ThemeMode";
import CategoryMenu from "./CategoryMenu";
import { AppProgressProvider as ProgressProvider } from "@bprogress/next";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [showHamburger, setShowHamburger] = useState<boolean>(false);
  useEffect(() => {
    const font = localStorage.getItem("font");
    if (font) document.body.classList.add(font);

    const mode = localStorage.getItem("mode");
    if (mode) document.documentElement.classList.add(mode);
  }, []);
  return (
    <ProgressProvider
      height="3px"
      color="#fbbf24"
      options={{ showSpinner: false }}
      shallowRouting
    >
      <header className=" p-2 md:p-3 lg:p-6 sticky top-0 backdrop-blur-md z-50 shadow-md">
        <nav className="grid grid-cols-12 xl:w-4/6 mx-auto">
          <div className="col-span-6 md:col-span-3 flex items-center">
            <Link href="/">
              <Image
                src="logo/logo-title-blog.svg"
                alt="Apiki blogs logo"
                width={144}
                height={36}
                className="h-8 md:h-9"
              />
            </Link>
          </div>
          <ul className="md:flex hidden md:col-span-6 lg:col-span-6 mx-auto gap-x-3">
            <li className="">
              <a
                target="_blank"
                className="h-full transition-colors rounded hover:bg-secondary px-3 inline-flex justify-center items-center"
                href="https://apiki.com/empresa-especializada-em-wordpress/"
              >
                Sobre Nós
              </a>
            </li>
            <li className=" ">
              <a
                target="_blank"
                className="h-full transition-colors rounded hover:bg-secondary px-3 inline-flex justify-center items-center"
                href="https://apiki.com/atendimento/"
              >
                Contato
              </a>
            </li>
            <li className=" ">
              <a
                target="_blank"
                className="h-full transition-colors rounded hover:bg-secondary px-3 inline-flex justify-center items-center"
                href="https://carreira.apiki.com/"
              >
                Vagas
              </a>
            </li>
          </ul>
          <div className="hidden md:col-span-3 gap-x-3 md:flex justify-end items-center">
            <CategoryMenu />
            <ThemeMode switcher={false} />
            <FontMode />
          </div>
          <div className="col-span-6 flex justify-end md:hidden">
            <input
              checked={showHamburger}
              onChange={(e) => setShowHamburger(e.target.checked)}
              id="hamburgerId"
              hidden
              className="peer"
              type="checkbox"
            />

            <label
              htmlFor="hamburgerId"
              className="aspect-square peer-checked:first:[&>span]:-rotate-[35deg] peer-checked:first:[&>span]:mr-2 peer-checked:[&>span:nth-child(2)]:opacity-0 peer-checked:last:[&>span]:mr-1 peer-checked:last:[&>span]:rotate-[35deg] group cursor-pointer items-center flex flex-col justify-evenly h-full p-0.5"
            >
              <span className="h-1 bg-accent-dark inline-block w-full origin-top-right transition-all rounded-sm"></span>
              <span className="h-1 bg-accent-light inline-block w-full rounded-sm transition-opacity"></span>
              <span className="h-1 bg-accent-light inline-block w-full origin-top-right transition-all rounded-sm"></span>
            </label>
            <div
              onClick={() => setShowHamburger(false)}
              className="fixed peer-checked:[&>div]:w-3/4 sm:peer-checked:[&>div]:w-3/4 peer-checked:opacity-100 w-full peer-checked:visible invisible duration-500 transition-all  overflow-hidden opacity-0 bg-black/30 top-0 left-0 h-screen z-50"
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="h-full w-0 transition-all delay-150 duration-300 peer-checked:opacity-100 relative bg-primary p-4"
              >
                <Image
                  src="logo/logo-title-blog.svg"
                  alt="Apiki blogs logo"
                  className="h-8"
                  width={144}
                  height={36}
                />
                <ul className="my-6 space-y-3 text-nowrap">
                  <li>
                    <h4 className="text-heading font-semibold border-b border-placeholder py-1.5">
                      Menu
                    </h4>
                    <ul className="py-2 text-sm">
                      <li>
                        <a
                          className="py-1 text-body block"
                          target="_blank"
                          href="https://apiki.com/empresa-especializada-em-wordpress/"
                        >
                          Sobre Nós
                        </a>
                      </li>
                      <li>
                        <a
                          className="py-1 text-body block"
                          target="_blank"
                          href="https://apiki.com/atendimento/"
                        >
                          Contato
                        </a>
                      </li>
                      <li>
                        <a
                          className="py-1 text-body block"
                          target="_blank"
                          href="https://carreira.apiki.com/"
                        >
                          Vagas
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h4 className="text-heading font-semibold border-b border-placeholder py-1.5">
                      Categorias de Artigos
                    </h4>
                    <ul className="py-3 space-y-1 text-sm">
                      <li>
                        <a
                          className="py-1 flex items-center"
                          target="_blank"
                          href="https://blog.apiki.com/desenvolvimento/"
                        >
                          <span>
                            <i className="CodeIcon block text-red-500 text-body size-6"></i>
                          </span>
                          <span className="ml-2  text-body">
                            Desenvolvimento WordPress
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="py-1 flex items-center"
                          target="_blank"
                          href="https://blog.apiki.com/e-commerce/"
                        >
                          <span>
                            <i className="ShopIcon block text-fuchsia-500 text-body size-6"></i>
                          </span>
                          <span className="ml-2  text-body">E-commerce</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="py-1 flex items-center"
                          target="_blank"
                          href="https://blog.apiki.com/infra/"
                        >
                          <span>
                            <i className="DBIcon block text-sky-500 text-body size-6"></i>
                          </span>
                          <span className="ml-2  text-body">
                            Infra para WordPress
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="py-1 flex items-center"
                          target="_blank"
                          href="https://blog.apiki.com/institucional/"
                        >
                          <span>
                            <i className="LogoIcon block bg-yellow-500 text-body size-6"></i>
                          </span>
                          <span className="ml-2  text-body">Institucional</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="py-1 flex items-center"
                          target="_blank"
                          href="https://blog.apiki.com/seguranca/"
                        >
                          <span>
                            <i className="ShieldIcon block bg-orange-500 text-body size-6"></i>
                          </span>
                          <span className="ml-2  text-body">
                            Segurança para WordPress
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="py-1 flex items-center"
                          target="_blank"
                          href="https://blog.apiki.com/mobile/"
                        >
                          <span>
                            <i className="PhoneIcon bg-green-500 text-body size-6"></i>
                          </span>
                          <span className="ml-2  text-body">
                            WordPress Mobile
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="py-1 flex items-center"
                          target="_blank"
                          href="https://blog.apiki.com/performance/"
                        >
                          <span>
                            <i className="LighteningIcon bg-amber-500 text-body size-6"></i>
                          </span>
                          <span className="ml-2  text-body">
                            WordPress Performance
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="py-1 flex items-center"
                          target="_blank"
                          href="https://blog.apiki.com/seo/"
                        >
                          <span>
                            <i className="SEOIcon block bg-violet-500 text-body size-6"></i>
                          </span>
                          <span className="ml-2  text-body">WordPress SEO</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <div className="absolute flex gap-x-2 justify-end items-end right-2 bottom-2 h-24 w-full">
                  <ThemeMode switcher={true} />
                  <FontMode />
                </div>
                <div className="h-56 absolute -translate-x-1/3 translate-y-1/3 left-0 bottom-0">
                  <Image
                    src="logo/logo.svg"
                    alt="Apiki blogs logo"
                    width={224}
                    height={224}
                    className="h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </ProgressProvider>
  );
}
