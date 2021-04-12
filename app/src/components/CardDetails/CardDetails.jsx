import React from 'react';
import PropTypes from 'prop-types';
import './CardDetails.scss';
import splitName from '../SearchListCard/utils';
import FeaturesDisplay from '../FeaturesDisplay/FeaturesDisplay';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import unknownHero from '../../assets/images/avatars/unknownHero.jpg';

function CardDetails({
  asset, type, isFavorite, onClick,
}) {
  const {
    comics, id, name, thumbnails: { xlarge }, description,
  } = asset;

  const splittedName = splitName(name);

  const mainName = splittedName.shift();

  console.log(comics);

  return (
    <section className={`${type}Details`} key={id}>
      <section className="cardHeader">
        <div className="imageContainer">
          <img src={xlarge || unknownHero} alt={`${name} card`} />
          <FavoriteButton className="detailsFavButton" onClick={onClick} isFavorite={isFavorite} />
        </div>
        <FeaturesDisplay list={comics} />
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
  isFavorite: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CardDetails;
