import React from 'react';
import PropTypes from 'prop-types';
import './Loader.scss';

function Loader({ src }) {
  return (
    <div className="loader">
      <img src={src} alt="Loading" />
    </div>
  );
}

Loader.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Loader;
