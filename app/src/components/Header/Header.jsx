import React, { useState } from 'react';
import HamburgerMenu from '../Hamburger-Menu/HamburgerMenu';
import SideBar from '../Sidebar/Sidebar';
import SearchBar from '../SearchBar/SearchBar';
import './Header.scss';

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header>
      <HamburgerMenu isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <SideBar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <SearchBar />
    </header>
  );
}

export default Header;
