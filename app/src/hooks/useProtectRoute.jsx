import React from 'react';
import { useHistory } from 'react-router';

function useRedirect(path) {
  const history = useHistory();
  return (
    <>
      { history.push(path) }
    </>
  );
}

export default useRedirect;
