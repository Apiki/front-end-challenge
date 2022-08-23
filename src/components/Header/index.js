import React from 'react';
import { ContainerHeader } from './styles';
import { Link } from 'react-router-dom';
import { PATHS } from '../../Routes/constants';

export const Header = () => {
    return(
        <ContainerHeader>
            <ul>
                <li><Link to={PATHS.HOME}>TODAS</Link></li>
                <li><Link to={PATHS.ABOUT}>Web stories</Link></li>
                <li><Link to={PATHS.ABOUT}>Desenvolvimento</Link></li>
                <li><Link to={PATHS.ABOUT}>Infra</Link></li>
                <li><Link to={PATHS.ABOUT}>Mobile</Link></li>
                <li><Link to={PATHS.ABOUT}>Performance</Link></li>
                <li><Link to={PATHS.ABOUT}>Security</Link></li>
                <li><Link to={PATHS.ABOUT}>SEO</Link></li>
            </ul>
        </ContainerHeader>
    )
}