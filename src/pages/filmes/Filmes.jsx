import React,{useState, useEffect} from 'react'
import tmdb from '../../services/tmdb'
import{Row , Col} from "react-bootstrap"
import Ca from "../../components/card/Ca"
const Filmes = () => {
  // declaração de state 
  
  let [filmes,setFilmes] = useState([])
  const [pages,setPages] = useState()
  useEffect(()=>{
    async function data() {
      const pega = await tmdb.get('posts?_embed&categories=518');
      console.log(pega.headers["x-wp-totalpages"])
      setPages(pega.headers["x-wp-totalpages"])
      const data= pega.data
      const imagem = data[0]._embedded["wp:featuredmedia"][0].source_url
      setFilmes(data)
      console.log(imagem);
      console.log(data)
      
    }
    data();
  },[])
  return (
    <div>
       <Row xs={1} xxl={7} xl={5} md={3} sm={2} >
      
      {filmes.map(item=>( 
         <Col className='mb-3'>   
          <Ca id={item.slug} marca={item.title.rendered} modelo={item.status} imagem={item._embedded["wp:featuredmedia"][0].source_url} cor={item.link} ano={item.date_gmt} nomebotao='Mais detalhes' />  
        </Col>
      ))} 
      
      </Row>
        
    </div>
  )
}

export default Filmes