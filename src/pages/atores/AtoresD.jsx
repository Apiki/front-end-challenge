import React,{useEffect,useState} from 'react'
import Caaa from '../../components/card/Caaa'
import Ca from '../../components/card/Ca'
import { useParams } from 'react-router-dom'
import tmdb from '../../services/tmdb'
import {Row,Col,Card} from 'react-bootstrap'
import '../../App.css'
import '../det.css'
const AtoresD = () => {
    const params = useParams()
    let [ator,setAtor] = useState({})
    let [filmes,setFilmes] = useState([])
    let [series,setSeries] = useState([])
  useEffect(()=>{
    async function data() {
      const pega = await tmdb.get('/person/'+params.id+'?language=pt-BR');
      const data= pega.data
      setAtor(data)
    }
    async function data1() {
      const pega = await tmdb.get('/person/'+params.id+'/movie_credits?language=pt-BR');
      const data= pega.data.cast
      setFilmes(data)
    }
    async function data2() {
      const pega = await tmdb.get('/person/'+params.id+'/tv_credits?language=pt-BR');
      const data= pega.data.cast
      setSeries(data)
    }
    data2()
    data()
    data1()
  },[params.id])
  return (
    <div className='cont'>
            
    <h1 className='text'>{ator.name}</h1>

    <Row>
        <Col md={4}>
            <Card>
                <Card.Img variant="top" src={ ator.profile_path ? 'https://image.tmdb.org/t/p/w500'+ ator.profile_path : 'https://www.prescriptum.com.br/wp-content/uploads/2015/12/placeholder-usuario-500x500.jpg'} />
            </Card>
        </Col>
        <Col md={8}>
            <p><strong>nome: </strong>{ator.name}</p>
            <p><strong>Popularidade: </strong>{ator.popularity}</p>
            <p><strong>Genero: </strong>{ator.gender===1? 'Feminino': (ator.gender ===2?'Masculino':'Indefinido')}</p>
            <p><strong>Data de aniversario: </strong>{ator.birthday}</p>
            <p><strong>Sinopse: </strong>{ator.biography}</p>
        </Col>
    </Row>
    <Row>
      <h1 className='mb-3'>Filmes participantes:</h1>
    </Row>
    <Row xs={1} xxl={10} xl={7} md={5} sm={3} >
      
      {filmes.map(item=>(
         <Col className='mb-3'>   
        <Ca id={item.id} marca={item.title} modelo={item.original_title} imagem={item.poster_path} cor={item.original_language} ano={item.release_date} nomebotao='Mais detalhes' />
        </Col>
      ))}
      
      </Row>
      <Row>
      <h1 className='mb-3'>Series participantes:</h1>
    </Row>
    <Row xs={1} xxl={10} xl={7} md={5} sm={3} >
      
      {series.map(item=>(
         <Col className='mb-3'>   
        <Caaa id={item.id} marca={item.name} modelo={item.original_name} imagem={item.poster_path} cor={item.original_language} ano={item.first_air_date} nomebotao='Mais detalhes' />
        </Col>
      ))}
      
      </Row>
</div>
  )}

export default AtoresD