import { Component } from 'react';
import moment from 'moment';
import Loading from '../components/Loading';
import Author from '../components/Author';
import Topbar from '../components/Topbar';
import Bottom from '../components/Bottom';
import * as api from '../services/api';
import returnUrl from '../services/functions.js';

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
    this.setState({
      article: articleDetails.data[0],
      loading: false
    });
  }


  render() {
    const { loading, article, article: { title, date } } = this.state;
    const url = returnUrl(`article._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url`);

    return (
      <div>
        {loading ? (
          <Loading />
        ) : (
          <div>
            <Topbar />
            <div className="container">
              <div className="row">
                <div className="col-sm">
                  {url ? (
                    <img className="img-fluid" src={url} alt=""/>
                  ) : (
                    <div />
                  )}
                  <h1>{title.rendered}</h1>
                    <p className="Small">{moment(date).format('LL')}</p>
                  <hr />
                  <article dangerouslySetInnerHTML={{ __html: article.content.rendered }} />
                  <hr />
                  <Author author={article._embedded.author}/>
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
