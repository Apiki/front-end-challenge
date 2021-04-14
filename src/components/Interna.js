import React from 'react';
import RenderImagem from './RenderInterna';
import ReactHtmlParser from "react-html-parser";
import './Posts.css';

class Interna extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stateSlug: [],
    };
  }

  async fetchSlug(slug){
    const fetchApi = await fetch(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${slug}`)
    .then((response) => response.json())
    .then((result) => result);
    return fetchApi;
  }

  async componentDidMount() {
    const slug = this.props.match.params.slug;
    this.setState({stateSlug: await this.fetchSlug(slug)});
  };

  render() {
    const {stateSlug} = this.state;

 return(
   <div className='pgInterna'>
     {console.log(stateSlug)}
     {stateSlug.map((post, index) => (
            <RenderImagem key={index} postagem={post} />
          ))}
     <h1 className='tituloPgInterna'>{stateSlug.map((titulo) => Object.values(titulo.title))}</h1>
     <p className='textoPgInterna'>{stateSlug.map((conteudo) => ReactHtmlParser(Object.values(conteudo.content)))}</p>
   </div>
 )
 }
}

export default Interna;