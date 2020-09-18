import React from 'react';
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';
import MovieCard from './components/MovieCard';
import Rating from './components/Rating';
import './App.css';
import movies from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={movies} />
      <MovieList />
      <SearchBar />
      <AddMovie />
      <MovieCard />
      <Rating />
    </div>
  );
}

export default App;
