import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ value, className, disabled, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={className}
      disabled={disabled}
    >
      {value}
    </button>
  );
};

Button.defaultProps = {
  value: '',
  className: '',
  disabled: false,
  onClick: null,
};

Button.propTypes = {
  value: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
