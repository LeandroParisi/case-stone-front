/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
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

export default function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
  const history = useHistory();
  const clicked = !isSidebarOpen && 'move-menu';

  return (
    <nav className={`${clicked}`}>
      <ul>
        {options.map(({ name, redirect }, index) => (
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
            { (index < options.length - 1) && <hr /> }
          </>
        ))}
      </ul>
    </nav>
  );
}

Sidebar.propTypes = {
  isSidebarOpen: PropTypes.func.isRequired,
  setIsSidebarOpen: PropTypes.func.isRequired,
};
