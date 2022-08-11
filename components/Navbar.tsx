import Image from "next/image";
import logo from "../public/logo-apiki-symbol.png";
import styles from "../styles/Navbar.module.scss";

const Navbar = () => {
  return (
    <nav
      role="navbar"
      aria-label="Barra de Navegação"
      className={styles.navbar}
    >
      <a
        role="home"
        aria-label="Link da página inicial"
        href="https://blog.apiki.com/"
        className={styles.navbar_link}
      >
        <Image src={logo} alt="logo" width={50} height={50} />
        Página inicial
      </a>
      <a
        role="about"
        aria-label="Link da página sobre nós"
        href="https://blog.apiki.com/sobre/"
        className={styles.navbar_link}
      >
        Sobre nós
      </a>
      <a
        role="contact"
        aria-label="Link da página de contatos"
        href="https://apiki.com/atendimento/"
        className={styles.navbar_link}
      >
        Contato
      </a>
    </nav>
  );
};

export default Navbar;
