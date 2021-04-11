import React, { useState } from 'react';
import HamburgerMenu from '../Hamburger-Menu/HamburgerMenu';
import './Header.scss';

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header>
      <HamburgerMenu isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
    </header>
  );
}

export default Header;
