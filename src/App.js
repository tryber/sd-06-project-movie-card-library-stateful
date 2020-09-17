import React from 'react';
import SearchBar from './components/SearchBar'
import AddMovie from './components/AddMovie'
import './App.css';


import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <AddMovie onClick={() => console.log('teste')} />
    </div>
  );
}

export default App;
