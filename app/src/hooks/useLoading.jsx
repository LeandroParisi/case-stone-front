import React  from 'react';
import Loader from '../assets/Loaders/Loader';
import { getImage } from '../assets/Loaders/loaderDictionary';

const useLoading = (image, show) => {
  const { src } = getImage(image);

  return (
    show && <Loader src={src} />
  );
};

export default useLoading;
