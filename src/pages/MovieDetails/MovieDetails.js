import { useState, useEffect, useRef, Suspense } from 'react';
import { useParams, Outlet, Link, useLocation } from 'react-router-dom';
import { getMovieDetails } from 'utils/service-api';
import Loader from 'components/Skeleton/Skeleton';
import { toast } from 'react-toastify';
import { IconContext } from 'react-icons';
import { AiFillStar } from 'react-icons/ai';
import {
  MovieInfo,
  MovieDescr,
  StyledNavLink,
  StyledArrowIcon,
  Stars,
  AddToMyListBtn,
  RemoveFromMyListBtn,
} from './MovieDetails.styled';
import defaultPoster from '../../components/defaultImages/default-movie.jpg';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [favourites, setFavourites] = useState(
    () => JSON.parse(localStorage.getItem('favourites')) ?? []
  );

  useEffect(() => {
    setIsLoading(true);
    getMovieDetails(id)
      .then(setMovie)
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false));
  }, [id]);

  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }, [favourites]);

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  const addMovieToMyList = movie => {
    if (favourites.some(favourite => favourite.id === movie.id)) {
      setFavourites(prevState => prevState.filter(({ id }) => id !== movie.id));
      toast.success(
        <p>
          Movie <span style={{ color: 'green' }}>{movie.title}</span> removed
          from My List!
        </p>
      );
      return;
    }
    setFavourites(prevState => [
      ...prevState.filter(({ id }) => id !== movie.id),
      movie,
    ]);
    toast.success(
      <p>
        Movie <span style={{ color: 'green' }}>{movie.title}</span> added to My
        List!
      </p>
    );
  };

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
                {movie.vote_average ? (
                  <Stars>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el, index) => (
                      <IconContext.Provider
                        key={index}
                        value={{
                          size: 40,
                          color: `${
                            index >= Math.floor(movie.vote_average.toFixed(0))
                              ? '#ccc'
                              : 'orange'
                          }`,
                        }}
                      >
                        <AiFillStar />
                      </IconContext.Provider>
                    ))}
                  </Stars>
                ) : null}
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
              {!favourites.some(fav => movie.id === fav.id) ? (
                <AddToMyListBtn onClick={() => addMovieToMyList(movie)}>
                  Add to My List
                </AddToMyListBtn>
              ) : (
                <RemoveFromMyListBtn onClick={() => addMovieToMyList(movie)}>
                  Remove from My List
                </RemoveFromMyListBtn>
              )}
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
