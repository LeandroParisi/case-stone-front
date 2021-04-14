import React from 'react';
import PropTypes from 'prop-types';
import './SearchSideBar.scss';

export default function SearchSideBar({ onClick }) {
  return (
    <div className="searchBallonContainer">
      <div className="searchBallon" onClick={onClick} tabIndex={0} onKeyDown={onClick} role="button">
        <h1 className="searchText">
          Search!
        </h1>
      </div>
    </div>
  );
}

SearchSideBar.propTypes = {
  onClick: PropTypes.func.isRequired,
};
