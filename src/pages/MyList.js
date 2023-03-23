import { useState } from 'react';
import MovieList from '../components/MovieList/MovieList';

const MyList = () => {
  const [favourites] = useState(
    () => JSON.parse(localStorage.getItem('favourites')) ?? []
  );

  return (
    <>
      <h2 style={{ margin: 0 }}>My List</h2>
      {favourites && <MovieList movies={favourites} />}
      {favourites?.length === 0 && (
        <div>
          <h3
            style={{
              color: '#ff6b01',
              marginBottom: '15px',
              fontSize: '30px',
              lineHeight: 1.17,
              marginTop: 0,
            }}
          >
            Oops
          </h3>
          <p style={{ marginBottom: '15px', fontSize: '16px' }}>
            {' '}
            There's nothing here yet. When you pick movies and add to Your List
            list, they'll appear here!
          </p>
        </div>
      )}
    </>
  );
};

export default MyList;
