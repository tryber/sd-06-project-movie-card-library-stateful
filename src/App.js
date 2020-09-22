import React from 'react';
import './App.css';
import movies from './data';
import Header from './components/Header';
// import MovieList from './components/MovieList';
// import SearchBar from './components/SearchBar';
// import AddMovie from './components/AddMovie';
import MovieLibrary from './components/MovieLibrary';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={movies} />
      {/* <SearchBar /> */}
      {/* <AddMovie /> */}
    </div>
  );
}

export default App;
