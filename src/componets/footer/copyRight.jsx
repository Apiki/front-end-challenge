import React from 'react';
import { Link } from 'react-router-dom';

export default function CopyRight(params) {
  return (
    <div className="copy-right">
      <p>
        © 2020
        <Link to="/" title="Front-End Challenge"/* title="Empresa especializada em WordPress" */>
          {' '}
          Apiki{' '}
        </Link>
        - Empresa especializada em WordPress.
      </p>
    </div>
  );
}
