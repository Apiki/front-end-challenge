import React,{useState, useEffect} from 'react'
import tmdb from '../../services/tmdb'
import{Row , Col} from "react-bootstrap"
import Caaa from "../../components/card/Caaa"
const Cartaz = () => {
  // declaração de state 
  
  let [series,setSeries] = useState([])
  useEffect(()=>{
    async function data() {
      const pega = await tmdb.get('/tv/airing_today?language=pt-BR');
      const data= pega.data.results
 
      setSeries(data)
    }
    data();
  },[])
  return (
    <div>
        <Row xs={1} xxl={7} xl={5} md={3} sm={2} >
      
      {series.map(item=>(
         <Col className='mb-3'>   
        <Caaa id={item.id} marca={item.name} modelo={item.original_name} imagem={item.poster_path} cor={item.original_language} ano={item.first_air_date} nomebotao='Mais detalhes' />
        </Col>
      ))}
      
      </Row>
        
    </div>
  )
}

export default Cartaz