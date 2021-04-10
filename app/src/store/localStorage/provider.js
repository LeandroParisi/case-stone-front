import keysLibrary from './keysLibray';

const getToken = () => {
  const token = localStorage.getItem(keysLibrary.token);
  return token;
};

const anotherFunction = () => null;

export {
  getToken,
  anotherFunction,
};
