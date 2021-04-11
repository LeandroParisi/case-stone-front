import React from 'react';
import PropTypes from 'prop-types';
import './CardDetails.scss';
import splitName from '../SearchListCard/utils';
import ComicsDisplay from '../ComicsDisplay/ComicsDisplay';

function CardDetails({ asset, type }) {
  const {
    comics, id, name, thumbnails: { xlarge }, description,
  } = asset;

  const splittedName = splitName(name);

  const mainName = splittedName.shift();

  console.log(comics);

  return (
    <section className={`${type}Details`} key={id}>
      <section className="cardHeader">
        <img src={xlarge} alt={`${name} card`} />
        <ComicsDisplay list={comics} />
      </section>
      <div className="nameContainer">
        <h2>{ mainName }</h2>
        <p>{ splittedName.join(' ') }</p>
      </div>
      <div className="description">
        <p className="descriptionText">{ description }</p>
      </div>
    </section>
  );
}

CardDetails.propTypes = {
  asset: PropTypes.shape({
    comics: PropTypes.shape().isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    thumbnails: PropTypes.shape().isRequired,
  }).isRequired,
  type: PropTypes.string.isRequired,
};

export default CardDetails;
