import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

import { navigationLinks } from '../../utils/navigation';
import logo from '../../assets/images/logo.png';

export default function Header() {
  return (
    <header className="c-header">
      <Link to="/" alt="To home" title="To home">
        <figure className="c-header__figure">
          <LazyLoadImage
            className="c-header__logo"
            alt="Logo for blog application"
            effect="blur"
            src={logo}
          />
        </figure>
      </Link>
      <Menu right width={250}>
        <ul className="c-header__unlist">
          {navigationLinks.map(({ href, name, id }) => (
            <li key={id} className="header__item menu-item">
              <Link
                className="c-header__link"
                to={href}
                alt="Link"
                title={`to ${name}`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </Menu>
    </header>
  );
}
