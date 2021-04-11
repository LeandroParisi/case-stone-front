import React from 'react';
import PropTypes from 'prop-types';
import { capitalize } from '../../services/utils';
import SearchListCard from '../../components/SearchListCard/SearchListCard';

function SearchListContainer({ searchResult }) {
  const { type, result } = searchResult;
  const title = capitalize(type);
  return (
    <main className="searchListContainer">
      <h1>
        {`Your ${title}:`}
      </h1>
      { result.map((asset) => <SearchListCard asset={asset} />)}
    </main>
  );
}

SearchListContainer.propTypes = {
  searchResult: PropTypes.shape({
    result: PropTypes.arrayOf(PropTypes.any),
    type: PropTypes.string,
  }),
};

SearchListContainer.defaultProps = {
  searchResult: {
    results: [],
    type: '',
  },
};

export default SearchListContainer;
