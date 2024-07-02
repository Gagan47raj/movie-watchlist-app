import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../state/action/movieAction";
import MovieItem from "./MovieItem";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  const myStyle = {
    backgroundImage:
        "url('https://img.freepik.com/premium-vector/beautiful-gradient-background_52683-82959.jpg')",

    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
};

  return (
    

    <div className="container mx-auto p-4 bg-movie-list bg-cover bg-center min-h-screen flex flex-col items-center" style={myStyle}>
      
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-4">
  <div className="max-w-7xl mx-auto flex justify-between items-center">
    <h1 className="text-4xl font-bold text-white mx-4">
      Movie Watchlist
    </h1>
    <div>
      <Link
        to="/add"
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full inline-flex items-center shadow-md transform transition duration-300 ease-in-out hover:scale-105 mx-4"
      >
        <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
        </svg>
        Add Movie
      </Link>
    </div>
  </div>
</div>

      

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full px-4">
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </ul>

      
    </div>
  );
};

export default MovieList;
