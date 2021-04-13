import url from './config';
import to from './to';

const saveUser = async (body) => {
  const saveUserURL = `${url}/users`;
  console.log(saveUserURL);

  const response = await to('POST', saveUserURL, body);

  return response;
};

export default saveUser;
