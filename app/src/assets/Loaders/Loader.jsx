import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Loader.scss';

function Loader({ src, backgroundColor }) {
  return (
    <div className={classNames(
      'loader',
      { backgroundColor },
    )}
    >
      <img src={src} alt="Loading" />
    </div>
  );
}

Loader.propTypes = {
  src: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
};

Loader.defaultProps = {
  backgroundColor: '',
};

export default Loader;
