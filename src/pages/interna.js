import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { getPost } from '../services/index';

class Interna extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    }
  }

  async componentDidMount() {
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
        <h1>Página interna</h1>
        <img src={ imgURL } alt={ slug } />
        { data !== undefined ? <h1>{ data.title.rendered }</h1> : <p>Carregando...</p> }
        { data !== undefined ? <p>{ ReactHtmlParser(data.content.rendered) }</p> : <p>Carregando...</p> }
      </div>
    )
  }
}

export default Interna;
