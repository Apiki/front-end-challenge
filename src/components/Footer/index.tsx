import Socials from '../Socials';
import { Container, Content } from './styles';

export default function Footer() {
  return (
    <Container>
      <Content>
        <img
          src="https://blog.apiki.com/wp-content/uploads/sites/2/2020/04/marca-apiki-blog-h552-e1595420262681.png"
          alt="apiki blog logo"
        />
        <Socials />
      </Content>
      <span className="footer-divider"></span>
      <p>2021. Apiki WordPress. Todos os Direitos Reservados.</p>
    </Container>
  );
}
