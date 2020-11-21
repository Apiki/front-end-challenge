import { Component } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/Header/Header';
import Content from '../../components/Content/Content';

class Home extends Component {
	render() {
		return (
			<div>
				<Helmet>
					<title>ApikiDev</title>
				</Helmet>
				<Header />
				<Content />
			</div>
		)
	}
}

export default Home;