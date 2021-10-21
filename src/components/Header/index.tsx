import Link from 'next/link';

import Socials from '../Socials';
import { Container, HeaderContent } from './styles';

export default function Header() {
  return (
    <Container>
      <HeaderContent>
        <Link href="/">
          <a>
            <img
              src="https://blog.apiki.com/wp-content/uploads/sites/2/2020/04/marca-apiki-blog-h552-e1595420262681.png"
              alt="apiki blog logo"
            />
          </a>
        </Link>
        <Socials />
      </HeaderContent>
    </Container>
  );
}
