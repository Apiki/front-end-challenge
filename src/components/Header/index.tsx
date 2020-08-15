import React from 'react';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <a href="/">
        <img
          src="https://cdn.blog.apiki.com/wp-content/uploads/sites/2/2020/04/marca-apiki-blog-h552.png"
          alt=""
        />
      </a>
    </Container>
  );
};

export default Header;
