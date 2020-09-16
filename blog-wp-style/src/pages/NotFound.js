import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Principal.css';

const NotFound = (props) => {
  const { styles } = props;
  document.title = 'Page Not Found';
  return(
    <div className="userScreen">
        <div><Header styles={'header bcgBlue'}/></div>
        <div className="notFound" style={styles}>
          <div>404</div>
          <div>Not Found</div>
          <div>Desculpe, não encontramos a sua página</div>
        </div>
        <div className="content padStepTwo"><a href="/">Voltar</a></div>
        <div><Footer styles={'footer bcgBlue'}/></div>
    </div>
  );
};

export default NotFound;