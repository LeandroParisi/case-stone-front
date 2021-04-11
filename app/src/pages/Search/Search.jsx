import React, { useState } from 'react';
import useProtectRoute from '../../hooks/useProtectRoute';
import Header from '../../components/Header/Header';
import SideBarContainer from '../../containers/SideBar/SideBarContainer';

function Search() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      { useProtectRoute() }
      <Header openSearchSideBar={() => setIsSidebarOpen(true)} />
      <main>
        Search
      </main>
      <SideBarContainer
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        type="sideSearch"
        close={() => setIsSidebarOpen(false)}
      />
    </>
  );
}

export default Search;
