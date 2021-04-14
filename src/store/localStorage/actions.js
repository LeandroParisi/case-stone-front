import keysLibrary from './keysLibray';

const saveToken = (token) => {
  localStorage.setItem(keysLibrary.token, token);
};

const saveUser = (user) => {
  localStorage.setItem(keysLibrary.user, JSON.stringify(user));
};

const anotherFunction = () => null;

export {
  saveToken,
  anotherFunction,
  saveUser,
};
