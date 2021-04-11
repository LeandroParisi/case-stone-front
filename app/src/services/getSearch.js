// import url, { endpoints } from './config';
// import to from './to';
import { parseSearchQuery } from './utils';

const getSearch = async (requestPayload) => {
  // const { searchQuery, searchCategory } = requestPayload;
  const parsedQuery = parseSearchQuery(requestPayload.searchQuery);
  console.log(parsedQuery);
  // const getUrl = `${url}${endpoints[searchCategory]}/search?query=${searchQuery}`;

  // const response = to('GET', getUrl);

  // return response;
};

export default getSearch;
