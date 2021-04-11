/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import './SearchListCard.scss';
import splitName from './utils';

function SearchListCard({ asset, type }) {
  const {
    comics, id, name, thumbnails: { xlarge },
  } = asset;

  const splittedName = splitName(name);

  const mainName = splittedName.shift();

  console.log(comics);
  return (
    <section className={`${type}Card`} key={id}>
      <div className="imageSpinner">
        <img src={xlarge} alt={`${name} card`} />
      </div>
      <div className="nameContainer">
        <h2>{ mainName }</h2>
        <p>{ splittedName.join(' ') }</p>
      </div>

    </section>
  );
}

SearchListCard.propTypes = {
  asset: PropTypes.shape({
    comics: PropTypes.shape().isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    thumbnails: PropTypes.shape().isRequired,
  }).isRequired,
  type: PropTypes.string.isRequired,
};

export default SearchListCard;
