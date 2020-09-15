import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ value, className, disabled, onClick, children }) => {
  return (
    <button
      className={className ? `${className}` : 'button-default'}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
      <span className={className ? `${className}` : 'button-default__text'}>
        {value}
      </span>
    </button>
  );
};

Button.defaultProps = {
  value: '',
  className: '',
  disabled: false,
  onClick: null,
  children: null,
};

Button.propTypes = {
  value: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default Button;
