/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';
import './SearchSideBar.scss';

export default function SearchSideBar({ isSearchSideBarOpen, setIsSearchSideBarOpen }) {
  const history = useHistory();
  const { pathname } = useLocation();
  const clicked = !isSearchSideBarOpen && 'move-menu';

  const filteredOptions = options.filter((opt) => opt.redirect !== pathname);

  return (
    <nav className={`${clicked}`}>
      <ul>
        {filteredOptions
          .map(({ name, redirect }, index) => (
            <>
              <li
                key={name}
                onClick={() => {
                  setIsSearchSideBarOpen(false);
                  history.push(`${redirect}`);
                }}
                className="menu-item"
                tabIndex={0}
                role="button"
                onKeyDown={() => {
                  setIsSearchSideBarOpen(false);
                  history.push(`${redirect}`);
                }}
              >
                { name }
              </li>
              { (index < filteredOptions.length - 1) && <hr /> }
            </>
          ))}
      </ul>
    </nav>
  );
}

SearchSideBar.propTypes = {
  isSearchSideBarOpen: PropTypes.func.isRequired,
  setIsSearchSideBarOpen: PropTypes.func.isRequired,
};
