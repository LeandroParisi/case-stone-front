import React from 'react';
import PropTypes from 'prop-types';
import { capitalize } from '../../services/utils';
import SearchListCard from '../../components/SearchListCard/SearchListCard';
import './SearchListContainer.scss';

function SearchListContainer({ searchResults }) {
  const { type, result } = searchResults;
  const title = capitalize(type);

  console.log(result);
  return (
    <main className="searchListContainer">
      <h1>
        {`Your ${title}:`}
      </h1>
      <section className="searchListCards">
        { result.map((asset) => <SearchListCard asset={asset} type={type} />)}
      </section>
    </main>
  );
}

SearchListContainer.propTypes = {
  searchResults: PropTypes.shape({
    result: PropTypes.arrayOf(PropTypes.any),
    type: PropTypes.string,
  }),
};

SearchListContainer.defaultProps = {
  searchResults: {
    results: [],
    type: '',
  },
};

export default SearchListContainer;
