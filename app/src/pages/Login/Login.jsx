import React from 'react';
import useLoader from '../../hooks/useLoader';
import logo from '../../assets/logo/logo.png';

import './Login.scss';

function Login() {
  return (
    <main className="primaryPage">
      { useLoader('main1') }
      <header>
        <img src={logo} alt="app logo" />
      </header>
    </main>
  );
}

export default Login;
