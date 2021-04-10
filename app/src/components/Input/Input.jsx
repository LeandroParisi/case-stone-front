import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  title, type, onChange, value, placeholder, isReadOnly,
}) => (
  <div className="primaryInput">
    {title && (
    <label htmlFor={title}>
      {title}
    </label>
    )}
    <input
      id={title}
      type={type}
      onChange={onChange && ((e) => onChange(title, e.target.value))}
      value={value}
      readOnly={isReadOnly}
      placeholder={placeholder}
    />
  </div>
);

Input.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  isReadOnly: PropTypes.bool,
};

Input.defaultProps = {
  onChange: null,
  isReadOnly: false,
  title: null,
};

export default Input;
