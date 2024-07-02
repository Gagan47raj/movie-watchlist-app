import axios from 'axios';

const API_URL = 'https://movie-watchlist-app-48bd.onrender.com' || 'http://localhost:5000';

export const getMovies = () => async (dispatch) => {
  const response = await axios.get(`${API_URL}/movies`);
  dispatch({ type: 'GET_MOVIES', payload: response.data });
};

export const addMovie = (movie) => async (dispatch) => {
  const response = await axios.post(`${API_URL}/movies`, movie);
  dispatch({ type: 'ADD_MOVIE', payload: response.data });
};

export const editMovie = (id, updatedMovie) => async (dispatch) => {
  const response = await axios.put(`${API_URL}/movies/${id}`, updatedMovie);
  dispatch({ type: 'EDIT_MOVIE', payload: response.data });
};

export const deleteMovie = (id) => async (dispatch) => {
  await axios.delete(`${API_URL}/movies/${id}`);
  dispatch({ type: 'DELETE_MOVIE', payload: id });
};

export const toggleWatchStatus = (id, watched) => async (dispatch) => {
  const response = await axios.patch(`${API_URL}/movies/${id}/status`, { watched });
  dispatch({ type: 'TOGGLE_WATCH_STATUS', payload: response.data });
};


export const updateMovieReview = (id, rating, review) => async (dispatch) => {
  try {
      const response = await axios.patch(`${API_URL}/movies/${id}/review`, { rating, review });
      dispatch({
          type: 'UPDATE_MOVIE_REVIEW',
          payload: response.data,
      });
  } catch (error) {
      console.error('Error updating movie review:', error);
  }
};

