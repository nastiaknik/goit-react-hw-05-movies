import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovieTitle, StyledCard, StyledLink } from './MovieCard.styled';
import defaultPoster from '../../components/defaultImages/default-movie.jpg';

export const MovieCard = ({ id, poster, title }) => {
  const location = useLocation();
  return (
    <StyledLink to={`/movies/${id}`} state={{ from: location }}>
      <StyledCard>
        <img
          src={
            poster
              ? `https://image.tmdb.org/t/p/original${poster}`
              : defaultPoster
          }
          alt={title}
          width="300"
          height="450"
          loading="lazy"
          style={{ backgroundColor: '#ebebeb' }}
        />
        <MovieTitle>
          {title.length <= 45 ? title : title.slice(1, 45) + '...'}
        </MovieTitle>
      </StyledCard>
    </StyledLink>
  );
};

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  poster_path: PropTypes.string,
  title: PropTypes.string.isRequired,
};
