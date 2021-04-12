import React from 'react';
import PropTypes from 'prop-types';
import './FeaturesDisplay.scss';
import { getToken } from '../../store/localStorage/provider';

function FeaturesDisplay({ list, cardType }) {
  const fetchFeature = async (featureId) => {
    const token = getToken();
    const requestPayload = { id, featureId, cardType };
  };

  return (
    <div className="comicsDisplay">
      <h4>Featured in:</h4>
      {list && list.length > 0 ? (
        <ul className="listContainer">
          {list.map((item) => (
            <div>
              <li key={item.featureId}>{item.name}</li>
            </div>
          ))}
        </ul>
      ) : 'Not featured'}
    </div>
  );
}

FeaturesDisplay.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  cardType: PropTypes.string.isRequired,
};

export default FeaturesDisplay;
