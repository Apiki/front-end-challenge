import React from 'react';
import { Content } from '../components/content';
import Header from '../components/header';
import Footer from '../components/footer';

const Layout = (props) => {
  return (
    <div>
      <Header />
      <Content props={props.children} />
      <Footer />
    </div>
  );
};

export default Layout;
