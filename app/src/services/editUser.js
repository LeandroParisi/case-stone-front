import url from './config';
import to from './to';

const editUser = async (body, token) => {
  const editUserURL = `${url}/users`;

  const response = await to('PUT', editUserURL, body, { authorization: token });

  return response;
};

export default editUser;
