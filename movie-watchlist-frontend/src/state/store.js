import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import movieReducer from './reducer/movieReducer';

const rootReducer = combineReducers({
  movies: movieReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
