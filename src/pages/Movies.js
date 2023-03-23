import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Searchbar from '../components/Searchbar/Searchbar';
import MovieList from '../components/MovieList/MovieList';
import Loader from '../components/Skeleton/Skeleton';
import { searchMovie } from 'utils/service-api';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const search = searchParams.get('search');

  useEffect(() => {
    setIsLoading(isLoading => !isLoading);

    if (search?.trim() === '') {
      toast.warning('Please type something!');
    }

    searchMovie(search)
      .then(data => {
        setMovies(data.results);
        if (search && data.total_results <= 0) {
          return toast.error(
            <p>
              There are no movies for{' '}
              <span style={{ color: '#e74c3c' }}>{search}</span>!
            </p>,
            {
              toastId: 'can-not-be-duplicated',
            }
          );
        }
        if (search && data.total_results > 0) {
          toast.success(
            <p>
              We found{' '}
              <span style={{ color: '#2E8B57', fontWeight: 600 }}>
                {data.total_results}{' '}
              </span>
              {data.total_results === 1 ? 'movie' : 'movies'} for{' '}
              <span style={{ color: '#2E8B57', fontWeight: 600 }}>
                {search}
              </span>
              !
            </p>,
            {
              toastId: 'cannot-be-duplicated',
            }
          );
        }
      })
      .catch(error => console.log(error))
      .finally(() => setIsLoading(isLoading => !isLoading));
  }, [search]);

  const onSubmit = event => {
    event.preventDefault();
    setSearchParams({ search: event.currentTarget.elements.search.value });
  };

  return (
    <>
      <Searchbar onSubmit={onSubmit} />
      <div aria-busy={isLoading}>
        {isLoading && <Loader page="/my-list" />}
        {search && <MovieList movies={movies} />}
      </div>
    </>
  );
};

export default Movies;
