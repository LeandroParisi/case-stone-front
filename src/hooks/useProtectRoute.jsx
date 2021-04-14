import React from 'react';
import { Redirect } from 'react-router';
import { getToken } from '../store/localStorage/provider';

function useProtectRoute() {
  return (
    !getToken() && <Redirect to="/" />
  );
}

export default useProtectRoute;
