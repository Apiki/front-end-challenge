import { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<header className="header flex">
				<h1 className="header__title">Apiki<span className="header__title--subject">Dev</span></h1>
			</header>
		)
	}
}

export default Header;