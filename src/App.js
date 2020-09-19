import React from 'react';
import './App.css';
import movies from './data.js';
// import Header from './components/Header';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar.jsx';
import MovieLibrary from './components/MovieLibrary';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      {/* <SearchBar /> */}
      <MovieList movies={movies} />
      <MovieLibrary />
    </div>
  );
}

export default App;
