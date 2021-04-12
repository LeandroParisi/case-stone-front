import url, { endpoints } from './config';
import to from './to';

const getFeature = async (requestPayload) => {
  const { id, type, token } = requestPayload;

  const getUrl = `${url}${endpoints[type]}/${id}`;

  const response = to('GET', getUrl, null, { authorization: token });

  return response;
};

export default getFeature;
