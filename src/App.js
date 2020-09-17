import React from 'react';
import './App.css';
import movies from './data.js';
import Header from './components/Header';
import SearchBar from './components/SearchBar';


function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
    </div>
  );
}

export default App;
