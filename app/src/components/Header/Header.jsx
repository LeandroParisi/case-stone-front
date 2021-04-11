import React, { useState } from 'react';
import PropTypes from 'prop-types';
import HamburgerMenu from '../Hamburger-Menu/HamburgerMenu';
import SideBar from '../Sidebar/Sidebar';
import SearchBar from '../SearchBar/SearchBar';
import './Header.scss';

function Header({ categoryPayload }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header>
      <HamburgerMenu isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <SideBar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <SearchBar categoryPayload={categoryPayload} />
    </header>
  );
}

Header.propTypes = {
  categoryPayload: PropTypes.shape({}).isRequired,
};

export default Header;
