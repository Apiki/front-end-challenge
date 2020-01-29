import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaMedium, FaStackOverflow } from "react-icons/fa";
import { Link } from "react-router-dom";
import '../App.css';

function Header(props) {

    const [headerNames] = useState(["home", "post", "Home", "Post"]);

    const getUrl = () => {
        console.log(window.location.pathname.split("/")[1])
        return window.location.pathname.split("/")[1];
    }

    return (
        <header>
            <nav>
                <div className="header__logo">
                    <Link to="/home">Home</Link>
                </div>

                <div className="header__info">
                    <div className="header__author">
                        Construido por Vitor Prata
                    </div>
                    <div className="header__icons">
                        <a href="https://www.linkedin.com/in/vitor-prata-a899b16b/">
                            <FaLinkedin className="header__icon" />
                        </a>
                        <a href="https://github.com/vitorbretasprata">
                            <FaGithub className="header__icon" />
                        </a>
                        <a href="https://medium.com/@vitorbretasprata">
                            <FaMedium className="header__icon"/>
                        </a>
                        <a href="https://stackoverflow.com/users/9909060/vitor-prata">
                            <FaStackOverflow className="header__icon" />
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
