import React, { useEffect, useState } from 'react';
import './HamburgerMenu.scss';

function HamburgerMenu({ isSidebarOpen, setIsSidebarOpen }) {
  return (
    <button
      type="button"
      className={`hamburger btn-burguer hamburger--stand ${isSidebarOpen ? 'is-active' : ''}`}
      data-testid="top-hamburguer"
      onClick={() => setIsSidebarOpen(!isSidebarOpen)}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner" />
      </span>
    </button>
  );
}

export default HamburgerMenu;
