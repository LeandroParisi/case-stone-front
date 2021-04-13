import React from 'react';
import PropTypes from 'prop-types';
import './FeatureDetails.scss';

function FeatureDetails({ asset }) {
  const { description, name, thumbnails: { xlarge } } = asset;

  return (
    <div className="overlay">
      <div className="cardPopup">
        <div className="popupContainer">
          <img src={xlarge || unknownHero} alt={`${name} card`} />
        </div>
        <div className="nameContainer">
          <h2>{ mainName }</h2>
          <p>{ splittedName.join(' ') }</p>
        </div>
        <div className="description">
          <p className="descriptionText">{ description }</p>
        </div>

      </div>
    </div>
  );
}

FeatureDetails.propTypes = {
  asset: PropTypes.shape({
    description: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    thumbnails: PropTypes.shape().isRequired,
  }).isRequired,
};
