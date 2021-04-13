import url from './config';
import to from './to';

const editUser = async (body) => {
  const editUserURL = `${url}/users`;

  const response = await to('PUT', editUserURL, body);

  return response;
};

export default editUser;
