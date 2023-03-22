import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovie } from 'utils/service-api';
import Searchbar from '../components/Searchbar/Searchbar';
import MovieList from '../components/MovieList/MovieList';
import Loader from '../components/Skeleton/Skeleton';
import { toast } from 'react-toastify';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const search = searchParams.get('search');

  useEffect(() => {
    setLoading(isLoading => !isLoading);

    if (search?.trim() === '') {
      toast.warning('Please type something!');
    }

    searchMovie(search)
      .then(setMovies)
      .catch(error => console.log(error))
      .finally(setLoading(isLoading => !isLoading));
  }, [search]);

  const onSubmit = event => {
    event.preventDefault();
    setSearchParams({ search: event.currentTarget.elements.search.value });
  };

  return (
    <>
      <Searchbar onSubmit={onSubmit} />
      {loading && <Loader page="/" />}
      {search && <MovieList movies={movies} />}
    </>
  );
};

export default Movies;
