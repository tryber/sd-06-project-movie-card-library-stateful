import React from 'react';
import './App.css';

import Header from './components/Header';
// import MovieList from './components/MovieList';
import MovieLibrary from './components/MovieLibrary';

import movies from './data';


function App() {
  return (
    <div className="App">
      <Header />
      {/* <MovieList movies={movies} /> */}
      <MovieLibrary movies={movies} />
    </div>
  );
}

export default App;
