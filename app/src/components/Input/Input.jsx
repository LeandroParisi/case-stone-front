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
}) => {
  const checkValidity = () => (isValid !== null && !isValid);
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
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  isReadOnly: PropTypes.bool,
  isValid: PropTypes.bool,
  errorMessage: PropTypes.string.isRequired,
  resetValidity: PropTypes.func.isRequired,
  className: PropTypes.string,
};

Input.defaultProps = {
  onChange: null,
  onBlur: null,
  isReadOnly: false,
  title: null,
  isValid: null,
  className: '',
};

export default Input;
