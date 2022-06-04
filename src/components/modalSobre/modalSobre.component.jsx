import { useContext } from "react";
import { PageContext } from "../../context/page.context";

import "./modalSobre.styles.scss";

const ModalSobre = () => {
  const { setClickedOn, clickedOn } = useContext(PageContext);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape")
      setClickedOn([(clickedOn[0] = false), (clickedOn[1] = false)]);
  });

  return (
    <div className="about-container">
      <div
        className="close"
        onClick={() => setClickedOn([!clickedOn[0], (clickedOn[1] = false)])}
      >
        X
      </div>
      <div className="title-background">
        <div className="title-container">
          <h1>Empresa especializada em WordPress</h1>
          <h2>
            A Apiki é a primeira empresa especializada em WordPress do Brasil.
            Com mais de 13 anos de existência, fazemos tudo que seu projeto em
            WordPress precisa para alcançar o sucesso.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ModalSobre;
