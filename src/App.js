import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';
import AddMovie from './components/AddMovie';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <MovieList movies={movies} />
      <AddMovie />
    </div>
  );
}

export default App;
