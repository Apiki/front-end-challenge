import React from 'react';
import Banner from '../images/banner-infra-300x250-1.webp';

function Sidebar() {
  return (
    <aside className="sidebar m-tr">
      <div className="container">
        <img src={Banner} alt="Banner" width="300" height="250" />
      </div>
    </aside>
  );
}

export default Sidebar;
