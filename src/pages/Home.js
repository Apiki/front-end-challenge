import logo from '../assets/images/logo.png';
import '../styles/home.scss'
import { Card } from '../components/Card'
import axios from 'axios'
import { useEffect, useState } from 'react';
import $ from 'jquery';
import {Link} from 'react-router-dom'
export function Home() {
    const [dados, setDados] = useState([])
    const [page, setPage] = useState(2)
    const [numPages, setNumPages] = useState(0)
    useEffect(() => {
        axios.get('https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=1')
            .then(dados => {
                setDados(dados.data)
                setNumPages(parseInt(dados.headers['x-wp-totalpages']))
            })
    }, [])

    async function handleLoadPages() {
        
        //OBS: Nas páginas 13,14,16 e 17 da API, os dados não possuem o indice "wp:featuredmedia" no atributo _embedded, por isso ocasionou um erro na renderição dos elementos correspondentes a essa requisição.

        let url = `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${page}`
        await axios.get(url)
            .then(dados => {   
                if (page <= numPages - 1) {
                    setPage(page + 1)
                        dados.data.map(dado => {
                            $('#div-cards').append(`<div class="card">
                            <div>
                                <img src=${dado._embedded['wp:featuredmedia'][0].source_url} alt="" />
                                <h2>${dado.title.rendered}</h2>
                            </div>
                            <a href=/postagens/${dado.slug}>Leia mais</a>
                        </div>`)
                        })

                } else {
                    $('#carregar').css('display', 'none')
                }
               
            })
    }

    return (
        <div id="content">
            <img src={logo} alt="Logo da Apiki" />
            <h1>Últimas postagens - Desenvolvimento</h1>
            <div id="div-cards">
                {dados.map(dado => {
                    
                    return (
                        <Card title={dado.title.rendered} link={`/postagens/${dado.slug}`} img={dado._embedded['wp:featuredmedia'][0].source_url} />
                    )
                    
                    
                })}

            </div>
            <button id="carregar" onClick={handleLoadPages}>Carregar mais...</button>


        </div>

    )
}