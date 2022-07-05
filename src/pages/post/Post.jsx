import React,{useState, useEffect} from 'react'
import tmdb from '../../services/tmdb'
import{Row , Col, Button} from "react-bootstrap"
import Ca from "../../components/card/Ca"
import styles from "./inicial.module.css"
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import {RiSearchEyeLine} from 'react-icons/ri'
import {AiOutlineArrowDown, AiOutlineArrowUp} from 'react-icons/ai'
import Swal from 'sweetalert2'
const Post = ({black}) => {
  // declaração de state 
  const { register, handleSubmit, getValues } = useForm();
  const navigate = useNavigate()

  // função que transfere a busca de posts como slug no url
  function receiveData() {
    const values = getValues();
    const pesquisa = values.busca.toLowerCase()
    const newp = pesquisa.replace(/ /g,"-")
   
    navigate("/busca/" + newp);
  }
   // declaração de state 
  let [post,setPosts] = useState([])
  const [pages,setPages] = useState()
  let [page,setPage]=useState()
  
  // react hook para puxar coisas da api
  useEffect(()=>{
    async function data() {
      const pega = await tmdb.get('posts?_embed&categories=518');
     
      setPages(pega.headers["x-wp-totalpages"])
      const data= pega.data
      
      setPage(2)
      setPosts(data)
      
      
    }
    data();
  },[])
  
  // função que atualiza a lista de posts com sweet alert pra quando nao tem mais posts
  function atualizar(){
    // se ainda tiver paginas na API pra atualizar
    if(page<pages){
      // função de atualizar
      async function d() {
        console.log(page);
        const pega = await tmdb.get('posts?_embed&categories=518&page='+ page);
        const data= pega.data
        const nova = post.concat(data)
      
        setPosts(nova)
        setPage(page+1)
       
        
      } ]
      // execução da função
      d();
      }else{
        // sweet alert pra caso nao seja possivel atualizar a pagina com os posts
        // bloco executado somente para quando nao tem mais paginas na API para serem puxadas
        Swal.fire({
          icon: 'error',
          title: 'Oops!!!',
          text: 'Acabaram os posts!',
          footer: 'Volte em breve'
        })
        }

}   
        
       
        
      
  return (
<>
   {/* landing da pagina inicial */}
   <div className={styles.landing}>
    <div className={styles.titlebox}>
     <h1 className={styles.title}>APIKI API</h1>
     <h1 className={styles.title}>Dream system</h1>
    </div>
    <div className={styles.rodabox}>
     <h2 className='text-dark'>Aqui é onde você pode encontrar inúmeras ideias para se atualizar no mundo dos softwares</h2>
     <h2 className='text-dark'>Um site idealizado para desenvolvedor!</h2>
    </div>
     {/* caixa de busca */}
    <div className={styles.searchbox} id="lista">
      <h1 className={styles.txt}>Pesquise o assunto que você está procurando aqui</h1>
      <div className={styles.search}>
                <form
                  className="mb-3 "
                  controlid="busca"
                  placeholder="Buscar..."
                >
                  <input type="text" className={styles.form} {...register("busca")} />
                </form>
                {/* js para adicionar o evento do enter clicar no botao de buscar */}
                {
                  document.addEventListener("keypress", function(e) {
                    if(e.key === 'Enter') {
                    
                        var btn = document.querySelector("#submit");
                      
                      btn.click();
                    
                    }
                  })
                }
                <div className={styles.buttonArea}>
                <Button type="submit" id="submit" className={"ml-3 "+ styles.btbusca} variant="dark" onClick={handleSubmit(receiveData)} >
                  <RiSearchEyeLine />
                    Search Now
                </Button>
                </div>
              </div>
    </div>
   </div>
   {/* area com o map dos posts da API apiki */}
   <div className={styles.fundol}>

    <div className={styles.listagem} >
       <Row xs={1}  xxl={4} xl={4} md={2} sm={1} >
      
      {post && post.map(item=>( 
        <Col className='mb-3' key={item.slug}>   
         
          <Ca className={styles.card} id={item.slug} marca={item.title.rendered} modelo={item.status} imagem={ (item._embedded["wp:featuredmedia"]) ? (item._embedded["wp:featuredmedia"][0].source_url) : ("")}  cor={item.link} ano={item.date_gmt} nomebotao='Sabia mais' /> 

        </Col>
      )) }
      </Row>
      {post.lenght !== 0  && <Button className={styles.bt} onClick={atualizar} id='fim' ><AiOutlineArrowDown className={styles.icon}/></Button> }
      
    </div>
  </div>
  {/* botoes de assecibilidade do usuario mobile so aparecem nos dispositivos tablet e celular */}
  <Button className={styles.bt2} href="#lista"  ><AiOutlineArrowUp className={styles.icon} /></Button>
  <Button className={styles.bt3} href="#fim"  ><AiOutlineArrowDown className={styles.icon}/></Button>
</>
  )
}

export default Post