import React from 'react';
import Branding from '../images/branding-footer.svg';

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="brand-footer">
                            <a href="/">
                                <img src={Branding} className="App-logo" alt="logo" />
                            </a>
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
                    <div className="col-md-4">
                        <div className="title-footer">
                            <p>São Paulo -SP</p>
                        </div>
                        <div className="text-footer">
                            <p>Rua Oscar Freire, 2379</p>
                            <p>Pinheiros</p>
                            <p>CEP: 05409-012</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer