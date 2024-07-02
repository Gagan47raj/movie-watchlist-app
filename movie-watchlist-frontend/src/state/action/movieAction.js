import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const getMovies = () => async (dispatch) => {
  const response = await axios.get('http://localhost:5000/movies');
  dispatch({ type: 'GET_MOVIES', payload: response.data });
};

export const addMovie = (movie) => async (dispatch) => {
  const response = await axios.post('http://localhost:5000/movies', movie);
  dispatch({ type: 'ADD_MOVIE', payload: response.data });
};

export const editMovie = (id, updatedMovie) => async (dispatch) => {
  const response = await axios.put(`http://localhost:5000/movies/${id}`, updatedMovie);
  dispatch({ type: 'EDIT_MOVIE', payload: response.data });
};

export const deleteMovie = (id) => async (dispatch) => {
  await axios.delete(`http://localhost:5000/movies/${id}`);
  dispatch({ type: 'DELETE_MOVIE', payload: id });
};

export const toggleWatchStatus = (id, watched) => async (dispatch) => {
  const response = await axios.patch(`http://localhost:5000/movies/${id}/status`, { watched });
  dispatch({ type: 'TOGGLE_WATCH_STATUS', payload: response.data });
};


export const updateMovieReview = (id, rating, review) => async (dispatch) => {
  try {
      const response = await axios.patch(`http://localhost:5000/movies/${id}/review`, { rating, review });
      dispatch({
          type: 'UPDATE_MOVIE_REVIEW',
          payload: response.data,
      });
  } catch (error) {
      console.error('Error updating movie review:', error);
  }
};

