import React from 'react';
import './App.css';
import movies from './data.js';
// import Header from './components/Header';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar.jsx';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <SearchBar />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
