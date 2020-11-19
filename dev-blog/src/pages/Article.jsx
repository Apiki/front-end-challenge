import { Component } from 'react';
import Header from '../components/Header';

class Article extends Component {
  constructor(props) {
    super(props);
    this.fetchArticle = this.fetchArticle.bind(this);
    this.renderArticle = this.renderArticle.bind(this);
    this.state = {
      isLoading: true,
      article: '',
    }
  }

  renderArticle() {
    const { article } = this.state;
    return (
      <div>
        <img src={article[0]._embedded.['wp:featuredmedia'][0].media_details.sizes.large.source_url} alt=""/>
        <h1>{article[0].title.rendered}</h1>
        <div dangerouslySetInnerHTML={{ __html: article[0].content.rendered }} />
      </div>
    );
  }

  fetchArticle(id) {
    this.setState({ isLoading: true }, async () => {
      const responseReturned = await fetch(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${id}`);
      const responseObj = await responseReturned.json();
      this.setState({
        isLoading: false,
        article: responseObj,
      })
    })
  }

  componentDidMount() {
    const id = this.props.match.params.id
    this.fetchArticle(id);
  }

  render() {
    const { isLoading } = this.state;
    const loadingElement = <div>Loading...</div>
    return (
      <div>
        <Header />
        {isLoading ? loadingElement : this.renderArticle()} 
      </div>
    );
  }
}

export default Article;