import React from 'react';
import './App.css';
import MovieLibrary from './components/MovieLibrary';
import Header from './components/Header';
import movie from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={movie} />
    </div>
  );
}

export default App;
