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
		this.setState({ isLoading: true }, async () => {
			const endpoint = 'https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518';
			const responseReturned = await fetch(endpoint);
			const responseObj = await responseReturned.json();
			this.setState(({ listOfPosts, isLoading }) => ({
        listOfPosts: [...listOfPosts, ...responseObj],
        isLoading: false
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
		const loadingElement = <span>Loading...</span>;
		const { isLoading } = this.state;
		return (
			<div className="cards-list">
				{(isLoading) ? loadingElement : this.renderCards()}
				{/* <button onClick={this.fetchPosts}>Mais</button> */}
			</div>
		);
	}
}

export default Posts;