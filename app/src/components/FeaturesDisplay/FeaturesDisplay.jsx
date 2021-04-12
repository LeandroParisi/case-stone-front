import React from 'react';
import PropTypes from 'prop-types';
import './FeaturesDisplay.scss';

function FeaturesDisplay({ list }) {
  return (
    <div className="comicsDisplay">
      <h4>Featured in:</h4>
      {list && list.length > 0 ? (
        <ul className="listContainer">
          {list.map((item) => <li key={item.comicId}>{item.name}</li>)}
        </ul>
      ) : 'Not featured'}
    </div>
  );
}

FeaturesDisplay.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default FeaturesDisplay;
