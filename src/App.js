import React from 'react';
import './App.css';
import movies from './data';
import MovieLibrary from './components/MovieLibrary';
import MovieList from './components/MovieList';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary />
        <MovieList movies={movies}/>
    </div>
  );
}

export default App;
