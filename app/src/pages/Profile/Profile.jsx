import React from 'react';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router';
import UserForm from '../../components/UserForm/UserForm';
import useProtectRoute from '../../hooks/useProtectRoute';
import editUser from '../../services/editUser';
import Header from '../../components/Header/Header';

function Profile() {
  const { pathname } = useLocation();

  const handleButtonClick = async (payload) => {
    const { status, message } = await editUser(payload);
    if (status === 'ok') {
      return toast.success(message);
    }
    return toast.error(message);
  };

  return (
    <>
      { useProtectRoute() }
      <Header page={pathname} />
      <UserForm onSubmit={handleButtonClick} page={pathname} />
    </>
  );
}

export default Profile;
