import React from 'react';
import Header from '../components/Header';
import './Principal.css';

const NotFound = (props) => {
  const { styles } = props;
  return(
    <div>
        <div><Header styles={'header bcgBlue'}/></div>
        <div style={styles}>
          <div>404</div>
          <div>Not Found</div>
          <div>Desculpe, não encontramos a sua página</div>
        </div>
    </div>
  );
};

export default NotFound;