import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";

const Header = () => (
<header id="main-header">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <img src="https://apiki.com/wp-content/uploads/2018/04/logo-apiki-site-01.png" className="App-logo" alt="logo" />
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Alterna navegação">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
        <a className="nav-item nav-link active" href="../../">Home <span className="sr-only">Desenvolvimento</span></a>
        <a className="nav-item nav-link" href="#">Infra</a>
        <a className="nav-item nav-link" href="#">Mobile</a>
        <a className="nav-item nav-link" href="#">Performance</a>
        <a className="nav-item nav-link" href="#">Segurança</a>
        <a className="nav-item nav-link" href="#">SEO</a>
        </div>
    </div>
    </nav>
</header>);

export default Header;