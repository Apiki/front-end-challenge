import React from 'react'
import Ca from '../card/Ca'
import{ Row,Col} from 'react-bootstrap'
import oi
import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import { render } from '@testing-library/react';
const Objeto = () => {
const carros =[
  {marca:'vw', modelo:'gol',cor:'vermelho',ano:'5',foto:'https://th.bing.com/th/id/OIP.kMdi1eTkts9J6xX1qu914QHaE7?pid=ImgDet&rs=1'},
  {marca:'gm', modelo:'corsa',cor:'vermelho',ano:'4',foto:'https://th.bing.com/th/id/OIP.SCyKALloUsnWiOPRozFySgHaE7?pid=ImgDet&rs=1'},
  {marca:'fiat', modelo:'uno',cor:'amarelo',ano:'3',foto:'https://th.bing.com/th/id/R.fa0bc87c0f46c3b41f03b8f9c7215a97?rik=yJ3PzO8pP%2fd8Rw&riu=http%3a%2f%2f2.bp.blogspot.com%2f-4jY0lVakpAc%2fTvOPJK5mK1I%2fAAAAAAAAAhg%2fHJXjiliRuyo%2fs1600%2fFIAT-UNO-CARRO.jpg&ehk=AUn1BLxlPO%2fLQAScUuDZM4gefVKRnj8sVCVH8VuNUxc%3d&risl=&pid=ImgRaw&r=0'},
  {marca:'ford', modelo:'focus',cor:'branco',ano:'2',foto:'https://th.bing.com/th/id/OIP.fVVvJA7FrynMozvHyhUgtAHaFS?pid=ImgDet&rs=1'},
  {marca:'vw', modelo:'gol',cor:'vermelho',ano:'5',foto:'https://th.bing.com/th/id/OIP.kMdi1eTkts9J6xX1qu914QHaE7?pid=ImgDet&rs=1'},
  {marca:'gm', modelo:'corsa',cor:'vermelho',ano:'4',foto:'https://th.bing.com/th/id/OIP.SCyKALloUsnWiOPRozFySgHaE7?pid=ImgDet&rs=1'},
  {marca:'fiat', modelo:'uno',cor:'amarelo',ano:'3',foto:'https://th.bing.com/th/id/R.fa0bc87c0f46c3b41f03b8f9c7215a97?rik=yJ3PzO8pP%2fd8Rw&riu=http%3a%2f%2f2.bp.blogspot.com%2f-4jY0lVakpAc%2fTvOPJK5mK1I%2fAAAAAAAAAhg%2fHJXjiliRuyo%2fs1600%2fFIAT-UNO-CARRO.jpg&ehk=AUn1BLxlPO%2fLQAScUuDZM4gefVKRnj8sVCVH8VuNUxc%3d&risl=&pid=ImgRaw&r=0'},
  {marca:'ford', modelo:'focus',cor:'branco',ano:'2',foto:'https://th.bing.com/th/id/OIP.fVVvJA7FrynMozvHyhUgtAHaFS?pid=ImgDet&rs=1'},
  {marca:'vw', modelo:'gol',cor:'vermelho',ano:'5',foto:'https://th.bing.com/th/id/OIP.kMdi1eTkts9J6xX1qu914QHaE7?pid=ImgDet&rs=1'},
  {marca:'gm', modelo:'corsa',cor:'vermelho',ano:'4',foto:'https://th.bing.com/th/id/OIP.SCyKALloUsnWiOPRozFySgHaE7?pid=ImgDet&rs=1'},
  {marca:'fiat', modelo:'uno',cor:'amarelo',ano:'3',foto:'https://th.bing.com/th/id/R.fa0bc87c0f46c3b41f03b8f9c7215a97?rik=yJ3PzO8pP%2fd8Rw&riu=http%3a%2f%2f2.bp.blogspot.com%2f-4jY0lVakpAc%2fTvOPJK5mK1I%2fAAAAAAAAAhg%2fHJXjiliRuyo%2fs1600%2fFIAT-UNO-CARRO.jpg&ehk=AUn1BLxlPO%2fLQAScUuDZM4gefVKRnj8sVCVH8VuNUxc%3d&risl=&pid=ImgRaw&r=0'},
  {marca:'ford', modelo:'focus',cor:'branco',ano:'2',foto:'https://th.bing.com/th/id/OIP.fVVvJA7FrynMozvHyhUgtAHaFS?pid=ImgDet&rs=1'},
  {marca:'vw', modelo:'gol',cor:'vermelho',ano:'5',foto:'https://th.bing.com/th/id/OIP.kMdi1eTkts9J6xX1qu914QHaE7?pid=ImgDet&rs=1'},
  {marca:'gm', modelo:'corsa',cor:'vermelho',ano:'4',foto:'https://th.bing.com/th/id/OIP.SCyKALloUsnWiOPRozFySgHaE7?pid=ImgDet&rs=1'},
  {marca:'fiat', modelo:'uno',cor:'amarelo',ano:'3',foto:'https://th.bing.com/th/id/R.fa0bc87c0f46c3b41f03b8f9c7215a97?rik=yJ3PzO8pP%2fd8Rw&riu=http%3a%2f%2f2.bp.blogspot.com%2f-4jY0lVakpAc%2fTvOPJK5mK1I%2fAAAAAAAAAhg%2fHJXjiliRuyo%2fs1600%2fFIAT-UNO-CARRO.jpg&ehk=AUn1BLxlPO%2fLQAScUuDZM4gefVKRnj8sVCVH8VuNUxc%3d&risl=&pid=ImgRaw&r=0'},
  {marca:'ford', modelo:'focus',cor:'branco',ano:'2',foto:'https://th.bing.com/th/id/OIP.fVVvJA7FrynMozvHyhUgtAHaFS?pid=ImgDet&rs=1'},
]
function Items(itens) {
  return (
    
      {itens &&
        itens.map((item) => (
          <div>
            <Ca  marca={item.marca} modelo={item.modelo} imagem={item.foto} cor={item.cor} ano={item.ano} nomebotao='Mais detalhes' />
          </div>
        ))}
    
  );
}

function PaginatedItems({ itemsPerPage }) {
  // começa com a lista vazia de itens.
  const [itens, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // offset de itens na pagina
  // seguindo a api
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // fetch nos itens.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(carros.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(carros.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // efeito de clicar para ir para outra pagina.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % carros.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };


  
  
  
  
    return (
      <>
        <Items currentItems={carros} />
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
        />
      </>
    );
  }
  
  // Add a <div id="container"> to your HTML to see the componend rendered.
  
  ReactDOM.render(
    <PaginatedItems itemsPerPage={4} />,
    document.getElementById('contain')
  );
    
 /* return (
    
    <Row xs={1} md={4} >
      
      {carros.map(item=>(
         <Col>   
        <Ca  marca={item.marca} modelo={item.modelo} imagem={item.foto} cor={item.cor} ano={item.ano} nomebotao='Mais detalhes' />
        </Col>
      ))}
      
      </Row>
    
  )*/
}


export default Objeto