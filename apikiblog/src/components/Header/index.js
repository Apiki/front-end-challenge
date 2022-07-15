import './style.css';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';

function Header () {
    return (
        <div className="containerHeader">
            <img src="https://blog.apiki.com/wp-content/uploads/sites/2/2020/04/marca-apiki-blog-h552-e1595420262681.png" alt="logo-apiki"/>
            <img src={sun} alt="sun-img"/>
        </div>
    )
}

export default Header;