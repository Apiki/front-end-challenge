import React from "react";

export default function Button(props) {
  
  const {text, page, headers, setPage} = props

  function buttonClick () {
    setPage(page + 1)
    window.scrollTo(0, 0);
  }

  return (
    <button type="button" 
      onClick={ () => buttonClick() }
      disabled={ page >= headers ? true : false }
    > 
      {text}
    </button>
  );
}
