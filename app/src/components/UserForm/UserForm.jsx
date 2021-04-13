import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import { validateEmail, validatePassword, isInputValid } from '../../utils/validations';
import Input from '../Input/Input';
import Button from '../Button/Button';

function UserForm({ onSubmit, page }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(null);
  const [isPasswordValid, setIsPasswordValid] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const history = useHistory();

  const pathProps = {
    '/': {
      buttonTitle: 'Login',
      inputPlaceholder: 'Your email',
      passwordPlaceholder: 'Your password',
      textLabel: null,
      passwordLabel: null,
      getPayload: () => ({ email, password }),
      auxiliaryButton: () => (
        <Button
          title="Register"
          onClick={() => history.push('/register')}
        />
      ),
    },
    '/register': {
      buttonTitle: 'Register',
      inputPlaceholder: 'Your email',
      passwordPlaceholder: 'Your password',
      textLabel: null,
      passwordLabel: null,
      getPayload: () => ({
        email, password, firstName, lastName,
      }),
      auxiliaryButton: null,
    },
    '/profile': {
      buttonTitle: 'Save',
      inputPlaceholder: 'Your email',
      passwordPlaceholder: 'Your password',
      textLabel: 'Change email',
      passwordLabel: 'Change password',
      auxiliaryButton: null,
    },
  };

  const {
    buttonTitle,
    inputPlaceholder,
    passwordPlaceholder,
    textLabel,
    passwordLabel,
    auxiliaryButton,
    getPayload,
  } = pathProps[page];

  useEffect(() => {
    setIsDisabled(!(validateEmail.isValid(email) && validatePassword.isValid(password)));
  }, [email, password]);

  return (
    <>
      <main className="primaryPage loginPage">
        <div className="inputsContainer">
          {page === ('/register' || '/profile') && (
            <>
              <Input
                placeholder="First name"
                value={firstName}
                onChange={setFirstName}
              />
              <Input
                placeholder="Last name"
                value={lastName}
                onChange={setLastName}
              />
            </>
          )}
          <Input
            title={textLabel}
            placeholder={inputPlaceholder}
            value={email}
            onChange={setEmail}
            onBlur={isInputValid(setIsEmailValid, validateEmail.isValid)}
            isValid={isEmailValid}
            errorMessage={validateEmail.errorMessage}
            resetValidity={setIsEmailValid}
          />
          <Input
            title={passwordLabel}
            type="password"
            placeholder={passwordPlaceholder}
            value={password}
            onChange={setPassword}
            onBlur={isInputValid(setIsPasswordValid, validatePassword.isValid)}
            isValid={isPasswordValid}
            errorMessage={validatePassword.errorMessage}
            resetValidity={setIsPasswordValid}
          />
        </div>
        <Button
          title={buttonTitle}
          isDisabled={isDisabled}
          onClick={() => onSubmit(getPayload())}
        />
        {auxiliaryButton && auxiliaryButton()}
      </main>
    </>
  );
}

UserForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  page: PropTypes.string.isRequired,
};

export default UserForm;
