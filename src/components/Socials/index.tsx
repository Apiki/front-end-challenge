import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineYoutube,
} from 'react-icons/ai';
import { SiGlassdoor } from 'react-icons/si';

import Link from 'next/link';

import { Container } from './styles';

export default function Socials() {
  return (
    <Container className="apiki_social_links">
      <Link href="https://www.linkedin.com/company/apiki" passHref>
        <a target="_blank">
          <AiOutlineLinkedin size={26} />
        </a>
      </Link>
      <Link href="https://www.facebook.com/ApikiWordPress" passHref>
        <a target="_blank">
          <AiOutlineFacebook size={26} />
        </a>
      </Link>
      <Link href="https://github.com/Apiki" passHref>
        <a target="_blank">
          <AiOutlineGithub size={26} />
        </a>
      </Link>
      <Link href="https://twitter.com/apikiWordPress" passHref>
        <a target="_blank">
          <AiOutlineTwitter size={26} />
        </a>
      </Link>
      <Link href="https://www.instagram.com/apikiwordpress" passHref>
        <a target="_blank">
          <AiOutlineInstagram size={26} />
        </a>
      </Link>
      <Link
        href="https://www.youtube.com/channel/UC__ToR3hqjs1ZktdLIWqYFA"
        passHref
      >
        <a target="_blank">
          <AiOutlineYoutube size={26} />
        </a>
      </Link>
      <Link
        href="https://www.glassdoor.com.br/Avalia%C3%A7%C3%B5es/Apiki-Avalia%C3%A7%C3%B5es-E2673669.htm"
        passHref
      >
        <a target="_blank">
          <SiGlassdoor size={24} />
        </a>
      </Link>
    </Container>
  );
}
