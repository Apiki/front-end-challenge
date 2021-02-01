import React from 'react';
// import './not-found.css';

const NotFound = () => (
  <div className="not-found">    <h2>
    {`Page requested ` + `not found`}
    <span role="img" aria-label="Crying emoji"> 😭 </span>
  </h2>
  </div>
);

export default NotFound;
