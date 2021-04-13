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
      <SearchBar payloads={props} isSearch={isSearch} />
      <SideBarContainer
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        type="sideMenu"
      />
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  isSearch: PropTypes.bool,
};

Header.defaultProps = {
  title: '',
  isSearch: false,
};

export default Header;
