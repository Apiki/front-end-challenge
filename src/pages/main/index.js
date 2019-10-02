/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-danger */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Api from '../../services/api';
import './styles.css';
import Loader from '../../components/loader/index';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postData: [],
      page: 1,
      pageLoaded: false,
    };
  }

  componentDidMount() {
    const { page } = this.state;
    this.loadContent(page);
  }

  componentDidUpdate() {
    this.contentLoading('loading');
  }

  disableButton(elementId) {
    const id = document.getElementById(elementId);
    id.className = 'button--disabled';
    id.disabled = true;
    id.innerHTML = 'Isso é tudo por hoje.';
  }

  // eslint-disable-next-line react/destructuring-assignment
  async loadContent(pageNumber = this.state.page) {
    this.setState({ pageLoaded: false });
    const response = await Api.get(`/posts?_embed&categories=518&page=${pageNumber}`);
    const { headers, data } = response;
    const { postData } = this.state;
    const totalPages = headers['x-wp-totalpages'];

    this.setState({
      postData: [...postData, ...data],
      pageLoaded: true,
    });

    if (pageNumber < totalPages) {
      this.setState({
        page: pageNumber + 1,
      });
    } else if (pageNumber === parseInt(totalPages, 10)) {
      this.disableButton('loadMore');
    }
  }

  contentLoading(id) {
    const { pageLoaded } = this.state;
    if (pageLoaded) {
      document.getElementById(id).style.display = 'none';
    } else {
      document.getElementById(id).style.display = 'block';
    }
  }

  render() {
    const { postData } = this.state;

    return (
      <div className="mainPage">
        <h1 className="mainPage__title">Apiki para Devs</h1>
        <div className="postingArea">
          {postData.map((post) => {
            let img = '';
            if (post._embedded['wp:featuredmedia']) {
              img = post._embedded['wp:featuredmedia']['0'].source_url;
            }

            return (
              <div className="card" key={post.id}>
                <Link to={`/details/${post.slug}`}>
                  <img alt="Imagem" src={img} />
                  <h3 className="card__title" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                  <div className="card__text" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                </Link>
              </div>
            );
          })}
        </div>
        <Loader />
        <button id="loadMore" type="button" onClick={() => this.loadContent()}> Carregar mais...</button>
      </div>
    );
  }
}
export default Main;
