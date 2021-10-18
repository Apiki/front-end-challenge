import React, { useEffect, useState } from "react";
import axios from 'axios';
import parse from 'html-react-parser';
import Cabecalho from '../../components/cabecalho/cabecalho';
import Footer from '../../components/footer/footer';
import { handleFormatDate } from '../date-formato/index';
import {    useParams} from "react-router-dom";
const Interna = () => {
    const [data, setData] = useState();
    const [title, setTitle] = useState('');
    const [img, setImg] = useState('');
    const [content, setContent] = useState('');
    const [publish, setPublish] = useState();
    const [modified, setModified] = useState();
    useEffect(() => {
        axios.get('https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=' + slug)
            .then(function (response) {
                console.log(response);
                setTitle(response.data[0].title.rendered)
             
         
                if(response.data[0]._embedded.hasOwnProperty('wp:featuredmedia')){
                    setImg(response.data[0]._embedded['wp:featuredmedia'][0].source_url)
                }
                
                setContent(response.data[0].content.rendered)
                setPublish(response.data[0].date)
                setModified(response.data[0].modified)

            })
            .catch(function (error) {
                console.log(error);
            });


    }, [])

    let { slug } = useParams();
    return (
        <>
        <div className="container">
            <Cabecalho />
            <h1 className="text-center mt-4  mb-4">{title} </h1>
            <div className="row mx-auto mb-3">
            <div className="col-md-6 text-center">
                 <span className="font-weight-bold">Publicação:</span> {handleFormatDate(publish)}
            </div>
            <div className="col-md-6  text-center">
                <span className="font-weight-bold">Modificação:</span>  {handleFormatDate(modified)}
            </div>
            </div>
           
            <div className="text-center">
            <img src={img} className=" img-fluid rounded mb-4"  /> 
            </div>
           
            {parse(content)}
        </div>
        <Footer />
        </>
    )
}

export default Interna;