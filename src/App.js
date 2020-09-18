import React from 'react';
import './App.css';
import data from './data';
import MovieList from './components/MovieList';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <MovieList movies={data} />
      {/* <AddMovie onClick={handleAddMovieClick} /> */}
    </div>
  );
}

export default App;
