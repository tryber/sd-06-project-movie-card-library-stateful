import React from 'react';
// import MovieList from './components/MovieList.jsx'
import MovieLibrary from './components/MovieLibrary.jsx';

import './App.css';

import Header from './components/Header';
import dados from './data.js';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary filmes={dados} />

    </div>
  );
}

export default App;
