import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import UserForm from '../../components/UserForm/UserForm';
import useProtectRoute from '../../hooks/useProtectRoute';
import { dispatchUserAction } from '../../services/utils';
import saveUser from '../../services/saveUser';
import useLoading from '../../hooks/useLoading';

function Register() {
  const history = useHistory();
  const { pathname } = useLocation();
  const [isFetching, setIsFetching] = useState(false);

  const handleButtonClick = async (payload) => {
    setIsFetching(true);
    dispatchUserAction(saveUser, payload, history);
    setIsFetching(false);
  };

  return (
    <>
      { useLoading(isFetching) }
      { useProtectRoute() }
      <UserForm onSubmit={handleButtonClick} page={pathname} />
    </>
  );
}

export default Register;
