import React from 'react';
import useLoader from '../../hooks/useLoader';
import logo from '../../assets/logo/logo.png';

import './Login.scss';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

function Login() {
  return (
    <main className="primaryPage">
      { useLoader('main1') }
      <header>
        <img src={logo} alt="app logo" />
      </header>
      <div className="inputsContainer">
        <Input type="text" placeholder="Your email" />
        <Input type="password" placeholder="Your password" />
      </div>
      <Button title="Login" />
    </main>
  );
}

export default Login;
