import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
	render() {
		return (
			<header className="header flex">
				<Link to={'/'}>
					<h1 className="header__title">
						Apiki
						<span className="header__title--subject">Dev</span>
					</h1>
				</Link>
			</header>
		)
	}
}

export default Header;