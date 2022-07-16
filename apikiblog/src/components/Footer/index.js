import './style.css'
import facebook from '../../assets/facebook.svg';
import insta from '../../assets/instagram.svg';

function Footer () {
    return (
        <div className="footer">
            <div className="container-infos">
                <div>
                    <h1>Endereço</h1>
                    <span>Rua Apiki, 10</span>
                    <span>Apiki Works</span>
                    <span>SP 31820-021</span>
                </div>
                <div className="logos">
                    <img src={facebook} alt="logo-facebook"/>
                    <img src={insta} alt="logo-instagram"/>
                </div>
            </div>
            <div className="container-logo">
                <img src="https://blog.apiki.com/wp-content/uploads/sites/2/2020/04/marca-apiki-blog-h552-e1595420262681.png" alt="logo-cubos"/>
            </div>
        </div>
    )
}

export default Footer;