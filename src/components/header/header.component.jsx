import { useContext } from "react";

import { PageContext } from "../../context/page.context";

import ModalSobre from "../modalSobre/modalSobre.component";

import "./header.styles.scss";

const Header = ({ title, className }) => {
  const { setClickedOn, clickedOn } = useContext(PageContext);

  return (
    <header className={`header-container ${className}`}>
      {clickedOn[0] ? (
        <ModalSobre setClickedOn={setClickedOn} clickedOn={clickedOn} />
      ) : (
        ""
      )}

      <ul className="list-container">
        <li
          className={`list-element ${clickedOn[0] ? "color-active" : "color"}`}
          onClick={() => setClickedOn([!clickedOn[0], (clickedOn[1] = false)])}
        >
          Sobre a empresa
        </li>

        <li
          className={`list-element ${clickedOn[1] ? "color-active" : "color"}`}
          onClick={() => setClickedOn([(clickedOn[0] = false), !clickedOn[1]])}
        >
          {title ? title : "Desenvolvimento"}
        </li>
      </ul>
    </header>
  );
};

export default Header;
