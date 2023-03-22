import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import MovieList from 'components/MovieList/MovieList';
import { getTrendingMovies } from 'utils/service-api';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(isLoading => !isLoading);

    getTrendingMovies()
      .then(data => {
        setTrendingMovies(data.results);
        if (!data.results) {
          return toast.error('Sorry, there are no trending movies for today.');
        }
      })
      .catch(error => console.log(error))
      .finally(setIsLoading(isLoading => !isLoading));
  }, []);

  return (
    <>
      {!isLoading && trendingMovies && (
        <>
          <h2 style={{ marginTop: 0 }}>Trending Movies Today</h2>
          <MovieList movies={trendingMovies} />
        </>
      )}
    </>
  );
};

export default Home;
