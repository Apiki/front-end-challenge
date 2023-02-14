import { getSocialLinks } from "@/datas/socialLinks";

import {
  SocialLinksWrapper,
} from './style';

export function SocialLinks() {
  const links = getSocialLinks();

  return (
    <SocialLinksWrapper>
      {links.map(link => (
        <li 
          key={link.site}
        >
          <a 
            className="social-link__icon"
            href={link.href} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            {link.icon}
          </a>
        </li>
      ))}
    </SocialLinksWrapper>
  );
}