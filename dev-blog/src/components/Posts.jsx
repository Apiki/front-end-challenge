import { Component } from 'react';
import CardsList from './CardsList';

class Posts extends Component {
	constructor(props) {
		super(props);
		this.fetchPosts = this.fetchPosts.bind(this);
		this.renderCards = this.renderCards.bind(this);
		this.state = {
			isLoading: true,
			listOfPosts: [],
			page: 1,
		}
	}

	async fetchPosts() {
		const { page }  = this.state;
		this.setState({ isLoading: true }, async () => {
			const endpoint = `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${page}`;
			const responseReturned = await fetch(endpoint);
			const totalPages = parseInt(responseReturned.headers.get('X-WP-TotalPages'));
			const responseObj = await responseReturned.json();
			this.setState(({ listOfPosts, page }) => ({
        listOfPosts: [...listOfPosts, ...responseObj],
				isLoading: false,
				totalPages: totalPages - 2,
				page: page +1,
			}))
		})
	}

	renderCards() {
		const { listOfPosts } = this.state;
		return (
      <CardsList posts={listOfPosts} />
		);
	}

	componentDidMount() {
    this.fetchPosts();
	}

	render() {
		// const loadingElement = <span>Loading...</span>;
		const acabou = <span>Acabou as páginas</span>
		const { totalPages, page } = this.state;
		return (
			<div className="cards-list">
				{/* {(isLoading) ? loadingElement : this.renderCards()} */}
				{this.renderCards()}
				{(totalPages >= page) ? <button onClick={this.fetchPosts}>Carregar mais...</button> : acabou};
			</div>
		);
	}
}

export default Posts;