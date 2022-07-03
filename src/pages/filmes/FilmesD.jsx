import React,{useEffect,useState} from 'react'
import logo from './logo.jpeg'
import { useLocation, useParams } from 'react-router-dom'
import tmdb from '../../services/tmdb'
import {Row,Col,Card} from 'react-bootstrap'
import '../../app.module.css'
import '../det.css'
import { useLayoutEffect } from 'react'
const FilmesD = () => {
    const params = useParams()
    const location = useLocation();
    let [filme,setFilmes] = useState({})
    let [ator,setAtor] = useState([])
  useLayoutEffect(()=>{
    async function data() {
      const pega = await tmdb.get('posts?_embed&slug='+params.id);
      const data= pega.data
      console.log(data)
      setFilmes(data[0])
    }
    async function data1() {
      const pega = await tmdb.get('/movie/'+params.id+'/credits?language=pt-BR');
      const data= pega.data.cast
  
      setAtor(data)
    }
    data()
    
  },[params.id])
  console.log(filme)
  return (
    <div className='cont'>
            
    {filme && <><h1>{filme}</h1>
    
    <Row>
        <Col md={8}>
            <p dangerouslySetInnerHTML={{ __html: filme.content.rendered }}></p>
        </Col>
    </Row>
    </>
}
    
    
    <Row xs={1} xxl={10} xl={7} md={5} sm={3} >
      
    
      
      </Row>
</div>
  )}

export default FilmesD