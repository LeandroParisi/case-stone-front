/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React from 'react';
// import PropTypes from 'prop-types';
import './SearchSideBar.scss';

export default function SearchSideBar() {
  return (
    <div className="searchBallonContainer">
      <div className="searchBallon">
        <h1 className="searchText">
          Search!
        </h1>
      </div>
    </div>
  );
}

// SearchSideBar.propTypes = {
//   isSearchSideBarOpen: PropTypes.func.isRequired,
//   setIsSearchSideBarOpen: PropTypes.func.isRequired,
// };
