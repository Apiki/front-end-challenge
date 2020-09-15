import React from 'react';

const Header = (props) => {
  const { styles } = props;
  return (
    <div className={`${styles}`}> <h1>#devCode Blog</h1></div>
  );
};

export default Header;