import React from "react";
import postsFetch from "../services/postsAPI";
import moment from 'moment';
import {Link} from "react-router-dom"

class PostList extends React.Component {
  constructor() {
    super();

    this.state = {
      postList: [],
      url: "",
      totalPages: 0,
    };
    this.formatDate = this.formatDate.bind(this);
  }

  componentDidMount() {
    const { url } = this.props.data;

    postsFetch(url).then((result) => this.setState({ postList: result.postList, totalPages: result.totalPages }));

    this.setState({
      url: url,
    });
  }

  formatDate(date) {
    return moment(date).locale('pt-br').format('L')
  }

  render() {
    const { postList, totalPages } = this.state;
    const { page } = this.props.data;
    
    if (postList === []) return <div>LOADING...</div>;
    return (
      <div className="main-body">
        <ul className="navbar">
          <li><a href="/">APIKI BLOG</a></li>
          <li><a href="/">WEB STORIES</a></li>
          <li><a href="/">DESENVOLVIMENTO</a></li>
          <li><a href="/">INFRA</a></li>
          <li><a href="/">MOBILE</a></li>
          <li><a href="/">PERFORMANCE</a></li>
          <li><a href="/">SEGURANÇA</a></li>
          <li><a href="/">SEO</a></li>
          <li><a href="/">E-COMMERCE</a></li>
        </ul>
        <div className="title">
          <h1>E-COMMERCE</h1>
          <h2>Tenha em mãos as melhores técnicas para inovar o seu WooCommerce.</h2>
        </div>
        <div className="post-wrapper">
          {postList.map((result) => {
            const {
              _embedded,
              title,
              slug,
              excerpt,
              date,
            } = result;
            const dateFormatted = this.formatDate(date);
            let imgpath = undefined;

            if (_embedded["wp:featuredmedia"]){
              imgpath = _embedded["wp:featuredmedia"][0].source_url};
            return (
              <div className="card-container" key={title}>
                <Link to={`/${slug}`} >
                  <div className="post-card">
                    <img src={imgpath} alt={title.rendered} />
                    <div className="card-title">
                      <h2>{title.rendered}</h2>
                      <p dangerouslySetInnerHTML={{__html: excerpt.rendered }} />
                      <p className="author">{dateFormatted} Por <span>{_embedded.author[0].name}</span></p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="pages">Página {page} de {totalPages}</div>
      </div>
    );
  }
}

export default PostList;
