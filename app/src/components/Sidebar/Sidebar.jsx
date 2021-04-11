/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';
import './Sidebar.scss';

const options = [
  {
    name: 'Search',
    redirect: '/search',
  },
  {
    name: 'Favorites',
    redirect: '/favorites',
    testId: 'side-menu-item-my-orders',
  },
  {
    name: 'Profile',
    redirect: '/profile',
  },
];

export default function Sidebar({ statePayload: { setIsSidebarOpen } }) {
  const history = useHistory();
  const { pathname } = useLocation();

  const filteredOptions = options.filter((opt) => opt.redirect !== pathname);

  return (
    <ul>
      {filteredOptions
        .map(({ name, redirect }, index) => (
          <>
            <li
              key={name}
              onClick={() => {
                setIsSidebarOpen(false);
                history.push(`${redirect}`);
              }}
              className="menu-item"
              tabIndex={0}
              role="button"
              onKeyDown={() => {
                setIsSidebarOpen(false);
                history.push(`${redirect}`);
              }}
            >
              { name }
            </li>
            { (index < filteredOptions.length - 1) && <hr /> }
          </>
        ))}
    </ul>
  );
}

Sidebar.propTypes = {
  statePayload: PropTypes.shape({
    isSidebarOpen: PropTypes.func.isRequired,
    setIsSidebarOpen: PropTypes.func.isRequired,
  }).isRequired,
};
