import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieForm from './components/MovieForm';

function App() {
  return (
    <Router>
    <div>
      <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/add" element={<MovieForm />} />
          <Route path="/edit/:id" element={<MovieForm />} />
        </Routes>
    </div>
  </Router>
  );
}

export default App;
