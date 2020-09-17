import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar'

import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar 
        searchText={}
        onSearchTextChange={}
        bookmarkedOnly={}
        selectGenre={}
        onSelectGenreChance={}  
      />
    </div>
  );
}

export default App;
