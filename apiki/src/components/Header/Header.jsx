import React from 'react';
import './index.css';

const logo = 'https://cdn.blog.apiki.com/wp-content/uploads/sites/2/2020/04/marca-apiki-blog-h552-e1595420262681.png';

const Header = () => {
  return (
    <div className="header">
      <img src={logo} />
    </div>
  )
}

export default Header;
