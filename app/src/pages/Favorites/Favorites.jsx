// import React, { useEffect, useState } from 'react';
import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import useLoading from '../../hooks/useLoading';
import useProtectRoute from '../../hooks/useProtectRoute';

function Favorites() {
  const [isFetching, setIsFetching] = useState(false);
  // const [title, setTitle] = useState();

  console.log(setIsFetching);

  return (
    <>
      { useProtectRoute() }
      { useLoading(isFetching) }
      <Header />
    </>
  );
}

export default Favorites;
