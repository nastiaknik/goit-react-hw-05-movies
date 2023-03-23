import { useState, useEffect } from 'react';

import MovieList from '../components/MovieList/MovieList';
import Loader from '../components/Skeleton/Skeleton';

const MyList = () => {
  const [favourites] = useState(
    () => JSON.parse(localStorage.getItem('favourites')) ?? []
  );

  return (
    <>
      {favourites ? (
        <MovieList movies={favourites} />
      ) : (
        <div>You did not add no movies yet.</div>
      )}
    </>
  );
};

export default MyList;
