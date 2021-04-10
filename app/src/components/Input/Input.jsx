import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  title, type, onChange, value, placeholder, isReadOnly, onBlur, isValid, errorMessage,
}) => {
  console.log('input');
  console.log(isValid);
  return (
    <div className="primaryInput">
      {title && (
      <label htmlFor={title}>
        {title}
      </label>
      )}
      <input
        id={title}
        type={type}
        onChange={onChange && ((e) => onChange(e.target.value))}
        onBlur={onBlur && ((e) => onBlur(e.target.value))}
        value={value}
        readOnly={isReadOnly}
        placeholder={placeholder}
        className={isValid !== null && !isValid && 'invalid'}
      />
      {isValid !== null && !isValid && <div className="errorMessage">{ errorMessage }</div>}
    </div>
  );
};

Input.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  isReadOnly: PropTypes.bool,
  isValid: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
};

Input.defaultProps = {
  onChange: null,
  onBlur: null,
  isReadOnly: false,
  title: null,
};

export default Input;
