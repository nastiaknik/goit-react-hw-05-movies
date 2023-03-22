import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'utils/service-api';
import Loader from 'components/Skeleton/Skeleton';
import MovieList from 'components/MovieList/MovieList';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(isLoading => !isLoading);

    getTrendingMovies()
      .then(data => setTrendingMovies(data.results))
      .catch(error => console.log(error))
      .finally(setIsLoading(isLoading => !isLoading));
  }, []);

  return (
    <main>
      {isLoading && <Loader />}
      <h2>Trending Movies Today</h2>
      {<MovieList movies={trendingMovies} />}
    </main>
  );
};

export default Home;
