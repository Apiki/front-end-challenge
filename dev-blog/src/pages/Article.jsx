import { Component } from 'react';
import Header from '../components/Header';

class Article extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <Header />
        <h1>Artigo</h1> 
      </div>
    );
  }
}

export default Article;