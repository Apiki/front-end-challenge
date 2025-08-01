import clsx from "clsx";
import React from "react";
import { v4 as uuidv4 } from "uuid";

import Image from "../Img";

const Footer = ({
  logo,
  sections = [],
  socialLinks = [],
  className = "",
}: {
  logo?: React.ReactNode;
  sections?: {
    title?: string;
    links: { label: string; href: string }[];
  }[];
  socialLinks?: { href: string; icon: React.ReactNode }[];
  className?: string;
}) => {
  return (
    <footer className={clsx("w-full bg-secondary text-dark py-8", className)}>
      <div className="container mx-auto px-4 md:px-12 flex flex-col md:flex-row justify-between items-center">
        {logo && (
          <div
            className="mb-6 md:mb-0 flex items-center cursor-pointer"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            {typeof logo === "string" ? (
              <Image
                src={logo}
                alt="Logo"
                className=" w-24 h-24 md:w-50 md:h-50 lg:w-50 lg:h-50 object-fit rounded-full"
              />
            ) : (
              logo
            )}
            <div className="flex flex-col items-center">
              <h1 className="ml-4 font-bold text-xl">Geferson Lopes</h1>
              <h3 className="ml-4 font-medium text-lg">Desenvolvedor Web</h3>
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-2 gap-8 mb-6 md:mb-0 space-x-4">
          {sections.map((section) => (
            <div key={uuidv4()}>
              {section.title && (
                <h3 className="font-semibold mb-4">{section.title}</h3>
              )}
              <ul>
                {section.links.map((link) => (
                  <li key={uuidv4()} className="mb-2">
                    <a href={link.href} className="hover:underline">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {socialLinks.length > 0 && (
          <div className="flex space-x-1 items-center">
            {socialLinks.map((social) => (
              <a
                key={uuidv4()}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                {social.icon}
              </a>
            ))}
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
