import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import SideBar from '../../components/Sidebar/Sidebar';
import './SideBarContainer.scss';
import SearchSideBar from '../../components/SearchSideBar/SearchSideBar';

const SideBarContainer = ({
  type, isSidebarOpen, setIsSidebarOpen, close,
}) => {
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
      {close && (
        <div className="closeIconContainer" onClick={close} role="button" tabIndex={0} onKeyDown={close}>
          <FontAwesomeIcon icon={faArrowLeft} color="white" size="2x" />
        </div>
      )}
      { renderSideBar() }
    </aside>
  );
};

SideBarContainer.propTypes = {
  isSidebarOpen: PropTypes.func.isRequired,
  setIsSidebarOpen: PropTypes.func.isRequired,
  type: PropTypes.oneOf('sideMenu', 'sideSearch').isRequired,
  close: PropTypes.func,
};

SideBarContainer.defaultProps = {
  close: null,
};

export default SideBarContainer;
