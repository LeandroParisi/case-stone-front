import React from 'react';
import useProtectRoute from '../../hooks/useProtectRoute';
import Header from '../../components/Header/Header';

function Search() {
  return (
    <>
      { useProtectRoute() }
      <Header />
      <main>
        Search
      </main>
    </>
  );
}

export default Search;
