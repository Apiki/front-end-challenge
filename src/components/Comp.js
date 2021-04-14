import React, { useState, useEffect } from 'react';
import Posts from './Posts';
import AdicionalPages from './AdicionalPages';
import '../components/Posts.css';

function Comp() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [mais, setMais] = useState([]);
  const [totalPaginas, setTotalPaginas] = useState(1);
  async function totalPags() {
    let total = 0;
    const url =
      "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518";
    const header = await fetch(url).then((response) => 
    response.headers.entries());
    for (let iteravel of header) {
      if (iteravel[0] === "x-wp-totalpages") {
        total = iteravel[1];
        console.log(total);
        setTotalPaginas(total);
      }
    }
    return total;
    }
    function clickButton(){
      setPage(page+1);
      console.log(page);
      const fetchApi = fetch(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${page}`)
      .then((response) => response.json())
      .then((result) => setMais(result));

      console.log(mais)
      return fetchApi;
    }
  function setDt() {
    const fetchApi = fetch("https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518")
    .then((response) => response.json())
    .then((result) => setData(result));
    return fetchApi;
  }
  
  useEffect(() => {
    setDt();
    totalPags();
  },[]);

  return (
    <div className='divBotao'>
      {console.log(data)}
      {data.map((post, index) => (
            <Posts key={index} postagem={post} />
          ))}
       {page > 1 && page < totalPaginas ? (
        mais.map((post, index) => (
          <AdicionalPages key={index} postagem={post} />
        )))
      : '' }
       <button className='botao' onClick={clickButton}>Carregar mais...</button>
    </div>
  )

}

export default Comp;
