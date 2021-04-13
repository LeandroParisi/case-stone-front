import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import './SearchBar.scss';
import HeadersIcons from '../HeaderIcons/HeadersIcons';

function SearchBar({
  payloads: {
    openSearchSideBar,
    inputPayload = {},
    categoryPayload: { searchCategory, setSearchCategory },
  },
  isSearch,
}) {
  const placeHolderText = `Search by ${searchCategory}`;

  const onClickCharacters = () => setSearchCategory('characters');
  const onClickComics = () => setSearchCategory('comics');

  return (
    <div className="searchContainer">
      {isSearch && <Input className="searchInput" placeholder={placeHolderText} value={inputPayload.searchQuery} onChange={inputPayload.setSearchQuery} onFocus={() => openSearchSideBar} />}
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
      searchQuery: PropTypes.string,
      setSearchQuery: PropTypes.func,
    }),
    openSearchSideBar: PropTypes.func,
    categoryPayload: PropTypes.shape({
      searchCategory: PropTypes.oneOf(['characters', 'comics']).isRequired,
      setSearchCategory: PropTypes.func.isRequired,
    }).isRequired,
  }).isRequired,
  isSearch: PropTypes.bool.isRequired,
};

export default SearchBar;
