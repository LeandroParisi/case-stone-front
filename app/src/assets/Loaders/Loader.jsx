import React from 'react';
import PropTypes from 'prop-types';
import loaderImages from './loaderDictionary';
import './Loader.scss';

function Loader({ image }) {
  return (
    <div className="loader">
      <img src={loaderImages[image].src} alt="Loading" />
    </div>
  );
}

Loader.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Loader;
