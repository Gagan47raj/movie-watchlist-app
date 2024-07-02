import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMovie, editMovie } from '../state/action/movieAction';
import { Link, useNavigate, useParams } from 'react-router-dom';

const MovieForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const movies = useSelector((state) => state.movies.movies);
  const existingMovie = movies.find((movie) => movie.id === parseInt(id));

  const [title, setTitle] = useState(existingMovie ? existingMovie.title : '');
  const [description, setDescription] = useState(existingMovie ? existingMovie.description : '');
  const [releaseYear, setReleaseYear] = useState(existingMovie ? existingMovie.releaseYear : '');
  const [genre, setGenre] = useState(existingMovie ? existingMovie.genre : '');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const movie = { title, description, releaseYear, genre };
    setLoading(true);
    try {
      if (existingMovie) {
        await dispatch(editMovie(existingMovie.id, movie));
      } else {
        await dispatch(addMovie(movie));
      }
      navigate('/');
    } catch (err) {
      setError('Failed to save the movie. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setTitle('');
    setDescription('');
    setReleaseYear('');
    setGenre('');
    setError(null);
  };

  return (
    <div className="max-w-md mx-auto my-12 bg-white p-8 shadow-2xl rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <h2 className="text-3xl font-extrabold text-center text-indigo-600">
          {existingMovie ? 'Edit Movie' : 'Add Movie'}
        </h2>
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Enter movie title"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter movie description"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            rows="4"
          />
        </div>
        <div>
          <label htmlFor="releaseYear" className="block text-sm font-medium text-gray-700">Release Year</label>
          <input
            id="releaseYear"
            type="number"
            value={releaseYear}
            onChange={(e) => setReleaseYear(e.target.value)}
            placeholder="Enter release year"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="genre" className="block text-sm font-medium text-gray-700">Genre</label>
          <input
            id="genre"
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            placeholder="Enter genre"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        {error && (
          <p className="text-red-500 text-xs italic">{error}</p>
        )}
        <div className="flex space-x-4">
          <button
            type="submit"
            disabled={loading}
            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${loading ? 'opacity-50' : ''}`}
          >
            {loading ? 'Processing...' : existingMovie ? 'Save Changes' : 'Add Movie'}
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Clear
          </button>
          <Link
            to="/"
            className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default MovieForm;
