import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faUser } from '@fortawesome/free-solid-svg-icons';
import Input from '../Input/Input';
import './SearchBar.scss';

function SearchBar({
  categoryPayload: { searchCategory, setSearchCategory },
  others: { openSearchSideBar, inputPayload: { searchQuery, setSearchQuery } },
}) {
  const placeHolderText = `Search by ${searchCategory}`;
  return (
    <div className="searchContainer">
      <Input className="searchInput" placeholder={placeHolderText} value={searchQuery} onChange={setSearchQuery} onFocus={() => openSearchSideBar} />
      <div className="searchTypeContainer">
        <div
          className="searchIconContainer"
          onClick={() => setSearchCategory('characters')}
          role="button"
          tabIndex={0}
          onKeyDown={() => setSearchCategory('characters')}
        >
          <FontAwesomeIcon icon={faUser} color={searchCategory === 'characters' ? '#F2D335' : 'white'} className="searchIcon book" />
        </div>
        <div
          className="searchIconContainer"
          onClick={() => setSearchCategory('comics')}
          role="button"
          tabIndex={0}
          onKeyDown={() => setSearchCategory('comics')}
        >
          <FontAwesomeIcon icon={faBook} color={searchCategory === 'comics' ? '#F2D335' : 'white'} className="searchIcon user" />
        </div>
      </div>
    </div>
  );
}

SearchBar.propTypes = {
  categoryPayload: PropTypes.shape({
    searchCategory: PropTypes.oneOf('characters, comics').isRequired,
    setSearchCategory: PropTypes.func.isRequired,
  }).isRequired,
  others: PropTypes.shape({
    inputPayload: PropTypes.shape({
      searchQuery: PropTypes.string.isRequired,
      setSearchQuery: PropTypes.func.isRequired,
    }).isRequired,
    openSearchSideBar: PropTypes.func.isRequired,
  }).isRequired,
};

export default SearchBar;
