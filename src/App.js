import React from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import movies from './data';
import AddMovie from './components/AddMovie';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <AddMovie />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;

/* https://stackoverflow.com/questions/35436162/how-to-set-defaultprops-for-function */
