/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import './SearchListCard.scss';
import splitName from './utils';
import SideBarContainer from '../../containers/SideBar/SideBarContainer';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import useIsMount from '../../hooks/useIsMount';
import { getToken } from '../../store/localStorage/provider';
import postFavorite from '../../services/postFavorite';
import deleteFavorite from '../../services/deleteFavorite';
import unknownHero from '../../assets/images/avatars/unknownHero.jpg';

function SearchListCard({ asset, type, isFavoritePage }) {
  const [openDetails, setOpenDetails] = useState(false);
  const [isFavorite, setIsFavorite] = useState(asset.isFavorited);
  const isMount = useIsMount();

  const {
    id, name, thumbnails: { xlarge },
  } = asset;

  useEffect(() => {
    setIsFavorite(asset.isFavorited);
    return () => {
      setIsFavorite(false);
    };
  }, [asset]);

  useEffect(() => {
    const dispatchAddFavorite = async () => {
      const token = getToken();
      const body = { type, asset };
      const { message } = await postFavorite(body, id, { Authorization: token });
      if (message) {
        return toast.error(message);
      }
      return null;
    };

    const dispatchRemoveFavorite = async () => {
      const token = getToken();
      const body = { type };
      const { message } = await deleteFavorite(body, id, { Authorization: token });
      if (message) {
        return toast.error(message);
      }
      return null;
    };

    if (!isMount && isFavorite) {
      dispatchAddFavorite();
    }

    if (!isMount && !isFavorite) {
      dispatchRemoveFavorite();
    }
  }, [isFavorite]);

  const splittedName = splitName(name);

  const mainName = splittedName.shift();

  const detailsColor = openDetails ? '#F2D335' : '#0a1c20';

  return (
    <section className={`${type}Card`} key={id}>
      <img src={xlarge || unknownHero} alt={`${name} card`} />
      <div className="nameContainer">
        <h2>{ mainName }</h2>
        <p>{ splittedName.join(' ') }</p>
      </div>
      {!isFavoritePage && (
        <>
          <div className="cardOptions">
            <FavoriteButton className="option" onClick={() => setIsFavorite(!isFavorite)} isFavorite={isFavorite} />
            <div className="option">
              <FontAwesomeIcon icon={faInfo} className="icon info" color={detailsColor} onClick={() => setOpenDetails(!openDetails)} />
            </div>
          </div>

          <SideBarContainer
            asset={asset}
            type="card"
            cardType={type}
            isSidebarOpen={openDetails}
            setIsSidebarOpen={setOpenDetails}
            close={() => setOpenDetails(false)}
            isFavorite={isFavorite}
            setIsFavorite={setIsFavorite}
          />
        </>
      )}
    </section>
  );
}

SearchListCard.propTypes = {
  asset: PropTypes.shape({
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    thumbnails: PropTypes.shape().isRequired,
    isFavorited: PropTypes.bool.isRequired,
  }).isRequired,
  type: PropTypes.string.isRequired,
  isFavoritePage: PropTypes.bool.isRequired,
};

export default SearchListCard;
