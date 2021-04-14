import React from 'react';
import PropTypes from 'prop-types';
import './HamburgerMenu.scss';

function HamburgerMenu({ isSidebarOpen, setIsSidebarOpen }) {
  return (
    <button
      type="button"
      className={`hamburger btn-burguer hamburger--stand ${isSidebarOpen && 'is-active'}`}
      onClick={() => setIsSidebarOpen(!isSidebarOpen)}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner" />
      </span>
    </button>
  );
}

HamburgerMenu.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
  setIsSidebarOpen: PropTypes.func.isRequired,
};

export default HamburgerMenu;
