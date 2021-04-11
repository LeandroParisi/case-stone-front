import React, { useState } from 'react';
import useProtectRoute from '../../hooks/useProtectRoute';
import Header from '../../components/Header/Header';
import SideBarContainer from '../../containers/SideBar/SideBarContainer';

function Search() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchCategory, setSearchCategory] = useState('characters');

  const categoryPayload = { searchCategory, setSearchCategory };
  const inputPayload = { searchQuery, setSearchQuery };

  const makeRequest = () => {
    const requestPayload = { searchQuery, searchCategory };
  };

  return (
    <>
      { useProtectRoute() }
      <Header
        openSearchSideBar={() => setIsSidebarOpen(true)}
        inputPayload={inputPayload}
        categoryPayload={categoryPayload}
      />
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
