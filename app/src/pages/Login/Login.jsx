import React, { useState, useEffect } from 'react';
import useLoader from '../../hooks/useLoader';
import logo from '../../assets/logo/logo.png';
import { validateEmail, validatePassword } from '../../utils/validations';

import './Login.scss';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    // console.log(validateEmail.isValid(email));
    console.log(validatePassword.isValid(password));

    setIsDisabled(!(validateEmail.isValid(email) && validatePassword.isValid(password)));
  }, [email, password]);

  return (
    <main className="primaryPage">
      { useLoader('main1') }
      <header>
        <img src={logo} alt="app logo" />
      </header>
      <div className="inputsContainer">
        <Input type="text" placeholder="Your email" value={email} onChange={setEmail} />
        <Input type="text" placeholder="Your password" value={password} onChange={setPassword} />
      </div>
      <Button title="Login" isDisabled={isDisabled} />
    </main>
  );
}

export default Login;
