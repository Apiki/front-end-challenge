import React from "react";
import { Link } from "react-router-dom";
import './index.css';

const BackButton = () => (
  <div className="back-button">
    <Link to="/">
      <button>Voltar</button>
    </Link>
  </div>
);

export default BackButton;
