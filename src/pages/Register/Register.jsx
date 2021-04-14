import React from 'react';
import { useHistory, useLocation } from 'react-router';
import UserForm from '../../components/UserForm/UserForm';
import useProtectRoute from '../../hooks/useProtectRoute';
import { dispatchUserAction } from '../../services/utils';
import saveUser from '../../services/saveUser';

function Register() {
  const history = useHistory();
  const { pathname } = useLocation();

  const handleButtonClick = async (payload) => {
    dispatchUserAction(saveUser, payload, history);
  };

  return (
    <>
      { useProtectRoute() }
      <UserForm onSubmit={handleButtonClick} page={pathname} />
    </>
  );
}

export default Register;
