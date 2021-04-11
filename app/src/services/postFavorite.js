import url, { endpoints } from './config';
import to from './to';

const postFavorite = async (body, id, headers) => {
  const loginUrl = `${url}${endpoints.characters}/${id}`;

  const response = await to('POST', loginUrl, body, headers);

  return response;
};

export default postFavorite;
