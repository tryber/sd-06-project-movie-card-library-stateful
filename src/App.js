import React from 'react';
import './App.css';
import AddMovie from './components/AddMovie';
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <AddMovie onClick />
      <MovieLibrary />
    </div>
  );
}

export default App;
