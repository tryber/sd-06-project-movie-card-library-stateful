import React from 'react';
import './App.css';
import AddMovie from './components/AddMovie';
import Header from './components/Header';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';
import movies from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={movies} />
      <AddMovie />
      <SearchBar />
    </div>
  );
}

export default App;

// REFERENCIAS
// https://www.robinwieruch.de/