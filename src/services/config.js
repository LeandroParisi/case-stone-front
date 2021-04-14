require('dotenv').config();

const url = process.env.BACKEND_SERVER || 'https://marvelousapp-front.herokuapp.com';

export const endpoints = {
  login: '/users/login',
  characters: '/characters',
  comics: '/comics',
};

export default url;
