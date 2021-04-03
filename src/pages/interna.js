import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { getPost } from '../services/index';
import Header from '../components/header';

class Interna extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    }
  }

  async componentDidMount() {
    //FAZER UMA TRATATIVA CASO O SLUG NÃO SEJA VÁLIDO
    const slug = this.props.match.params.slug;
    this.setState({
      data: await getPost(slug)
    })
  };

  render() {
    const data = this.state.data[0]
    let imgURL;
    let slug;
    if (data !== undefined) {
      imgURL = data._embedded['wp:featuredmedia'][0].source_url;
      slug = data._embedded['wp:featuredmedia'][0].slug
    }
    return(
      <div>
        <Header/>
        <img src={ imgURL } alt={ slug } />
        { data !== undefined ? <h1>{ data.title.rendered }</h1> : <p>Carregando...</p> }
        { data !== undefined ? <p>{ ReactHtmlParser(data.content.rendered) }</p> : <p>Carregando...</p> }
      </div>
    )
  }
}

export default Interna;
