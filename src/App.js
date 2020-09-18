import React from 'react';
import './App.css';
import movies from './data';
import Header from './components/Header';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={movies} />
      <SearchBar />
    </div>
  );
}

export default App;
