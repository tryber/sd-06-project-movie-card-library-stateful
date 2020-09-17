import React from 'react';
import './App.css';

import Header from './components/Header';
import MovieCard from './components/MovieCard';
import Data from './data.js';
// import MovieList from './components/MovieList';
// import Rating from './components/Rating'

function App() {
  return (
    <div className="App">
      <Header />
      <MovieCard movies={Data} />
    </div>
  );
}

export default App;
