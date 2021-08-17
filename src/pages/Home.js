import React from 'react';
import PostList from '../components/PostsList';
import NextPageButton from '../components/NextPageButton';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Home extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        // postList: [],
        page: 1,
        url: 'https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518'
      }
    };
  }

  _updateData = (newPage) => {
    return this.setState({
      data: {
        page: newPage.page,
        url: newPage.url,
      }
    })
  }

  render() {
    return (
      <div>
        <Header />
        <PostList data={this.state.data} updateData={this._updateData} />
        <NextPageButton data={this.state.data} updateData={this._updateData} />
        <Footer />
      </div>
    )
  }
}

export default Home;
