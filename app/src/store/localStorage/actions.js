import keysLibrary from './keysLibray';

const saveToken = (token) => {
  localStorage.setItem(keysLibrary.token, token);
};

const anotherFunction = () => null;

export {
  saveToken,
  anotherFunction,
};
