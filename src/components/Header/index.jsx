import "./style.css";
import logo from "../../assets/logo.svg";

export function Header() {
  return (
    <div className="container-header">
      <img src={logo} alt="Dindin logo" />
      <h1>Tech Blog</h1>
    </div>
  );
}

export default Header;
