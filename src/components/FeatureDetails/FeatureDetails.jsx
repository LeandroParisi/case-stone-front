import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import unknownHero from '../../assets/images/avatars/unknownHero.jpg';
import splitName from '../SearchListCard/utils';
import './FeatureDetails.scss';

export default function FeatureDetails({ asset, close }) {
  const { description, name, thumbnails: { xlarge } } = asset;

  const splittedName = splitName(name);
  const mainName = splittedName.shift();

  return (
    <>
      <div className="overlay" />
      <div className="cardPopup">
        <img src={xlarge || unknownHero} alt={`${name} card`} />
        <div className="featureContainer">
          <div className="nameContainer">
            <h2>{ mainName }</h2>
            <p>{ splittedName.join(' ') }</p>
          </div>
          <div className="featureDescription">
            <p className="featureDescriptionText">{ description }</p>
          </div>
        </div>
        <button className="closeButton" onClick={close} type="button">
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
    </>
  );
}

FeatureDetails.propTypes = {
  asset: PropTypes.shape({
    description: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    thumbnails: PropTypes.shape().isRequired,
  }).isRequired,
  close: PropTypes.func.isRequired,
};
