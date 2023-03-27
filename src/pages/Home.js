import { useState, useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import MovieList from 'components/MovieList/MovieList';
import { getTrendingMovies } from 'utils/service-api';
import Loader from 'components/Skeleton/Skeleton';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const loaderRef = useRef(null);

  useEffect(() => {
    setIsLoading(true);
    getTrendingMovies(page)
      .then(data => {
        if (!data.results) {
          return toast.error('Sorry, there are no more trending movies.');
        } else {
          setTrendingMovies(prevMovies => [...prevMovies, ...data.results]);
        }
      })
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false));
  }, [page]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setPage(prevPage => prevPage + 1);
      }
    }, options);

    const currentLoader = loaderRef.current;

    if (currentLoader) {
      observer.observe(currentLoader);
    }

    return () => {
      if (currentLoader) {
        observer.unobserve(currentLoader);
      }
    };
  }, []);

  return (
    <>
      <h2 style={{ marginTop: 0 }}>Trending Movies Today</h2>
      <MovieList movies={trendingMovies} />
      {isLoading && <Loader page="/my-list" />}
      <div ref={loaderRef}></div>
    </>
  );
};

export default Home;
