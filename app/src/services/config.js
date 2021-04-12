require('dotenv').config();

const url = process.env.BACKEND_SERVER || 'http://localhost:3001';

export const endpoints = {
  login: '/users/login',
  characters: '/characters',
  comics: '/comics',
};

export default url;
