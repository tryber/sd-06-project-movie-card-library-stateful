import React from 'react';
import SearchBar from './components/SearchBar.jsx';
import './App.css';

import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar
        searchText=''
        onSearchTextChange='#'
        bookmarkedOnly=''
        onBookmarkedChange=''
        selectedGenre=''
        onSelectedGenreChange=''
      />
    </div>
  );
}

export default App;
