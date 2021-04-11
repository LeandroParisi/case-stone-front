import React from 'react';
import PropTypes from 'prop-types';
import { capitalize } from '../../services/utils';

function SearchListContainer({ searchResult }) {
  const { type } = searchResult;
  const title = capitalize(type);
  return (
    <main>
      <h1>
        {`Your ${title}:`}
      </h1>
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
