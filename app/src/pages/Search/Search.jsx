import React, { useState } from 'react';
import useProtectRoute from '../../hooks/useProtectRoute';
import Header from '../../components/Header/Header';
import SideBarContainer from '../../containers/SideBar/SideBarContainer';

function Search() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const inputPayload = { searchQuery, setSearchQuery };

  const makeRequest = () => {
    console.log('request');
  };

  return (
    <>
      { useProtectRoute() }
      <Header openSearchSideBar={() => setIsSidebarOpen(true)} inputPayload={inputPayload} />
      <main>
        Search
      </main>
      <SideBarContainer
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        type="sideSearch"
        close={() => setIsSidebarOpen(false)}
        onClickPayload={makeRequest}
      />
    </>
  );
}

export default Search;
