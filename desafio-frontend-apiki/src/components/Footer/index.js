import React from "react";
import {Footer} from './styled';
import {logo} from '../../images/logo';
import {BsInstagram} from 'react-icons/bs';
import {BsFacebook} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs'

const FooterArea = () => {
    return(
        <Footer>
            <div className="social">
                <div className="social--logo">{logo}</div>
                <div className="social--links">
                    <ul>
                        <li><a className="social--link" href="https://www.instagram.com/apikiwordpress/"><BsInstagram /></a></li>
                        <li><a className="social--link" href="https://www.facebook.com/ApikiWordPress"><BsFacebook /></a></li>
                        <li><a className="social--link" href="https://github.com/Apiki"><BsGithub /></a></li>
                        <li><a className="social--link" href="https://www.linkedin.com/company/apiki/"><BsLinkedin /></a></li>
                    </ul>
                </div>
            </div>
            <div className="branches">
                <div>
                    <div className="branches--city">Governador Valadares, MG</div>
                    <div className="branches--address">Av. Minas Gerais, 700, lojas 15 e 16</div>
                </div>
                <div>
                    <div className="branches--city">São Paulo, SP</div>
                    <div className="branches--address">Rua Oscar Freire, 2379, Pinheiros</div>
                </div>
            </div>
        </Footer>
    );
};

export default FooterArea;