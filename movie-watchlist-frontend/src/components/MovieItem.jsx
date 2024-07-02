// MovieItem.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteMovie, toggleWatchStatus, updateMovieReview } from "../state/action/movieAction";
import { Link } from "react-router-dom";
import { FaEdit, FaTrashAlt, FaStar, FaCheck, FaTimes } from "react-icons/fa";
import ReviewForm from "./ReviewForm";

const MovieItem = ({ movie }) => {
  const dispatch = useDispatch();
  const [rating, setRating] = useState(movie.rating || 0);
  const [review, setReview] = useState(movie.review || '');
  const [isReviewFormOpen, setIsReviewFormOpen] = useState(false);

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this movie?")) {
      dispatch(deleteMovie(movie.id));
    }
  };

  const handleToggleWatchStatus = () => {
    dispatch(toggleWatchStatus(movie.id, !movie.watched));
  };

  const handleRatingChange = (e) => {
    const newRating = parseInt(e.target.value);
    setRating(newRating);
  };

  const handleReviewChange = (e) => {
    const newReview = e.target.value;
    setReview(newReview);
  };

  const handleSaveReview = () => {
    dispatch(updateMovieReview(movie.id, rating, review));
    setIsReviewFormOpen(false);
  };

  return (
    <div className="transition-transform transform hover:scale-105 ">
      <li className="border border-gray-300 rounded-lg p-4 mb-4 shadow-lg bg-white relative bg-gray-100">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold mb-2">{movie.title}</h2>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={movie.watched}
              onChange={handleToggleWatchStatus}
              className="form-checkbox h-6 w-6 text-green-500 focus:ring-green-500 border-gray-300 rounded cursor-pointer"
            />
            <span
              className={`text-sm font-medium ${
                movie.watched ? "text-gray-900" : "text-gray-500"
              }`}
            >
              {movie.watched ? <FaCheck className="text-green-500"/> : <FaTimes className="text-red-500"/>}
            </span>
          </label>
        </div>

        <div className="mt-2 space-y-2">
          <p>
            <span className="font-semibold">Description:</span>{" "}
            <span className="block h-24 overflow-y-auto">
              {movie.description}
            </span>
          </p>
          <p>
            <span className="font-semibold">Release Year:</span>{" "}
            {movie.releaseYear}
          </p>
          <p>
            <span className="font-semibold">Genre:</span> {movie.genre}
          </p>
          <p>
            <span className="font-semibold">Watched:</span>{" "}
            {movie.watched ? "Yes" : "No"}
          </p>
          {movie.rating && (
            <p>
              <span className="font-semibold">Rating:</span> {movie.rating} / 5
              <FaStar className="inline ml-1 text-yellow-500"/>
            </p>
          )}
          {movie.review && (
            <p>
              <span className="font-semibold">Review:</span>{" "}
              <span className="block h-24 overflow-y-auto">{movie.review}</span>
            </p>
          )}
        </div>
        <div className="mt-4 flex justify-end space-x-2">
          <button
            onClick={() => setIsReviewFormOpen(true)}
            className="bg-blue-500 text-white px-3 py-1 rounded inline-flex items-center transition-colors hover:bg-blue-600"
          >
            <FaStar className="mr-1"/> Review
          </button>
          <Link
            to={`/edit/${movie.id}`}
            className="bg-yellow-500 text-white px-3 py-1 rounded inline-flex items-center transition-colors hover:bg-yellow-600"
          >
            <FaEdit className="mr-1"/> Edit
          </Link>
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-3 py-1 rounded inline-flex items-center transition-colors hover:bg-red-600"
          >
            <FaTrashAlt className="mr-1"/> Delete
          </button>
        </div>
      </li>

      <ReviewForm isOpen={isReviewFormOpen} onClose={() => setIsReviewFormOpen(false)}>
        <div className="mt-4">
          <label htmlFor="rating" className="block text-sm font-medium text-gray-700">Rating</label>
          <select
            id="rating"
            value={rating}
            onChange={handleRatingChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="mt-4">
          <label htmlFor="review" className="block text-sm font-medium text-gray-700">Review</label>
          <textarea
            id="review"
            value={review}
            onChange={handleReviewChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            rows="4"
          />
        </div>
        <div className="mt-4 flex justify-end space-x-2">
          <button
            onClick={handleSaveReview}
            className="bg-green-500 text-white px-3 py-1 rounded transition-colors hover:bg-green-600"
          >
            Save
          </button>
          <button
            onClick={() => setIsReviewFormOpen(false)}
            className="bg-gray-500 text-white px-3 py-1 rounded transition-colors hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      </ReviewForm>
    </div>
  );
};

export default MovieItem;
