import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function FavoriteButton({ className, onClick, isFavorite }) {
  const likeColor = isFavorite ? '#880000' : '#0a1c20';

  return (
    <div
      className={className}
      onClick={() => onClick(!isFavorite)}
      role="button"
      onKeyDown={() => onClick(!isFavorite)}
      tabIndex={0}
    >
      <FontAwesomeIcon icon={faHeart} className="icon info" color={likeColor} />
    </div>
  );
}

FavoriteButton.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.string.isRequired,
  isFavorite: PropTypes.string.isRequired,
};

export default FavoriteButton;
