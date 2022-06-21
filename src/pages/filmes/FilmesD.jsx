import React,{useEffect,useState} from 'react'
import Caa from '../../components/card/Caa'
import { useParams } from 'react-router-dom'
import tmdb from '../../services/tmdb'
import {Row,Col,Card} from 'react-bootstrap'
import '../../App.css'
import '../det.css'
const FilmesD = () => {
    const params = useParams()
    let [filme,setFilmes] = useState({})
    let [ator,setAtor] = useState([])
  useEffect(()=>{
    async function data() {
      const pega = await tmdb.get('/movie/'+params.id+'?language=pt-BR');
      const data= pega.data
      setFilmes(data)
    }
    async function data1() {
      const pega = await tmdb.get('/movie/'+params.id+'/credits?language=pt-BR');
      const data= pega.data.cast
  
      setAtor(data)
    }
    data()
    data1()
  },[params.id])
  return (
    <div className='cont'>
            
    <h1>{filme.title}</h1>

    <Row>
        <Col md={4}>
            <Card>
                <Card.Img variant="top" src={ filme.poster_path ? 'https://image.tmdb.org/t/p/w500'+ filme.poster_path : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6pdTz5L8m-BnQaPfYvrKXSpvTxri_DDtSqw&usqp=CAU'} />
            </Card>
        </Col>
        <Col md={8}>
            <p><strong>Título Original: </strong>{filme.original_title}</p>
            <p><strong>Popularidade: </strong>{filme.popularity}</p>
            <p><strong>Data de Lançamento: </strong>{filme.release_date}</p>
            <p><strong>Orçamento: </strong>{filme.budget}</p>
            <p><strong>Sinopse: </strong>{filme.overview}</p>
        </Col>
    </Row>
    <Row>
      <h1 className='mb-3'>Atores:</h1>
    </Row>
    <Row xs={1} xxl={10} xl={7} md={5} sm={3} >
      
      {ator.map(item=>(
         <Col className='mb-3'>   
        <Caa id={item.id} marca={item.nome} modelo={item.original_name} imagem={item.profile_path} cor={item.character} ano={item.gender} nomebotao='Mais detalhes' />
        </Col>
      ))}
      
      </Row>
</div>
  )}

export default FilmesD