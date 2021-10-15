import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react';
import '../styles/postagem.scss'
import logo from '../assets/images/logo.png';

export function Postagem() {
    const params = useParams();
    const [dados, setDados] = useState([])
    useEffect(() => {
        axios.get(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${params.slug}`)
            .then(dados => {
                setDados(dados.data)
                console.log(dados)
            })
    }, [])
    return (
        <div>
            {dados.map(dado => {
                return (
                    <div id="page-content" className="container">
                        <img id="logo" src={logo} alt="Logo da Apiki" />
                        <img src={dado._embedded['wp:featuredmedia'][0].source_url} />
                        <h1>{dado.title.rendered}</h1>
                        <div dangerouslySetInnerHTML={{__html: dado.content.rendered}}></div>
                    </div>

                )
            })}
        </div>
    )
}