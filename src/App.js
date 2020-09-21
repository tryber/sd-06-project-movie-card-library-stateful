import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';
import Header from './components/Header';

function onClick() {
  console.log('oi');
}

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <AddMovie onClick={onClick} />
    </div>
  );
}

export default App;
