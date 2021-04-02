import { Component } from 'react';
import moment from 'moment';
import 'moment/locale/pt-br';
import Loading from '../components/Loading';
import Author from '../components/Author';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import * as api from '../services/api';
import '../style/article.css';

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
    let url;
    try {
      url = article._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url;
    } catch {
      url = null;
    }

    return (
      <div>
        {loading ? (
          <Loading />
        ) : (
          <div>
            <Header />
            <div className="page-wrapper">
              <div className="content clearfix">
                <div className="main-content-wrapper">
                  <div className="main-content single">
                    <h1 className="post-title">{title.rendered}</h1>
                    {url ? (
                      <img className="post-top-image" src={url} alt=""/>
                    ) : (
                      <div />
                    )}
                    <p><strong><small>{moment(date).locale('pt-br').format('LL')}</small></strong></p>
                    <article className="post-content" dangerouslySetInnerHTML={{ __html: article.content.rendered }} />
                    <Author author={article._embedded.author}/>
                  </div>
                </div>
                <Sidebar />
              </div>
            </div>
            <Footer />
          </div>
        )
      }
      </div>
    );
  };
}

export default Article;
