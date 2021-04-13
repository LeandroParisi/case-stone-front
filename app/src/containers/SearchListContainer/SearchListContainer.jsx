import React from 'react';
import PropTypes from 'prop-types';
import { capitalize } from '../../services/utils';
import SearchListCard from '../../components/SearchListCard/SearchListCard';
import './SearchListContainer.scss';

function SearchListContainer({ searchResults, isFavoritePage }) {
  const { type, result } = searchResults;
  const title = capitalize(type);

  return (
    <main className="searchListContainer">
      {!isFavoritePage && (
      <h1>
        {`Your ${title}:`}
      </h1>
      )}
      <section className="searchListCards">
        { result.map((asset) => <SearchListCard asset={asset} type={type} isFavoritePage />)}
      </section>
    </main>
  );
}

SearchListContainer.propTypes = {
  searchResults: PropTypes.shape({
    result: PropTypes.arrayOf(PropTypes.any),
    type: PropTypes.string,
  }),
  isFavoritePage: PropTypes.bool.isRequired,
};

SearchListContainer.defaultProps = {
  searchResults: {
    results: [],
    type: '',
  },
};

export default SearchListContainer;
