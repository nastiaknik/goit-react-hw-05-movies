import PropTypes from 'prop-types';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { StyledMovieList } from './MovieList.styled';

export default function MovieList({ movies }) {
  return (
    <StyledMovieList>
      {movies &&
        movies.map(({ id, poster_path, title }) => (
          <li key={id}>
            <MovieCard id={id} poster={poster_path} title={title} />
          </li>
        ))}
    </StyledMovieList>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      title: PropTypes.string.isRequired,
    })
  ),
};
