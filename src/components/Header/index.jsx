import logo from "../../assets/apikiLogo.png";
import "./style.css";

export function Header() {
  return (
    <div className="container-header">
      <img src={logo} alt="apiki logo" />
    </div>
  );
}

export default Header;
