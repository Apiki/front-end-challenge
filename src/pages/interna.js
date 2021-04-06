import React from "react";
import ReactHtmlParser from "react-html-parser";
import { getPost } from "../services/index";
import Header from "../components/header";
import "./interna.css";

class Interna extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      loading: false,
    };
  }

  async componentDidMount() {
    const slug = this.props.match.params.slug;
    this.setState({
      data: await getPost(slug),
    });
  }

  aboutAuthor(author) {
    const avatar = author.avatar_urls[96];
    const name = author.name;
    const description = author.description;
    return (
      <div className="container-about-author">
        <img className="author-avatar" src={avatar} alt="Author Avatar" />
        <div className="author-info">
          <strong>{name}</strong>
          <p>{description}</p>
        </div>
      </div>
    );
  }

  render() {
    const data = this.state.data[0];
    let author;
    let imgURL;
    let slug;
    if (data !== undefined) {
      imgURL = data._embedded["wp:featuredmedia"][0].source_url;
      slug = data._embedded["wp:featuredmedia"][0].slug;
      author = data._embedded["author"][0];
    }
    return (
      <div>
        <header>
          <Header />
        </header>
        <div className="main-container">
          <div className="post-container">
            <img className="post-image" src={imgURL} alt={slug} />
            {data !== undefined ? <h1>{data.title.rendered}</h1> : <p />}
            <div className='wordpress-content'>
            {data !== undefined ? (
              ReactHtmlParser(data.content.rendered)
            ) : (
              <p />
            )}
            </div>
          </div>
        </div>
        <footer>{data !== undefined ? this.aboutAuthor(author) : <p />}</footer>
      </div>
    );
  }
}

export default Interna;
