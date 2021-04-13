import React from 'react';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import useLoader from '../../hooks/useLoader';
import './Login.scss';
import postLogin from '../../services/postLogin';
import { saveToken } from '../../store/localStorage/actions';
import UserForm from '../../components/UserForm/UserForm';

function Login() {
  const history = useHistory();

  const handleButtonClick = async (email, password) => {
    const { token, message } = await postLogin({ email, password });
    if (!token) {
      return toast.error(message);
    }
    saveToken(token);
    return history.push('/search');
  };

  return (
    <>
      { useLoader('main1') }
      <UserForm onSubmit={handleButtonClick} />
    </>
  );
}

export default Login;
