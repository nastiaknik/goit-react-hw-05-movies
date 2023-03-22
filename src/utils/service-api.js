import axios from 'axios';

const KEY = '53262c5d6ff8109487cc66546be6258b';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async () => {
  const { data } = await axios(`${BASE_URL}/trending/movie/day`, {
    params: {
      api_key: KEY,
    },
  });
  return data;
};

export const searchMovie = async query => {
  const { data } = await axios(`${BASE_URL}/search/movie`, {
    params: {
      api_key: KEY,
      query,
    },
  });
  return data;
};

export const getMovieDetails = async movieId => {
  const { data } = await axios(`${BASE_URL}/movie/${movieId}`, {
    params: {
      api_key: KEY,
    },
  });
  return data;
};

export const getCast = async movieId => {
  const { data } = await axios(`${BASE_URL}/movie/${movieId}/credits`, {
    params: {
      api_key: KEY,
    },
  });
  return data.cast;
};

export const getReviews = async movieId => {
  const { data } = await axios(`${BASE_URL}/movie/${movieId}/reviews`, {
    params: {
      api_key: KEY,
    },
  });
  return data.results;
};
