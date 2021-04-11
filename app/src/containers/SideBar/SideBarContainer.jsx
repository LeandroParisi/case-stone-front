import React from 'react';
import PropTypes from 'prop-types';
import SideBar from '../../components/Sidebar/Sidebar';
import './SideBarContainer.scss';
import SearchSideBar from '../../components/SearchSideBar/SearchSideBar';

const SideBarContainer = ({ type, isSidebarOpen, setIsSidebarOpen }) => {
  const statePayload = { isSidebarOpen, setIsSidebarOpen };
  const renderSideBar = () => {
    const sideBars = {
      sideMenu: <SideBar statePayload={statePayload} />,
      sideSearch: <SearchSideBar statePayload={statePayload} />,
    };

    return sideBars[type];
  };

  const menuStatus = isSidebarOpen ? 'opened ' : 'closed';

  return (
    <aside className={menuStatus}>
      { renderSideBar() }
    </aside>
  );
};

SideBarContainer.propTypes = {
  isSidebarOpen: PropTypes.func.isRequired,
  setIsSidebarOpen: PropTypes.func.isRequired,
  type: PropTypes.oneOf('sideMenu', 'sideSearch').isRequired,
};

export default SideBarContainer;
