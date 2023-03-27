import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Searchbar from '../components/Searchbar/Searchbar';
import MovieList from '../components/MovieList/MovieList';
import Loader from '../components/Skeleton/Skeleton';
import { searchMovie } from 'utils/service-api';
import InfiniteScroll from 'react-infinite-scroll-component';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const currentPage = page;
  const [totalPages, setTotalPages] = useState(0);
  const search = searchParams.get('search') || '';
  const moviesRef = useRef(movies);

  useEffect(() => {
    setPage(parseInt(searchParams.get('page'), 10) || 1);
  }, [searchParams]);

  useEffect(() => {
    setIsLoading(true);
    if (currentPage === 1) {
      setSearchParams({ search, page: 1 });
    }

    if (search?.trim() === '') {
      toast.warning('Please type name of the movie!', {
        toastId: 'pls-do-not-duplicate',
      });
      return;
    }
    if (!search) {
      setIsLoading(false);
      return;
    }
    /*     if (currentPage === 1 && moviesRef.length === 0) {
      setMovies([]);
    } */
    searchMovie(search, page)
      .then(data => {
        if (search && data.total_results === 0) {
          toast.error(
            <p>
              There are no movies for{' '}
              <span style={{ color: '#e74c3c' }}>{search}</span>!
            </p>,
            {
              toastId: 'can-not-be-duplicated',
            }
          );
        }
        if (search && data.total_results > 0 && page === 1) {
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
        setTotalPages(data.total_pages);
        console.log(page);
        if (currentPage === 1) {
          setMovies(data.results);
        } else {
          setMovies(prevMovies => [...prevMovies, ...data.results]);
        }
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  }, [search, page, setSearchParams, currentPage, moviesRef]);

  const handleSubmit = event => {
    event.preventDefault();
    setPage(1);
    if (event.currentTarget.elements.search.value) {
      setSearchParams({
        search: event.currentTarget.elements.search.value,
        page: 1,
      });
    }
  };

  const fetchMoreData = () => {
    if (page < totalPages && search) {
      setPage(prevPage => prevPage + 1);
      setSearchParams({
        search: search,
        page: page + 1,
      });
    }
  };

  return (
    <>
      <Searchbar onSubmit={handleSubmit} />
      {isLoading && <Loader page="/my-list" />}
      {search && (
        <InfiniteScroll
          dataLength={movies.length}
          next={fetchMoreData}
          hasMore={currentPage < totalPages}
          loader={<Loader page="/my-list" />}
          scrollThreshold="3000px"
        >
          <MovieList movies={movies} />
        </InfiniteScroll>
      )}
    </>
  );
};

export default Movies;
