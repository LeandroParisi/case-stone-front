import React, { useState } from 'react';
import { toast } from 'react-toastify';
import useProtectRoute from '../../hooks/useProtectRoute';
import Header from '../../components/Header/Header';
import SideBarContainer from '../../containers/SideBar/SideBarContainer';
import SearchListContainer from '../../containers/SearchListContainer/SearchListContainer';
import getSearch from '../../services/getSearch';
import useLoading from '../../hooks/useLoading';
import { getToken } from '../../store/localStorage/provider';

function Search() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchCategory, setSearchCategory] = useState('characters');
  const [searchResults, setSearchResults] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  const categoryPayload = { searchCategory, setSearchCategory };
  const inputPayload = { searchQuery, setSearchQuery };

  const makeRequest = async () => {
    const token = getToken();
    const requestPayload = { searchQuery, searchCategory, token };

    setIsFetching(true);

    const response = await getSearch(requestPayload);

    if (response.message) {
      setIsFetching(false);
      return toast.error(response.message);
    }

    setSearchResults(response);

    setIsFetching(false);

    setIsSidebarOpen(false);

    return null;
  };

  return (
    <>
      { useProtectRoute() }
      { useLoading(isFetching) }
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
      { searchResults && <SearchListContainer searchResults={searchResults} /> }
    </>
  );
}

export default Search;
