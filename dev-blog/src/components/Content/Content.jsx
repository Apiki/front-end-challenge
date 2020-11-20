import { Component } from 'react';
import Posts from '../Posts/Posts';

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