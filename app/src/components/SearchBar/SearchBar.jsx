import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faUser } from '@fortawesome/free-solid-svg-icons';
import Input from '../Input/Input';
import './SearchBar.scss';

function SearchBar({ categoryPayload }) {
  const placeHolderText = `Search by ${'c'}`;
  return (
    <div className="searchContainer">
      <Input className="searchInput" placeholder={placeHolderText} />
      <div className="searchTypeContainer">
        <div className="searchIconContainer">
          <FontAwesomeIcon icon={faBook} color="white" className="searchIcon book" />
        </div>
        <div className="searchIconContainer">
          <FontAwesomeIcon icon={faUser} color="white" className="searchIcon user" />
        </div>
      </div>
    </div>
  );
}

SearchBar.propTypes = {
  categoryPayload: PropTypes.shape({}).isRequired,
};

export default SearchBar;
