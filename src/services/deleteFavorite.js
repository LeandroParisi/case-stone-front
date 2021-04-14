import url, { endpoints } from './config';
import to from './to';

const deleteFavorite = async (body, id, headers) => {
  const deleteFavoriteURL = `${url}${endpoints[body.type]}/${id}`;

  const response = await to('DELETE', deleteFavoriteURL, body, headers);

  return response;
};

export default deleteFavorite;
