import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { handleFormatDate } from '../date-formato';
const PaginaPrincipal = () => {
    const [data, setData] = useState([]);
    const [nPage, setNPage] = useState(10);
    const [wTotal, setWTotal] = useState(0);
    useEffect(() => {
        axios.get('https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=1')
            .then(function (response) {
                console.log(response)
                setWTotal(response.headers['x-wp-totalpages'])
                setData(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });


    }, [])
    
    const CarregarMais = (event) => {
        return new Promise((resolve, reject) => {
            axios.get('https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=' + nPage)
                .then(function (response) {
                    try {
                        resolve(setData(response.data))
                    } catch (e) {
                        console.log(e)
                    }
                    if (nPage < wTotal + 1) {
                        setNPage(nPage + 1);
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        })
    }

    return (
        <div className="container">
            <div className="row">

                {data.map((d) =>

                    <div key={d.id} className="col-md-4 mt-4" >

                        <div className="card shadow-sm p-3 mb-5 bg-body rounded ">
                            <div className="card-body">
                                <img src={d._embedded.hasOwnProperty('wp:featuredmedia') ? d._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url : 'http://www.ccta.ufpb.br/labeet/contents/acervos/categorias/cordofones/udecra/sem-imagem.jpg/@@images/image.jpeg'} className="img-thumbnail " alt="example" />
                                <h5 className="card-title mt-4 text-info">{d.title.rendered}</h5>
                                <div className='mt-4 text-secondary'> 
                                <h6><span className="font-weight-bold">Pub: </span>{handleFormatDate(d.date)}</h6>
                                <h6><span className="font-weight-bold">Mod:</span> {handleFormatDate(d.modified)}</h6>
                                </div>
                                <a href={"/" + d.slug} className="btn btn-primary mt-3 btn-block">Leia mais...</a>
                            </div>
                        </div>

                    </div>


                )}
            </div>
            <div className="row">
                <button type="button" className="btn btn-primary mt-4 mb-4" onClick={(event) => CarregarMais(event)}>Carregar mais...</button>
            </div>
        </div>
    )


}

export default PaginaPrincipal;