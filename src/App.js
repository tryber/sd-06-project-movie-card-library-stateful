import React from 'react';
import SearchBar from './components/SearchBar'
import MovieList from './components/MovieList';
import movies from './data';
import './App.css';

import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar /> 
      <MovieList movies={movies}/>
    </div>
  );
}

export default App;
