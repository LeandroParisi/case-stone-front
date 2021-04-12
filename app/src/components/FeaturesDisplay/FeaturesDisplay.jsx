/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable import/no-cycle */
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import './FeaturesDisplay.scss';
import useLoading from '../../hooks/useLoading';
import { getToken } from '../../store/localStorage/provider';
import getFeature from '../../services/getFeature';

function FeaturesDisplay({ list, cardType }) {
  const [isFetching, setIsFetching] = useState(false);
  const [searchResults, setSearchResults] = useState(null);
  console.log(searchResults);

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

    return null;
  };

  return (
    <>
      { useLoading(isFetching) }
      <div className="comicsDisplay">

        <h4>Featured in:</h4>
        {list && list.length > 0 ? (
          <ul className="listContainer">
            {list.map((item) => (
              <div>
                <li
                  key={item.featureId}
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
        ) : 'Not featured'}
      </div>

    </>

  );
}

FeaturesDisplay.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  cardType: PropTypes.string.isRequired,
};

export default FeaturesDisplay;
