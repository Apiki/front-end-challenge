import React from 'react';
import postsFetch from '../services/postsAPI';

class NextPageButton extends React.Component {
  constructor() {
    super()

    this.state = {
      disabled: false,
    }

    this.handleClickNextPage = this.handleClickNextPage.bind(this);
    this.fetchNewPage = this.fetchNewPage.bind(this);
  }
  
  async fetchNewPage() {
    return await postsFetch(this.props.url)
      .then(result => result)
  }
  
  componentDidMount() {
    const { url } = this.props.data;

    postsFetch(url).then((result) => this.setState({ totalPages: result.totalPages }));

  }

  async handleClickNextPage(page, updateData) {
    // const newPosts = this.fetchNewPage();
    const newPage = page + 1;
    const newUrl = `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${newPage}`
      updateData({
      page: newPage,
      url: newUrl,
    })
    const { totalPages } = this.state;
    if (totalPages <= page+1) this.setState({ disabled: true });
  }
  
  render() {
    const { updateData, data: { page } } = this.props;
    if (!this.state) return <div>Loading</div>
    return <div className="button-container main-body">
          <button onClick={() => this.handleClickNextPage(page, updateData)} disabled={this.state.disabled}>Carregar mais...</button>
        </div>
  };
};

export default NextPageButton;

