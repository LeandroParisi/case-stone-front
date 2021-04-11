/* eslint-disable max-len */
const axios = require('axios');

/**
 * Default fetcher for entire application
 * @param {string} method HTTP method to be used on request
 * @param {string} url Complet URL for the request: server + endpoint
 * @param {object} body Request body
 * @param {object} headers Request headers
 * @returns Object { ...responsePayload } Any relevant information returned by the API. It will always include a key message (even on errors)
 */
const to = async (method, url, body = null, headers = null) => {
  const options = {
    method,
    headers: headers && { ...headers },
    url,
    data: body && { ...body },
  };

  try {
    const response = await axios(options);
    return response.data;
  } catch (error) {
    return { message: error.response.data.message };
  }
};

export default to;
