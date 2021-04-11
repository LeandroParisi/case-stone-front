import React from 'react';
import Loader from '../assets/Loaders/Loader';
import { getImage } from '../assets/Loaders/loaderDictionary';

const messageDictionaries = {
  fetch: 'We are retrieving your data, hold tight!',
};

const useLoading = (image, show, type = null) => {
  const message = type && messageDictionaries[type];

  const { src, bgColor } = getImage(image);

  return (
    show && <Loader src={src} backgroundColor={bgColor} message={message} />
  );
};

export default useLoading;
