import React from 'react';
import { toast } from 'react-toastify';
import { useHistory, useLocation } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import UserForm from '../../components/UserForm/UserForm';
import useProtectRoute from '../../hooks/useProtectRoute';
import editUser from '../../services/editUser';
import './Profile.scss';

function Profile() {
  const { pathname } = useLocation();
  const history = useHistory();

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
      <UserForm onSubmit={handleButtonClick} page={pathname} />
      <div className="closeProfile" onClick={() => history.push('/search')} role="button" tabIndex={0} onKeyDown={() => history.push('/search')}>
        <FontAwesomeIcon icon={faArrowLeft} color="white" size="2x" />
      </div>
    </>
  );
}

export default Profile;
