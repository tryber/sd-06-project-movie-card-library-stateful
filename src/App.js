import React from 'react';
import './App.css';
import movies from './data';

import Header from './components/Header';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList key={1} movies={movies} />
    </div>
  );
}

export default App;
