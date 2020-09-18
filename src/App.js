import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Header from './components/Header';
import AddMovie from './components/AddMovie';
import MovieLibrary from './components/MovieLibrary';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary />
      <SearchBar />
      <AddMovie />
    </div>
  );
}

export default App;
