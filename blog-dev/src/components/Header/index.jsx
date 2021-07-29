import { Link } from 'react-router-dom';

import { HeaderTag, HeaderContainer } from './styles';

export function Header() {
  
  return (
    <HeaderTag>
      <HeaderContainer>
        <Link to="/">
          <h1>Blog for DEVs</h1>
        </Link>
      </HeaderContainer>
    </HeaderTag>
  )
}