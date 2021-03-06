/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable import/no-cycle */
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import './FeaturesDisplay.scss';
import useLoading from '../../hooks/useLoading';
import { getToken } from '../../store/localStorage/provider';
import getFeature from '../../services/getFeature';
import FeatureDetails from '../FeatureDetails/FeatureDetails';

function FeaturesDisplay({ list, cardType }) {
  const [isFetching, setIsFetching] = useState(false);
  const [searchResults, setSearchResults] = useState(null);
  const [showFeature, setShowFeature] = useState(false);

  const cardTypeOptions = ['characters', 'comics'];

  const type = cardTypeOptions.find((t) => t !== cardType);

  const fetchFeature = async (featureId) => {
    const token = getToken();
    const requestPayload = { id: featureId, type, token };
    setIsFetching(true);
    const { message, result, type: assetType } = await getFeature(requestPayload);

    if (message) {
      setIsFetching(false);
      return toast.error(message);
    }

    setSearchResults({ result, assetType });
    setIsFetching(false);
    setShowFeature(true);

    return null;
  };

  return (
    <>
      { useLoading(isFetching) }
      {showFeature && (
        <FeatureDetails asset={searchResults.result} close={() => setShowFeature(false)} />
      )}
      <div className="comicsDisplay">
        <h4>{ cardType === 'characters' ? 'Featured in:' : 'Features:'}</h4>
        {list && list.length > 0 ? (
          <ul className="listContainer">
            {list.map((item) => (
              <div>
                <li
                  key={item.featureId} // retirar
                  tabIndex={0}
                  role="button"
                  onClick={() => fetchFeature(item.featureId)}
                  onKeyDown={() => fetchFeature(item.featureId)}
                >
                  {item.name}
                </li>
              </div>
            ))}
          </ul>
        ) : cardType === 'characters' ? 'Not featured' : 'no one'}
      </div>

    </>

  );
}

FeaturesDisplay.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  cardType: PropTypes.string.isRequired,
};

export default FeaturesDisplay;
