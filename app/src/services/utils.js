import { toast } from 'react-toastify';
import { saveToken, saveUser } from '../store/localStorage/actions';

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const parseSearchQuery = (query) => capitalize(query.toLowerCase());

const dispatchUserAction = async (fetch, requestPayload, history) => {
  const { token, message, user } = await fetch(requestPayload);
  if (!token) {
    return toast.error(message);
  }
  saveToken(token);
  saveUser(user);
  return history.push('/search');
};

export {
  parseSearchQuery,
  capitalize,
  dispatchUserAction,
};
