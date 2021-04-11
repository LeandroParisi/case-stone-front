/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faInfo } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import './SearchListCard.scss';
import splitName from './utils';
import SideBarContainer from '../../containers/SideBar/SideBarContainer';

function SearchListCard({ asset, type }) {
  const [openDetails, setOpenDetails] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const {
    comics, id, name, thumbnails: { xlarge },
  } = asset;

  console.log(comics);

  const splittedName = splitName(name);

  const mainName = splittedName.shift();

  const detailsColor = openDetails ? '#F2D335' : '#0a1c20';

  const likeColor = isFavorite ? '#F2D335' : '#0a1c20';

  return (
    <section className={`${type}Card`} key={id}>
      <div className="imageSpinner">
        <img src={xlarge} alt={`${name} card`} />
      </div>
      <div className="nameContainer">
        <h2>{ mainName }</h2>
        <p>{ splittedName.join(' ') }</p>
      </div>
      <div className="cardOptions">
        <div className="option" onClick={() => setOpenDetails(!openDetails)}>
          <FontAwesomeIcon icon={faHeart} className="icon heart" color={likeColor} />
        </div>
        <div className="option" onClick={() => setIsFavorite(!isFavorite)}>
          <FontAwesomeIcon icon={faInfo} className="icon info" color={detailsColor} />
        </div>
      </div>
      <SideBarContainer type="card" isSidebarOpen={openDetails} setIsSidebarOpen={setOpenDetails} close={() => setOpenDetails(false)} />
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
