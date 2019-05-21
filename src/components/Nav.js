import React from 'react';
import logo from '../logo.svg';

function Nav() {
    return (
        <div className='nav'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="logo center">
                            <a href="/">
                                <img src={logo} className="app-logo" alt="logo" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nav