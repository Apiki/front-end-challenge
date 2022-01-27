import React from "react";

export default function Button(props) {
  
  const {page, headers, setPage} = props

  return (
    <button type="button" 
      onClick={ () => setPage(page + 1) }
      disabled={ page >= headers ? true : false }
    > 
      Mais notícias 
    </button>
  );
}
