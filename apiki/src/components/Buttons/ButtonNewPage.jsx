import React, { useContext, useEffect } from "react";
import { ContextAplication } from "../../context/ContextAplication";
import './index.css';

const ButtonNewPage = () => {
  const {
    nextPage,
    pages,
    setHome,
    totalPages,
    setActualPage,
    actualPage,
  } = useContext(ContextAplication);

  useEffect(() => {
    nextPage(actualPage);
  }, [actualPage]);

  console.log(actualPage)

  const handleNextPage = () => {
    setActualPage(actualPage < totalPages ? actualPage + 1 : actualPage);
    return setHome(pages);
  };

  return (
    <div className="next-button">
      <button type="button" onClick={() => handleNextPage()}>
        Carregar mais...
      </button>
    </div>
  );
};

export default ButtonNewPage;
