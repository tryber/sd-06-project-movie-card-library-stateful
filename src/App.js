import React from 'react';
import './App.css';
import MovieLibrary from './components/MovieLibrary.jsx';
import Header from './components/Header';
import movies from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={movies} />
    </div>
  );
}

export default App;
