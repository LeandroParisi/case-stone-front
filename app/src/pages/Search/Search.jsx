import React, { useState } from 'react';
import useProtectRoute from '../../hooks/useProtectRoute';
import Header from '../../components/Header/Header';
import SideBarContainer from '../../containers/SideBar/SideBarContainer';
import SearchListContainer from '../../containers/SearchListContainer/SearchListContainer';
import getSearch from '../../services/getSearch';
import useLoading from '../../hooks/useLoading';

function Search() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchCategory, setSearchCategory] = useState('characters');
  const [searchResults, setSearchResults] = useState([]);

  const categoryPayload = { searchCategory, setSearchCategory };
  const inputPayload = { searchQuery, setSearchQuery };

  const makeRequest = async () => {
    const requestPayload = { searchQuery, searchCategory };

    const response = await getSearch(requestPayload);

    setSearchResults(response);
    setIsSidebarOpen(false);
  };

  return (
    <>
      { useProtectRoute() }
      { useLoading('mrAmerica', true, 'fetch') }
      <Header
        openSearchSideBar={() => setIsSidebarOpen(true)}
        inputPayload={inputPayload}
        categoryPayload={categoryPayload}
      />
      <SideBarContainer
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        type="sideSearch"
        close={() => setIsSidebarOpen(false)}
        onClickPayload={makeRequest}
      />
      <SearchListContainer searchResults={searchResults} />
    </>
  );
}

export default Search;
