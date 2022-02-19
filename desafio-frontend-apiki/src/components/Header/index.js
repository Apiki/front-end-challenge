import React from 'react';
import {Link} from 'react-router-dom';
import { HeaderArea } from './styled';
import {logo} from '../../images/logo';

const Header = () => {

    return(
        <HeaderArea>
            <Link to='/'>
                <div className="logo">
                    {logo}
                </div>
            </Link>
        </HeaderArea>
    );
}

export default Header;