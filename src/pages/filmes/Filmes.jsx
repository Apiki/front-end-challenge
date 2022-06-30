import React,{useState, useEffect} from 'react'
import tmdb from '../../services/tmdb'
import{Row , Col} from "react-bootstrap"
import Ca from "../../components/card/Ca"
import styles from "./inicial.module.css"
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
<>
   <div className={styles.landing}>
    <div className={styles.titlebox}>
     <h1 className={styles.title}>APIKI API</h1>
     <h1 className={styles.title}>Dream system</h1>
    </div>
    <div className={styles.rodabox}>
     <h2 className='text-dark'>Aqui é onde você pode encontrar inumeras ideias para se atualizar no mundo dos softwares</h2>
     <h2 className='text-dark'>Um site idealizado para desenvolvedor!</h2>
    </div>
    <div className={styles.searchbox}>
      <h1>Pesquise o assunto que você está procurando aqui</h1>
      
    </div>
   </div>
    <div className='listagem'>
       <Row xs={1} xxl={7} xl={5} md={3} sm={2} >
      
      {filmes.map(item=>( 
        <Col className='mb-3'>   
          <Ca id={item.slug} marca={item.title.rendered} modelo={item.status} imagem={item._embedded["wp:featuredmedia"][0].source_url} cor={item.link} ano={item.date_gmt} nomebotao='Mais detalhes' />  
        </Col>
      ))} 
      
      </Row>
        
    </div>
</>
  )
}

export default Filmes