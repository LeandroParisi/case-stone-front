import url, { endpoints } from './config';
import to from './to';
import { parseSearchQuery } from './utils';

const getSearch = async (requestPayload) => {
  const { searchQuery, searchCategory } = requestPayload;
  const parsedQuery = parseSearchQuery(searchQuery);
  const getUrl = `${url}${endpoints[searchCategory]}/search?query=${parsedQuery}`;

  const response = to('GET', getUrl);

  return response;
};

export default getSearch;
