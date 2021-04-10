/* eslint-disable max-len */
const axios = require('axios');

/**
 * Default fetcher for entire application
 * @param {string} method HTTP method to be used on request
 * @param {string} url Complet URL for the request: server + endpoint
 * @param {object} body Request body
 * @param {object} headers Request headers
 * @returns Array [response, error], if there's an error on the request it will return an error on index 1 of the array
 */
const to = async (method, url, body, headers) => {
  const options = {
    method,
    headers: headers && { ...headers },
    url,
    data: body,
  };

  const response = await axios(options);

  if (response.status === 200) {
    return response.data;
  }

  return response;
};

export default to;
