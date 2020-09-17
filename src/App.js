import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';

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
