import { useEffect, useState } from "react";
import api from '../services/api';
import '../styles/pages/conteudo-styles.css';
import { Link } from 'react-router-dom';

interface WPEmbedded {
    'wp:featuredmedia': { source_url: string }[]
}
interface List {
    id: number;
    title:
    {
        rendered: String;
    };
    excerpt:
    {
        rendered: String;
    };
    content:
    {
        rendered: String;
    };
    _embedded: WPEmbedded



}


function Conteudo() {
    const [list, setList] = useState<List[]>([]);


    useEffect(() => {
        api.get('posts?_embed&slug=wordpress-escolha-site-pequenas-empresas').then(response => {
            setList(response.data);
        });
    }, []);
    return (
        <div id='pag-inter'>
            <div id='pag-cont'>
                {list.map(list => {
                    return (

                        <div >
                            <div >
                                <ul>
                                    <li> <a href='/Home'>Desenvolvimento</a> </li>
                                    <li> <a href='https://www.linkedin.com/in/let%C3%ADcia-tavares-b01a0815b/'>Linkedin</a> </li>
                                    <li> <a href='https://www.instagram.com/leh.tavaress/'>Instagram</a></li>

                                </ul>
                            </div>
                            <div id='pag-inter-con' key={list.id}>


                                <div id='lateral'>
                                    <h1>{list.title.rendered}</h1>
                                    <h3>{list.excerpt.rendered}</h3>
                                </div>

                                <img src={list._embedded['wp:featuredmedia'][0].source_url} width='50%'></img>
                                <p>{list.content.rendered}</p>


                            </div>
                        </div>

                    );
                })}
                <Link to='/' className='create-list' >
                    <h1>Página Inicial</h1>

                </Link>
            </div>


        </div>


    );
}

export default Conteudo;