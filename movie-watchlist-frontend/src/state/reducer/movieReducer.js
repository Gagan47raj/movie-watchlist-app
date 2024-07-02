const initialState = {
    movies: [],
  };
  
  const movieReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_MOVIES':
        return { ...state, movies: action.payload };
      case 'ADD_MOVIE':
        return { ...state, movies: [...state.movies, action.payload] };
      case 'EDIT_MOVIE':
        return {
          ...state,
          movies: state.movies.map((movie) =>
            movie.id === action.payload.id ? action.payload : movie
          ),
        };
      case 'DELETE_MOVIE':
        return {
          ...state,
          movies: state.movies.filter((movie) => movie.id !== action.payload),
        };
      case 'TOGGLE_WATCH_STATUS':
        return {
          ...state,
          movies: state.movies.map((movie) =>
            movie.id === action.payload.id ? action.payload : movie
          ),
        };

        case 'UPDATE_MOVIE_REVIEW':
            return {
                ...state,
                movies: state.movies.map(movie =>
                    movie.id === action.payload.id ? action.payload : movie
                ),
            };
      
      default:
        return state;
    }
  };
  
  export default movieReducer;
  