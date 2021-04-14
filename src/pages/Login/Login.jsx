import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
// import { toast } from 'react-toastify';
import useLoader from '../../hooks/useLoader';
import './Login.scss';
import postLogin from '../../services/postLogin';
// import { saveToken, saveUser } from '../../store/localStorage/actions';
import UserForm from '../../components/UserForm/UserForm';
import { dispatchUserAction } from '../../services/utils';
import useLoading from '../../hooks/useLoading';

function Login() {
  const history = useHistory();
  const { pathname } = useLocation();
  const [isFetching, setIsFetching] = useState(false);

  const handleButtonClick = async (payload) => {
    setIsFetching(true);
    await dispatchUserAction(postLogin, payload, history);
    setIsFetching(false);
  };

  return (
    <>
      { useLoading(isFetching) }
      { useLoader('main1') }
      <UserForm onSubmit={handleButtonClick} page={pathname} />
    </>
  );
}

export default Login;
