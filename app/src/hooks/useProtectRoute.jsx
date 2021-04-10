import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { getToken } from '../store/localStorage/provider';

function useProtectRoute() {
  const [token] = useState(getToken());
  return (
    !token && <Redirect to="/" />
  );
}

export default useProtectRoute;
