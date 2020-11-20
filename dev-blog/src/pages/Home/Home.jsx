import { Component } from 'react';
import Header from '../../components/Header/Header';
import Content from '../../components/Content/Content';

class Home extends Component {
	render() {
		return (
			<div>
				<Header />
				<Content />
			</div>
		)
	}
}

export default Home;