import React,{useEffect,useState} from 'react'
import Caa from '../../components/card/Caa'
import { useParams } from 'react-router-dom'
import tmdb from '../../services/tmdb'
import {Row,Col,Card} from 'react-bootstrap'
import '../../App.css'
import '../det.css'
const FilmesD = () => {
    const params = useParams()
    let [serie,setSerie] = useState({})
    let [temp,setTemp] = useState([])
    let [temp2,setTemp2] = useState([])
  useEffect(()=>{
    async function data() {
      const pega = await tmdb.get('/tv/'+params.id+'?language=pt-BR');
      const data= pega.data
      const data1 = pega.data.seasons
      setSerie(data)
      setTemp2(data1)
    }
    async function data1() {
      const pega = await tmdb.get('/tv/'+params.id+'/credits?language=pt-BR');
      const data= pega.data.cast
    
      setTemp(data)
    }
    data()
    data1()
  },[params.id])
  return (
    <div className='cont'>
            
    <h1>{serie.name}</h1>

    <Row>
        <Col md={4}>
            <Card>
                <Card.Img variant="top" src={ serie.poster_path ? 'https://image.tmdb.org/t/p/w500'+ serie.poster_path : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6pdTz5L8m-BnQaPfYvrKXSpvTxri_DDtSqw&usqp=CAU'} />
            </Card>
        </Col>
        <Col md={8}>
            <p><strong>Título Original: </strong>{serie.original_name}</p>
            <p><strong>Popularidade: </strong>{serie.popularity}</p>
            <p><strong>Data de Lançamento: </strong>{serie.first_air_date}</p>
            <p><strong>numero de temporadas: </strong>{serie.number_of_seasons}</p>
            <p><strong>numero de episodios: </strong>{serie.number_of_episodes}</p>
            <p><strong>Sinopse: </strong>{serie.overview}</p>
        </Col>
    </Row>
    <Row>
      <h1 className='mb-3'>Temporadas:</h1>
    </Row>
    <Row xs={1} xxl={10} xl={7} md={5} sm={3} >
      
      {temp2.map(item=>(
         <Col className='mb-3'>   
          <Card>
          <Card.Img variant="top" src={ item.poster_path ? 'https://image.tmdb.org/t/p/w500'+ item.poster_path : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6pdTz5L8m-BnQaPfYvrKXSpvTxri_DDtSqw&usqp=CAU'} />
          <Card.Body>
              <Card.Title>{item.name} - {item.season_number}</Card.Title>
          </Card.Body>
          </Card>
        </Col>
      ))}
      
      </Row>
      <Row>
      <h1 className='mb-3'>Atores:</h1>
      </Row>
      <Row xs={1} xxl={10} xl={7} md={5} sm={3} >
      
      {temp.map(item=>(
         <Col className='mb-3'>   
        <Caa id={item.id} marca={item.nome} modelo={item.original_name} imagem={item.profile_path} cor={item.character} ano={item.gender} nomebotao='Mais detalhes' />
        </Col>
      ))}
      
      </Row>
</div>
  )}

export default FilmesD