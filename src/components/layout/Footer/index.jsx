import { Link } from "react-router-dom";
import './style.scss';

export function Footer() {
  return (
    <div className="footer">
      <div className="row">
        <Link to="/">
          <img height={80} width={244} src="https://apiki.com/wp-content/uploads/2020/11/apiki-logo-pb.png" alt="Apiki Logo" />
        </Link>
      </div>
    </div>
  );
} 