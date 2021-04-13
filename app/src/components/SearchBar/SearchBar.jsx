import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faUser } from '@fortawesome/free-solid-svg-icons';
import Input from '../Input/Input';
import './SearchBar.scss';
import HeadersIcons from '../HeaderIcons/HeadersIcons';

function SearchBar({
  payloads: {
    openSearchSideBar,
    inputPayload: { searchQuery, setSearchQuery },
    categoryPayload: { searchCategory, setSearchCategory },
  },
}) {
  const placeHolderText = `Search by ${searchCategory}`;

  const onClickCharacters = () => setSearchCategory('characters');
  const onClickComics = () => setSearchCategory('comics');

  return (
    <div className="searchContainer">
      <Input className="searchInput" placeholder={placeHolderText} value={searchQuery} onChange={setSearchQuery} onFocus={() => openSearchSideBar} />
      <div className="searchTypeContainer">
        <HeadersIcons
          onClickCharacters={onClickCharacters} 
          onClickComics={onClickComics} 
          searchCategory={searchCategory} 
        />
      </div>
    </div>
  );
}

SearchBar.propTypes = {
  payloads: PropTypes.shape({
    inputPayload: PropTypes.shape({
      searchQuery: PropTypes.string.isRequired,
      setSearchQuery: PropTypes.func.isRequired,
    }).isRequired,
    openSearchSideBar: PropTypes.func.isRequired,
    categoryPayload: PropTypes.shape({
      searchCategory: PropTypes.oneOf(['characters', 'comics']).isRequired,
      setSearchCategory: PropTypes.func.isRequired,
    }).isRequired,
  }).isRequired,
};

export default SearchBar;
