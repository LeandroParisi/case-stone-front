import React from 'react';
import { useHistory, useLocation } from 'react-router';
// import { toast } from 'react-toastify';
import useLoader from '../../hooks/useLoader';
import './Login.scss';
import postLogin from '../../services/postLogin';
// import { saveToken, saveUser } from '../../store/localStorage/actions';
import UserForm from '../../components/UserForm/UserForm';
import { dispatchUserAction } from '../../services/utils';

function Login() {
  const history = useHistory();
  const { pathname } = useLocation();

  const handleButtonClick = async (payload) => {
    dispatchUserAction(postLogin, payload, history);
  };

  return (
    <>
      { useLoader('main1') }
      <UserForm onSubmit={handleButtonClick} page={pathname} />
    </>
  );
}

export default Login;
