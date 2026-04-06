import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="apiki-dev-header">
      <div className="apiki-dev-header__inner container">
        <Link href="/" className="apiki-dev-header__brand">
          <Image
            src="/images/apki-blog-dev-logo.png"
            alt="Apiki Dev"
            width={151}
            height={32}
            priority
            className="apiki-dev-header__brand-image"
          />
        </Link>

        <div className="apiki-dev-header__actions">
          <a
            href="https://apiki.com/"
            target="_blank"
            rel="noreferrer"
            className="apiki-dev-header__cta"
          >
            <span className="apiki-dev-header__cta-highlight">Apiki.com</span>
          </a>

          <a
            href="https://blog.apiki.com/"
            target="_blank"
            rel="noreferrer"
            className="apiki-dev-header__cta"
          >
            <span className="apiki-dev-header__cta-highlight">Blog</span>
          </a>
        </div>
      </div>
    </header>
  );
}
