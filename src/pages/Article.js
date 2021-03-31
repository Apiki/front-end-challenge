import { Component } from 'react';
import Loading from '../components/Loading';
import Topbar from '../components/Topbar';
import Bottom from '../components/Bottom';
import * as api from '../services/api';

class Article extends Component {
  constructor(props) {
    super(props);

    this.state = {
      article: [],
      loading: true,
    };
  }

  componentDidMount() {
    const slug = this.props.match.params.id;
    this.getArticleDetails(slug);
  }

  async getArticleDetails(slug) {
    const articleDetails = await api.fetchData(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${slug}`);
    this.setState({ article: articleDetails[0], loading: false });
  }

  render() {
    const { loading, article, article: { title } } = this.state;
    return (
      <div>
        {loading ? (
          <Loading />
        ) : (
          <div>
            <Topbar />
            <div className="container">
              <div className="row">
                <div className="col-md">
                  <img className="img-fluid" src={article._embedded.['wp:featuredmedia'][0].media_details.sizes.large.source_url} alt=""/>
                  <h1 className="content-page__title">{title.rendered}</h1>
                  <div className="content-page__article" dangerouslySetInnerHTML={{ __html: article.content.rendered }} />
                </div>
              </div>
            </div>
            <Bottom />
          </div>
        )
      }
      </div>
    );
  };
}

export default Article;