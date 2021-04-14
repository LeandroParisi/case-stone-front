import { getToken } from '../store/localStorage/provider';
import url from './config';
import to from './to';
import { capitalize } from './utils';

const getFavorites = async (type) => {
  const token = getToken();

  const getUrl = `${url}/users/favorite${capitalize(type)}`;

  const response = to('GET', getUrl, null, { authorization: token });

  return response;
};

export default getFavorites;
