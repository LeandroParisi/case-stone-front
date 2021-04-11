import React, { useState } from 'react';
import HamburgerMenu from '../Hamburger-Menu/HamburgerMenu';
import SearchBar from '../SearchBar/SearchBar';
import './Header.scss';
import SideBarContainer from '../../containers/SideBar/SideBarContainer';

function Header({ ...props }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [searchCategory, setSearchCategory] = useState('characters');
  const [searchQuery, setSearchQuery] = useState('');

  const categoryPayload = { searchCategory, setSearchCategory };
  const inputPayload = { searchQuery, setSearchQuery };

  return (
    <header>
      <HamburgerMenu isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <SearchBar categoryPayload={categoryPayload} inputPayload={inputPayload} others={props} />
      <SideBarContainer
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        type="sideMenu"
      />
    </header>
  );
}

export default Header;
