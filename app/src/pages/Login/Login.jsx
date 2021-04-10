// import React, { useEffect, useState } from 'react';
import React from 'react';
// import Loader from '../../assets/Loaders/Loader';
import useLoader from '../../hooks/useLoader';

function Login() {
  return (
    <main>
      { useLoader('main1') }
      teste
    </main>
  );
}

export default Login;
