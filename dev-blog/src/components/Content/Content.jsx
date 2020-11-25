import { Component } from 'react';
import Posts from '../Posts/Posts';
import './Content.css';

class Content extends Component {
	render() {
		return (
			<main className="content">
        <Posts />
      </main>
		)
	}
}

export default Content;
