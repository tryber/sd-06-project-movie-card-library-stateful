import React from 'react';
import './App.css';
import Header from './components/Header';
import Library from './components/MovieLibrary';
import movies from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <Library movies={movies} />
    </div>
  );
}

export default App;
