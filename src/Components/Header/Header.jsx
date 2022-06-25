import './Header.css';
// import Logo from '../NotFound/logo-apiki-blog-wordpress-e1613483808992.webp';

function Header(){
	return(
		<>
			<header className="header">
				<div className="container-banner">
				   	{/*<img src={Logo} alt="logo"/>*/}
				   	<h1>Dev Blog</h1>
				</div>
			</header>
		</>
	)
}

export default Header;