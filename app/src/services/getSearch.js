import url, { endpoints } from './config';
import to from './to';

const getSearch = async (requestPayload) => {
  const { searchQuery, searchCategory } = requestPayload;
  const getUrl = `${url}${endpoints[searchCategory]}?query=${searchQuery}`;

  const response = to('GET', getUrl);

  return response;
};

export default getSearch;
