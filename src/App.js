import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import MovieLibrary from './components/MovieLibrary';

import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <MovieLibrary />
    </div>
  );
}

export default App;
