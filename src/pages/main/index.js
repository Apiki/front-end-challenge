import React, { Component } from 'react'
import Endpoint from '../../services/Endpoint'
import Card from '../../components/Card'
import Preloader from '../../components/Preloader'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      page: 0,
      totalPages: 0,
      isLoaded: false,
      buttomDisable: false
    }
  }

  componentDidMount() {
    this.loadPosts()
  }

  loadPosts = async () => {
    const res = await Endpoint.get('/posts?_embed&categories=518')
    this.setState({
      isLoaded: true,
      items: res.data,
      page: 1,
      totalPages: parseInt(res.headers['x-wp-totalpages'])
    })
  }

  loadMore = async () => {
    this.setState({
      buttomDisable: true
    })
    if (this.state.page < this.state.totalPages) {
      const page = this.state.page + 1
      const res = await Endpoint.get(`/posts?_embed&categories=518&page=${page}`)
      this.setState({
        items: [...this.state.items, ...res.data],
        page: page,
        buttomDisable: false
      })
    } else return

  }

  render() {
    let { isLoaded, items } = this.state


    if (!isLoaded) {
      return <Preloader />
    } else {
      let buttonDisplay = this.state.page === this.state.totalPages ? "none" : "block"

      return (
        <div className="container">
          <div className="row">
            <Card items={items} />
            <div className="col-md-12">
              <button disabled={this.state.buttomDisable === true} onClick={this.loadMore} className="btn btn-dark text-white" style={{ display: buttonDisplay }}>Carregar mais Posts</button>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Main