import React from 'react';
import MovieLibrary from './components/MovieLibrary.jsx';
import './App.css';
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

export default App;
