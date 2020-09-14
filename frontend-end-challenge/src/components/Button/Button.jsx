import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ value, className, onClick }) => {
  return (
    <button type="button" onClick={onClick} className={className}>
      {value}
    </button>
  );
};

Button.defaultProps = {
  value: '',
  className: '',
  onClick: null,
};

Button.propTypes = {
  value: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
