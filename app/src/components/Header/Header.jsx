import React, { useState } from 'react';
import PropTypes from 'prop-types';
import HamburgerMenu from '../Hamburger-Menu/HamburgerMenu';
import SearchBar from '../SearchBar/SearchBar';
import './Header.scss';
import SideBarContainer from '../../containers/SideBar/SideBarContainer';

function Header({ isSearch, title, ...props }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header>
      {title && (
      <h1>
        { title }
      </h1>
      )}
      <HamburgerMenu isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      {isSearch && (
      <SearchBar payloads={props} />
      )}
      <SideBarContainer
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        type="sideMenu"
      />
    </header>
  );
}

Header.propTypes = {
  isSearch: PropTypes.bool,
  title: PropTypes.string,
};

Header.defaultProps = {
  isSearch: false,
  title: '',
};

export default Header;
