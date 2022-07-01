import React,{useState, useEffect} from 'react'
import tmdb from '../../services/tmdb'
import{Row , Col, Button} from "react-bootstrap"
import Ca from "../../components/card/Ca"
import styles from "./inicial.module.css"
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import {RiSearchEyeLine} from 'react-icons/ri'
const Filmes = () => {
  // declaração de state 
  const { register, handleSubmit, getValues } = useForm();
  const navigate = useNavigate
  function receiveData() {
    const values = getValues();
    navigate("/busca", { state: values.busca });
  }
  let [filmes,setFilmes] = useState([])
  const [pages,setPages] = useState()
  let [page,setPage]=useState()
  
  useEffect(()=>{
    async function data() {
      const pega = await tmdb.get('posts?_embed&categories=518');
      console.log(pega.headers["x-wp-totalpages"])
      setPages(pega.headers["x-wp-totalpages"])
      const data= pega.data
      
      setFilmes(data)
      
      setPage(2)
      
    }
    data();
  },[])
  function atualizar(){
      if(page<pages){
        async function data() {
          const pega = await tmdb.get('posts?_embed&categories=518');
          const data= pega.data
          const nova = filmes.concat(data)
          setFilmes(nova)
        }
        data();
        setPage(page+1)
      }
  }
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
      <h1 className={styles.txt}>Pesquise o assunto que você está procurando aqui</h1>
      <div className={styles.search}>
                <form
                  className="mb-3 "
                  controlId="busca"
                  placeholder="Buscar..."
                >
                  <input type="text" className={styles.form} {...register("busca")} />
                </form>
                <div className={styles.buttonArea}>
                <Button type="submit" className={"ml-3 "+ styles.btbusca} variant="dark" onClick={handleSubmit(receiveData)} >
                  <RiSearchEyeLine />
                    Search Now
                </Button>
                </div>
              </div>
    </div>
   </div>
   <div className={styles.fundol}>

    <div className={styles.listagem}>
       <Row xs={1}  xxl={4} xl={4} md={2} sm={1} >
      
      {filmes.map(item=>( 
        <Col className='mb-3'>   
          <Ca className={styles.card} id={item.slug} marca={item.title.rendered} modelo={item.status} imagem={item._embedded["wp:featuredmedia"][0].source_url} cor={item.link} ano={item.date_gmt} nomebotao='Mais detalhes' />  
        </Col>
      ))} 
      </Row>
       <Button className={'btn' +styles.bt}onClick={atualizar()} >Ver mais</Button> 
        
    </div>
  </div>
</>
  )
}

export default Filmes