// import React, { useEffect, useState } from 'react';
import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import useLoading from '../../hooks/useLoading';
import useProtectRoute from '../../hooks/useProtectRoute';
import getFavorites from '../../services/getFavorites';

function Favorites() {
  const [isFetching, setIsFetching] = useState(false);
  const [searchCategory, setSearchCategory] = useState('characters');

  useEffect(() => {
    const fetchFavorites = async () => {
      const response = await getFavorites(searchCategory);
      return response;
    };
    setIsFetching(true);
    fetchFavorites();
    setIsFetching(false);
  }, [searchCategory]);

  const categoryPayload = { searchCategory, setSearchCategory };

  const title = `Your favorite ${searchCategory}`;

  console.log(setIsFetching);

  return (
    <>
      { useProtectRoute() }
      { useLoading(isFetching) }
      <Header categoryPayload={categoryPayload} title={title} />
    </>
  );
}

export default Favorites;
