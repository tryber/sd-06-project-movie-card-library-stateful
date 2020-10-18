import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import MovieLibrary from './components/MovieLibrary';
import movies from './data';

import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={movies} />
    </div>
  );
}

MovieLibrary.propTypes = { movies: PropTypes.array.isRequired };

export default App;
