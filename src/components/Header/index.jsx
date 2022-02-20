import "./style.css";
import logo from "../../assets/apikiLogo.png";

export function Header() {
  return (
    <div className="container-header">
      <img src={logo} alt="apiki logo" />
    </div>
  );
}

export default Header;
