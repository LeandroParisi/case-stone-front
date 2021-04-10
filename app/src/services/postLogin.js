import url, { endpoints } from './config';
import to from './to';

const postLogin = async (body) => {
  const loginUrl = `${url}${endpoints.login}`;

  const response = await to('POST', loginUrl, body);

  return response;
};

export default postLogin;
