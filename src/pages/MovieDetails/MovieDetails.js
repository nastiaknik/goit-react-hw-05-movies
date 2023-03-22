import { useState, useEffect, useRef, Suspense } from 'react';
import { useParams, Outlet, Link, useLocation } from 'react-router-dom';
import { getMovieDetails } from 'utils/service-api';
import Loader from 'components/Skeleton/Skeleton';
import {
  MovieInfo,
  MovieDescr,
  StyledNavLink,
  StyledArrowIcon,
} from './MovieDetails.styled';
import defaultPoster from '../../components/defaultImages/default-movie.jpg';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getMovieDetails(id)
      .then(setMovie)
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false));
  }, [id]);

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  return (
    <>
      {isLoading && <Loader page={`/movies/${id}`} />}
      {movie && (
        <>
          <Link to={backLinkLocationRef.current}>
            <StyledArrowIcon />
          </Link>
          <MovieInfo>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
                  : defaultPoster
              }
              alt={movie.title}
              width="300"
              height="450"
              loading="lazy"
              style={{ backgroundColor: '#ebebeb' }}
            />
            <MovieDescr>
              <h2>
                {movie.title}{' '}
                <span style={{ fontWeight: 400 }}>
                  (
                  {movie.release_date
                    ? movie.release_date.slice(0, 4)
                    : 'No date'}
                  )
                </span>
              </h2>
              <h3>
                User Score:{' '}
                <span style={{ fontWeight: 400 }}>
                  {movie.vote_average
                    ? movie.vote_average.toFixed(1) * 10 + '%'
                    : 'This movie does not have user score.'}
                </span>
              </h3>
              <h3>Overview: </h3>
              <p>{movie.overview ? movie.overview : 'No movie description'}</p>
              <h3>
                Genres:{' '}
                <span style={{ fontWeight: 400 }}>
                  {movie.genres.length
                    ? movie.genres.map(({ name }) => [name]).join(', ')
                    : 'No genre'}
                </span>
              </h3>
            </MovieDescr>
          </MovieInfo>
          <h2>Additional information</h2>
          <ul
            style={{
              display: 'flex',
              gap: '10px',
              textAlign: 'start',
              listStyle: 'none',
            }}
          >
            <li>
              <StyledNavLink to="cast">Cast</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="reviews">Reviews</StyledNavLink>
            </li>
          </ul>
          <Suspense fallback={<Loader page={location.pathname} />}>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
};

export default MovieDetails;
