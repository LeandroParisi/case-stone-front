import React, { useState } from 'react';
import useProtectRoute from '../../hooks/useProtectRoute';
import Header from '../../components/Header/Header';
import SideBarContainer from '../../containers/SideBar/SideBarContainer';

function Search() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <>
      { useProtectRoute() }
      <Header />
      <main>
        Search
      </main>
      <SideBarContainer
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        type="sideSearch"
      />
    </>
  );
}

export default Search;
