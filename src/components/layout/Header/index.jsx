import { Link } from "react-router-dom";
import './style.scss';

export function Header() {
  return (
    <nav className="header">
      <Link to="/">
        <img height={35} width={107} src="https://apiki.com/wp-content/uploads/2020/11/apiki-logo-pb.png" alt="Apiki Logo" />
      </Link>
    </nav>
  );
} 