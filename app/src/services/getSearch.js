import url, { endpoints } from './config';
import to from './to';
import { parseSearchQuery } from './utils';

const getSearch = async (requestPayload) => {
  const { searchQuery, searchCategory, token } = requestPayload;
  const parsedQuery = parseSearchQuery(searchQuery);
  const getUrl = `${url}${endpoints[searchCategory]}/search?query=${parsedQuery}`;

  console.log(getUrl);

  const response = to('GET', getUrl, null, { authorization: token });

  return response;
};

export default getSearch;
