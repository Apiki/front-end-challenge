import React from 'react';
import  './_styles.scss';
import {Link} from 'react-router-dom';

const Header = () => (
    <header className="header">
        <div className="grid-container">
            <div className="header__container cb">
                <div className="grid-25 tablet-grid-25 mobile-grid-40">
                    <div className="header__container--logo">
                        <h1>
                            <a href="/">
                                <img src={require('../../assets/img/logo-apiki.png')} title="" />
                            </a>
                        </h1>
                    </div>
                </div>
                <div className="grid-75 tablet-grid-75 mobile-grid-60">
                    <div className="header__container--name-cat-header">
                        <a href="" title=""> / Desenvolvimento</a>
                    </div>
                </div>
            </div>
       </div>
    </header>

);

export default Header;