import logo from '../imagens/logo.svg';
import { Link } from 'react-router-dom';
import '../styles/pages/home-styles.css';
import api from '../services/api';
import React, { useEffect, useState } from "react";



interface WPEmbedded {
    'wp:featuredmedia': { source_url: string }[]
}
interface List {
    id: number;
    slug: String;
    link: '';
    title:
    {
        rendered: String;
    };
    _embedded: WPEmbedded

}

function Page() {
   

    const [list, setList] = useState<List[]>([]);
     
    useEffect(() => {
        api.get('posts?_embed&categories=518&page=2').then(response => {
            setList(response.data);
        });
    }, []);

   
    return (
        <div id='page-home'>
            <aside>
                <header>
                    <img src={logo} alt='Logo' width='100%'></img>
                    <h2> Seja Um Dev </h2>
                    <p> Escolha vim para o lado da força :) </p>
                </header>

                <footer>
                    <strong> Sabinópolis</strong>
                    <span> Minas Gerais </span>
                </footer>


            </aside>
            <div id='c1'>
                <h1>Desenvolvimento</h1>
                <h4>Desevolva seu negócio!</h4>
                {list.map(list => {                     
                    return (
                        <div id='conteudo' key={list.id}>
                            <img src={list._embedded['wp:featuredmedia'][0].source_url} width='50%'></img>
                            <h1>{list.title.rendered}</h1>                             
                           <a href='/conteudo'> {list.slug}</a>

                        </div>

                    );
                })}

            </div>


            <Link to='/Home' className='create-list' >
                <h1>Voltar</h1>
                
            </Link>

        </div>

    );
}

export default Page;