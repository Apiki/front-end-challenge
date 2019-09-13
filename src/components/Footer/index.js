import React from 'react';

import "./styles.css";

const Footer = () => (<footer id="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="brand-footer">
                                <img src="https://apiki.com/wp-content/uploads/2018/04/logo-apiki-site-01.png" className="App-logo" alt="logo" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="title-footer">
                            <p>Governador Valadares - MG</p>
                        </div>
                        <div className="text-footer">
                            <p>Praça Doutor João Paulo Pinheiro</p>
                            <p>100 - Centro. CEP: 35010-330</p>
                            <p>+55 33 3278-1002</p>
                        </div>
                    </div>
                </div>
            </div>
</footer>);

export default Footer;