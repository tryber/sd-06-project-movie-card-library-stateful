import React from 'react';
import './App.css';
import Header from './components/Header';
import movies from './data';
import SearchBar from './components/SearchBar'
import MovieList from './components/MovieList';
// import MovieCard from './components/MovieCard';
// import Rating from './components/Rating';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <MovieList movies={movies} />
    </div>
  );
}


export default App;
