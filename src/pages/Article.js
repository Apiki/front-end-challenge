import { Component } from 'react';
import * as api from '../services/api';

class Article extends Component {
  constructor(props) {
    super(props);

    this.state = {
      article: [],
    };
  }

  componentDidMount() {
    const slug = this.props.match.params.id;
    this.getArticleDetails(slug);
  }

  async getArticleDetails(slug) {
    const articleDetails = await api.fetchData(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${slug}`);
    this.setState({ article: articleDetails});
  }

  render() {
    return (
      <div>
        {console.log(this.state.article[0])}

      </div>
    );
  };
}

export default Article;