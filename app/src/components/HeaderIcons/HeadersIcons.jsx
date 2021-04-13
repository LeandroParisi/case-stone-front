import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faUser } from '@fortawesome/free-solid-svg-icons';

function HeadersIcons({ onClickCharacters, onClickComics, searchCategory }) {
  return (
    <>
      <div
        className="searchIconContainer"
        onClick={onClickCharacters}
        role="button"
        tabIndex={0}
        onKeyDown={onClickCharacters}
      >
        <FontAwesomeIcon icon={faUser} color={searchCategory === 'characters' ? '#F2D335' : 'white'} className="searchIcon book" />
      </div>
      <div
        className="searchIconContainer"
        onClick={onClickComics}
        role="button"
        tabIndex={0}
        onKeyDown={onClickComics}
      >
        <FontAwesomeIcon icon={faBook} color={searchCategory === 'comics' ? '#F2D335' : 'white'} className="searchIcon user" />
      </div>
    </>
  );
}

HeadersIcons.propTypes = {
  onClickCharacters: PropTypes.func.isRequired,
  onClickComics: PropTypes.func.isRequired,
  searchCategory: PropTypes.string.isRequired,
};

export default HeadersIcons;
