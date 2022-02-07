import "./style.css";

const Footer = () => {
  return (
    <footer>
      <p className="footer__text">
        Desevolvido por{" "}
        <a
          className="footer__link"
          href="https://github.com/MarcusUrani"
          target="_blank"
          rel="noreferrer"
        >
          Marcus Urani
        </a>
      </p>
      <p className="footer__text">
        Todos os direitos reservados a{" "}
        <a
          className="footer__link"
          href="https://apiki.com"
          target="_blank"
          rel="noreferrer"
        >
          Apiki
        </a>
      </p>
    </footer>
  );
};

export default Footer;
