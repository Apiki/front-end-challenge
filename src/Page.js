 
/*
 * @name Page / Página de conteúdo
 * @author Anderson Daniel Lima do Nascimento <andersondanieln@gmail.com>
 */

import './layout/style.css';
import Header from './layout/Header';
import Articles from './layout/Articles';
import GoToTop  from './layout/GoToTop';
import { useParams } from "react-router";
import parse from 'html-react-parser';
import {useEffect, useState} from 'react';


 

function ArticlePage(props){
       return (

        <article className="article-page">
            <h1 className="article-title">{props.title}</h1>
            <div className="article-page-info">
               <ul>
                <li>
                    <p>Publicado em: </p>
                    <p><b>{props.date}</b></p>
                </li>
                <li>
                    <p>Última Review: </p>
                    <p><b>{props.lastMod}</b></p>
                </li>
                <li>
                    <p>Autor:</p>
                    <p><b>{props.author}</b></p>
                </li>
               </ul>
            </div>
            <div className="article-thumb">
                <img src={props.image_url}/>
            </div>
            <div className="article-page-content">
                {parse(props.content)}
            </div>
        </article>

       )
}
function Page(props){
  
    let { slug } = useParams(); 
    
    let [pageDataInfo, setPageDataInfo] = useState([]);
 
     
    useEffect(()=>{

        if(slug === undefined || slug === "")
        window.location.href = "/";

        async function pageDataUpdate(){

            const baseUrl           = "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug="+slug;
            const fetch_url         = await fetch(baseUrl);
            const pageData          = await fetch_url.json(); 
            
            if(pageData.length <= 0)
            window.location.href = "/";
            
            setPageDataInfo(pageData);
           
            console.log(pageData);
        }
        pageDataUpdate();
    
    }, []);
     
 


    return (
    <div>
        <Header/>
        <Articles>
          
           {
   
            pageDataInfo.map((pageData, index)=>{
                document.title = pageData.title.rendered + ' - Apiki!';
                return (
                    <ArticlePage 
                    key       = {index}
                    title     = {pageData.title.rendered}
                    image_url = {pageData._embedded['wp:featuredmedia'][0]['source_url']}
                    content   = {pageData.content.rendered.toString()}
                    date      = {new Date(pageData.date).toLocaleDateString('pt-br')}
                    lastMod   = {new Date(pageData.modified).toLocaleDateString('pt-br')}
                    author    = {pageData._embedded.author[0].name}
                    />
                )
            })
           }
        </Articles>
        <GoToTop/>
    </div>

   )

}

export default Page;