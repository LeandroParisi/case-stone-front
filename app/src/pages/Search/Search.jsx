import React, { useState } from 'react';
import useProtectRoute from '../../hooks/useProtectRoute';
import Header from '../../components/Header/Header';

function Search() {
  const [searchCategory, setSearchCategory] = useState('character');

  const categoryPayload = { searchCategory, setSearchCategory };

  return (
    <>
      { useProtectRoute() }
      <Header categoryPayload={categoryPayload} />
      <main>
        Search
      </main>
    </>
  );
}

export default Search;
