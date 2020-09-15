import React, { useContext, useEffect } from "react";
import { ContextAplication } from "../../context/ContextAplication";

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
  }, []);

  useEffect(() => {
    nextPage(actualPage);
  }, [actualPage]);

  const handleNextPage = () => {
    setActualPage(actualPage < totalPages ? actualPage + 1 : totalPages);
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
