import React, { useState, useEffect } from 'react';
import useLoader from '../../hooks/useLoader';
import { validateEmail, validatePassword, isInputValid } from '../../utils/validations';
import './Login.scss';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import postLogin from '../../services/postLogin';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(null);
  const [isPasswordValid, setIsPasswordValid] = useState(null);

  useEffect(() => {
    setIsDisabled(!(validateEmail.isValid(email) && validatePassword.isValid(password)));
  }, [email, password]);

  const handleButtonClick = () => {

  };

  postLogin({ email: 'leandro@gmail.com', password: 'leandro123' });

  return (
    <>
      { useLoader('main1') }
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
        <Button title="Login" isDisabled={isDisabled} onClick={handleButtonClick} />
      </main>
    </>
  );
}

export default Login;
