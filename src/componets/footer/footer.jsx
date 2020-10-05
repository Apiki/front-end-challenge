import React from 'react';
import { Link } from 'react-router-dom';
import Sociais from '../Social/sociais';
import About from './about';
import CopyRight from './copyRight';
import PagesBlog from './pagesBlog';
import PagesCompany from './pagesCompany';

export default function Footer() {
  return (
    <footer className="footer">
      <Sociais />
      <About />
      <div>
        <PagesCompany />
        <PagesBlog />
        <About />
        <CopyRight />
      </div>
    </footer>
  );
}
