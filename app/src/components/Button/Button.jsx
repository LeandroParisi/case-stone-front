import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  title, isDisabled, onClick,
}) => (
  <button
    type="button"
    disabled={isDisabled}
    onClick={onClick && (() => onClick())}
  >
    {title}
  </button>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  isDisabled: false,
  onClick: null,
};

export default Button;
