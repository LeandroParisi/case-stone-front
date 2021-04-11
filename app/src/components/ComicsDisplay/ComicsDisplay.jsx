import React from 'react';
import PropTypes from 'prop-types';
import './ComicsDisplay.scss';

function ComicsDisplay({ list }) {
  console.log(list);
  return (
    <div className="comicsDisplay">
      <h4>Featured in:</h4>
      {list && list.length > 0 ? (
        <ul className="listContainer">
          {list.map((item) => <li key={item.comicId}>{item.name}</li>)}
        </ul>
      ) : 'Not featured'}
    </div>
  );
}

ComicsDisplay.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default ComicsDisplay;
