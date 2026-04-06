import Image from "next/image";

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="apiki-dev-footer">
      <div className="apiki-dev-footer__inner container">
        <div className="apiki-dev-footer__brand-block">
          <div className="apiki-dev-footer__brand">
            <Image
              src="/images/apki-blog-dev-logo.png"
              alt="Apiki Dev"
              width={151}
              height={32}
              className="apiki-dev-footer__brand-image"
            />
          </div>
          <p className="apiki-dev-footer__description">
            Conteúdo técnico com curadoria editorial para profissionais de
            WordPress, performance e desenvolvimento web.
          </p>
        </div>

        <div className="apiki-dev-footer__meta">
          <p className="apiki-dev-footer__copyright">
            © {CURRENT_YEAR} Apiki Dev. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
