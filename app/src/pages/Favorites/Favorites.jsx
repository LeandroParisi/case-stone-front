// import React, { useEffect, useState } from 'react';
import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import useLoading from '../../hooks/useLoading';
import useProtectRoute from '../../hooks/useProtectRoute';
import getFavorites from '../../services/getFavorites';

function Favorites() {
  const [isFetching, setIsFetching] = useState(false);
  const [searchCategory, setSearchCategory] = useState('characters');
  // const [title, setTitle] = useState();

  useEffect(() => {
    const fetchFavorites = async () => {
      const response = await getFavorites(searchCategory);
      return response;
    };
    setIsFetching(true);
    fetchFavorites();
  }, [searchCategory]);

  const categoryPayload = { searchCategory, setSearchCategory };

  console.log(setIsFetching);

  return (
    <>
      { useProtectRoute() }
      { useLoading(isFetching) }
      <Header categoryPayload={categoryPayload} />
    </>
  );
}

export default Favorites;
