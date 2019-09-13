import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";

const Header = () => (
<header id="main-header">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <img src="https://apiki.com/wp-content/uploads/2018/04/logo-apiki-site-01.png" className="App-logo" alt="logo" />
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Alterna navegação">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
        <a class="nav-item nav-link active" href="#">Home <span class="sr-only">Desenvolvimento</span></a>
        <a class="nav-item nav-link" href="#">Infra</a>
        <a class="nav-item nav-link" href="#">Mobile</a>
        <a class="nav-item nav-link" href="#">Performance</a>
        <a class="nav-item nav-link" href="#">Segurança</a>
        <a class="nav-item nav-link" href="#">SEO</a>
        </div>
    </div>
    </nav>
</header>);

export default Header;