import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import tmdb from '../../services/tmdb'
import {Row,Col} from 'react-bootstrap'
import styles from './detalhe.module.css'
import dayjs from 'dayjs'
import erro from './errop3.png'
const PostD = () => {
   // declaração de state 
    const params = useParams()
    let [post,setPost] = useState({})
    // react hook para puxar coisas da api
  useEffect(()=>{
    async function data() {
      const pega = await tmdb.get('posts?_embed&slug='+params.id);
      const data= pega.data
      
      setPost(data[0])
    }
    
    if(params.id){
    data()}
    
  },[params.id])
  
  if (post && post !== undefined) {
    
  
  return (
    <div className={styles.cont}>
            
    {post.title &&<>
     <h1 className={styles.title}>{post.title.rendered}</h1>
        <h3 className={styles.subtitle} >{post._embedded.author[0].name} - {dayjs(post.date_gmt).format("DD/MM/YYYY HH:mm:ss")}</h3>
     </>
     } 
    
    <Row>
        <Col md={12}>
            {post.content && <p className={styles.corpo} dangerouslySetInnerHTML={{ __html: post.content.rendered }}></p> }
        </Col>
    </Row>
    

</div>
  )} else if (post === undefined){
      return <img className={styles.erro} src={erro} alt="" />
  }
    }
export default PostD