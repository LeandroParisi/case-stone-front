import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { validateEmail, validatePassword, isInputValid } from '../../utils/validations';
import Input from '../Input/Input';
import Button from '../Button/Button';

function UserForm({ onSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(null);
  const [isPasswordValid, setIsPasswordValid] = useState(null);

  useEffect(() => {
    setIsDisabled(!(validateEmail.isValid(email) && validatePassword.isValid(password)));
  }, [email, password]);

  return (
    <>
      <main className="primaryPage loginPage">
        <div className="inputsContainer">
          <Input
            type="text"
            placeholder="Your email"
            value={email}
            onChange={setEmail}
            onBlur={isInputValid(setIsEmailValid, validateEmail.isValid)}
            isValid={isEmailValid}
            errorMessage={validateEmail.errorMessage}
            resetValidity={setIsEmailValid}
          />
          <Input
            type="password"
            placeholder="Your password"
            value={password}
            onChange={setPassword}
            onBlur={isInputValid(setIsPasswordValid, validatePassword.isValid)}
            isValid={isPasswordValid}
            errorMessage={validatePassword.errorMessage}
            resetValidity={setIsPasswordValid}
          />
        </div>
        <Button title="Login" isDisabled={isDisabled} onClick={() => onSubmit(email, password)} />
      </main>
    </>
  );
}

UserForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default UserForm;
