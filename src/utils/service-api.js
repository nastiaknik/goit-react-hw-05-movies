import axios from 'axios';

const KEY = '53262c5d6ff8109487cc66546be6258b';
const BASE_URL = 'https://api.themoviedb.org/3';

let cachedMovies = [];
let searchedMovies = [];

export const getTrendingMovies = async (page = 1) => {
  /*   if (page === 1) {
   */ cachedMovies = [];
  /* } */

  const { data } = await axios(`${BASE_URL}/trending/movie/day`, {
    params: {
      api_key: KEY,
      page,
    },
  });

  const uniqueMovies = data.results.filter(movie => {
    if (cachedMovies.some(cachedMovie => cachedMovie.id === movie.id)) {
      return false;
    } else {
      cachedMovies.push(movie);
      return true;
    }
  });
  data.results = uniqueMovies;
  return data;
};

export const searchMovie = async (query, page) => {
  if (page === 1) {
    searchedMovies = [];
  }
  const { data } = await axios(`${BASE_URL}/search/movie`, {
    params: {
      api_key: KEY,
      query,
      page,
    },
  });

  const uniqueMovies = data.results.filter(movie => {
    if (searchedMovies.some(searchedMovie => searchedMovie.id === movie.id)) {
      return false;
    } else {
      searchedMovies.push(movie);
      return true;
    }
  });
  data.results = uniqueMovies;
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
