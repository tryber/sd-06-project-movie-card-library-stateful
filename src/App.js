import React from 'react';
import './App.css';
// import AddMovie from './components/AddMovie';
import Header from './components/Header';
// import MovieList from './components/MovieList';
// import SearchBar from './components/SearchBar';
import MovieLibrary from './components/MovieLibrary';
import movies from './data';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <AddMovie /> */}
      {/* <SearchBar /> */}
      {/* <MovieList movies={movies} /> */}
      <MovieLibrary movies={movies} />
    </div>
  );
}

export default App;

// REFERENCIAS
// https://www.robinwieruch.de/
