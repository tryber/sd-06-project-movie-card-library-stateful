import React from 'react';
import './App.css';
import movies from './data';

import AddMovie from './components/AddMovie';
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={movies} />
      <AddMovie />
    </div>
  );
}

export default App;
