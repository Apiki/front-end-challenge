import { hrefLinks } from "../const/socialLinks";

export const footerSections = [
  {
    title: "Sobre mim",
    links: [
      { label: "Quem sou eu", href: hrefLinks.hrefLinkedin },
      { label: "Contato", href: hrefLinks.hrefWhatsApp },
    ],
  },
  {
    title: "Desenvolvimento",
    links: [
      { label: "GitHub", href: hrefLinks.hrefGitHub },
      { label: "Portifólio", href: hrefLinks.hrefPortfolio },
    ],
  },
];
