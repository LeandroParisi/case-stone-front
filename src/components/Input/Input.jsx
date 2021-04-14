import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Input = ({
  title,
  type,
  onChange,
  value,
  placeholder,
  isReadOnly,
  onBlur,
  isValid,
  errorMessage,
  resetValidity,
  className,
  onFocus,
}) => {
  const checkValidity = () => (isValid !== null && !isValid);
  const containerClassName = className && `${className}Container`;
  return (
    <div
      className={classNames(
        'primaryInput',
        containerClassName,
      )}
    >
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
        onFocus={onFocus && onFocus()}
        className={classNames(
          className,
          { invalid: checkValidity() },
        )}
        onClick={resetValidity && (() => resetValidity(true))}
      />
      {checkValidity() && <div className="errorMessage textContainer">{ errorMessage }</div>}
    </div>
  );
};

Input.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  isReadOnly: PropTypes.bool,
  isValid: PropTypes.bool,
  errorMessage: PropTypes.string,
  resetValidity: PropTypes.func,
  className: PropTypes.string,
};

Input.defaultProps = {
  onChange: null,
  onFocus: null,
  onBlur: null,
  isReadOnly: false,
  title: null,
  isValid: null,
  className: '',
  type: 'text',
  errorMessage: null,
  resetValidity: null,
};

export default Input;
