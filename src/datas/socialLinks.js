import { LinkedinLogo, GithubLogo, TwitterLogo } from 'phosphor-react';

const links = [
  {
    site: "LinkedIn",
    href: "https://www.linkedin.com/company/apiki/",
    icon: <LinkedinLogo weight="thin" /> 
  },
  {
    site: "GitHub",
    href: "https://github.com/Apiki",
    icon: <GithubLogo weight="thin" /> 
  },
  {
    site: "Twitter",
    href: "https://twitter.com/apikiWordPress",
    icon: <TwitterLogo weight="thin" /> 
  }
];

export const getSocialLinks = () => links;