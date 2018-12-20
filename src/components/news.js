import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class News extends Component {
    constructor() {
        super();

        this.state = {
            lista: [],
            count: 1,
            pageMax: 0
        };

        this.load = this.load.bind(this);
    }

    componentDidMount() {
        let objct = this;

        axios.get('https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=' + this.state.count)
            .then(function (response) {
                objct.setState({
                    pageMax: Number.parseInt(response.headers['x-wp-totalpages'], 10)
                });
                return response.data;
            }).then(function (jsonData) {
                objct.setState({
                    lista:
                        jsonData
                });
            })
        objct.setState({ count: objct.state.count + 1 });
    }

    load() {
        let objct = this;
        if (objct.state.pageMax > objct.state.count) {
            axios.get('https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=' + objct.state.count)
                .then((response) => {
                    console.log(response);
                    var listagem = objct.state.lista;
                    var lista = listagem.concat(response.data);

                    return lista;
                }).then(function (jsonData) {
                    objct.setState({ lista: jsonData });
                });
            objct.setState({ count: objct.state.count + 1 });
        }
    }

    render() {
        return (
            <div>
                <div className='section'>
                    <div className='container'>
                        <div className='col-xs-12 text-center'>
                            <h2 className='section-title'>Conteúdos recentes</h2>
                            <p className='section-description'>Melhor conteúdo em Wordpress.</p>
                        </div>
                        {
                            this.state.lista.map((post) => {
                                return (
                                    <article className='col-md-3 card' key={post.id}>
                                        <div className='entry'>
                                            <div className='entry-media'>
                                                <a href='#' target='_blank' title=''>
                                                    <span className='absolute-wrapper'></span>
                                                    <img className='img-responsive' src={post._embedded['wp:featuredmedia'][0]['media_details']['sizes']['thumbnail']['source_url']} alt={post._embedded['wp:featuredmedia'][0]['media_details']['image_meta']['title']} alt='' />
                                                </a>
                                            </div>
                                            <h3 className='entry-title' dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h3>
                                            <p className='card-text mb-3' dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></p>
                                            <div className='card-btn'>
                                                <Link to={{ pathname: `/content/${post.slug}`}}><a target='_blank' title='VER MAIS' className='btn read-more btn-sm btn-primary'>VER MAIS</a> </Link>
                                            </div>
                                        </div>
                                    </article>
                                );
                            })
                        }
                        {this.state.pageMax != this.state.count && <div className='col-xs-12 text-center load-news'>
                            <button className='btn btn-success btn-load' data-component='load-more' onClick={this.load}> Carregar mais</button>
                        </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}


