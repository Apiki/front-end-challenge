import './Header.css';
import PC from '../Img/pc.png';

function Header() {
	return (
		<>
			<header className="header">
				<div className="container-banner">
					<h1>Dev Blog</h1>
					<img src={PC} alt="logo" />
				</div>
			</header>
		</>
	)
}

export default Header;