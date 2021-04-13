// import React, { useEffect, useState } from 'react';
import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import SearchListContainer from '../../containers/SearchListContainer/SearchListContainer';
import useLoading from '../../hooks/useLoading';
import useProtectRoute from '../../hooks/useProtectRoute';
import getFavorites from '../../services/getFavorites';

function Favorites() {
  const [isFetching, setIsFetching] = useState(false);
  const [searchCategory, setSearchCategory] = useState('characters');
  const [searchResults, setSearchResults] = useState(null);

  console.log(searchResults);

  useEffect(() => {
    const fetchFavorites = async () => {
      const response = await getFavorites(searchCategory);
      setSearchResults(response);
      return response;
    };
    setIsFetching(true);
    fetchFavorites();
    setIsFetching(false);
  }, [searchCategory]);

  const categoryPayload = { searchCategory, setSearchCategory };

  const title = `Your favorite ${searchCategory}`;

  return (
    <>
      { useProtectRoute() }
      { useLoading(isFetching) }
      <Header categoryPayload={categoryPayload} title={title} />
      { searchResults && <SearchListContainer searchResults={searchResults} /> }
    </>
  );
}

export default Favorites;
