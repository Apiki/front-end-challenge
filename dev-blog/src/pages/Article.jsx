import { Component } from 'react';
import Header from '../components/Header';

class Article extends Component {
  render() {
    const path = window.location.pathname.split('/');
    console.log(path[path.length -1]);
    return (
      <div>
        <Header />
        <h1>Artigo</h1> 
      </div>
    );
  }
}

export default Article;