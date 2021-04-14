import url from './config';
import to from './to';

const saveUser = async (body) => {
  const saveUserURL = `${url}/users`;

  const response = await to('POST', saveUserURL, body);

  return response;
};

export default saveUser;
