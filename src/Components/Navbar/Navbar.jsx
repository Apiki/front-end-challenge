import './Navbar.css';
import Logo from '../Img/logo-apiki-blog-wordpress-e1613483808992.png';
import {Link} from 'react-router-dom';

function Navbar(){
	return(
		<>
			<nav className="container-nav">
				 <div className="nav-logo">
					 <Link to="/">
						<img src={Logo} alt="Logo"/>
					</Link>
				</div>
				 <div className="nav-links">
					 <ul>
						<li><Link to="/">Home</Link></li>
						<li><a href="/#postshome">Posts</a></li>
						
					</ul>
				</div>
			</nav>
		</>
	)
}

export default Navbar;