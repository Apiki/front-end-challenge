import { Component } from 'react';
import CardsList from '../CardsList/CardsList';
import Loading from '../Loading/Loading'

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
		const endButton = <button className="page__button" disabled onClick={this.fetchPosts}>Carregar mais...</button>
		const { totalPages, page, isLoading } = this.state;
		return (
			<div className="page flex">
				<h2 className="page__title">Artigos</h2>
				{this.renderCards()}
				{isLoading ? <Loading /> : null}
				{(totalPages >= page) ? <button className="page__button" onClick={this.fetchPosts}>Carregar mais...</button> : endButton}
			</div>
		);
	}
}

export default Posts;