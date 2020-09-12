import React from 'react';
import './styles.css';

const Button = (props) => {
    return(
        <button className="btn" {...props}>
            {props.children}
        </button>
    );
}

export default Button;