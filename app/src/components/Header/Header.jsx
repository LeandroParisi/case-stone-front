import React, { useState } from 'react';
import HamburgerMenu from '../Hamburger-Menu/HamburgerMenu';
import SideBar from '../Sidebar/Sidebar';
import SearchBar from '../SearchBar/SearchBar';
import './Header.scss';

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchCategory, setSearchCategory] = useState('characters');
  const [searchQuery, setSearchQuery] = useState('');

  const categoryPayload = { searchCategory, setSearchCategory };
  const inputPayload = { searchQuery, setSearchQuery };

  return (
    <header>
      <HamburgerMenu isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <SideBar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <SearchBar categoryPayload={categoryPayload} inputPayload={inputPayload} />
    </header>
  );
}

export default Header;
