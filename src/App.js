import React from 'react';
import SearchBar from './components/SearchBar';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar
        searchText={props.searchText}
        onSearchTextChange={props.onSearchTextChange}
        bookmarkedOnly={props.bookmarkedOnly}
        onBookmarkedChange={props.onBookmarkedChange}
        selectedGenre={props.selectedGenre}
        onSelectedGenreChange={props.onSelectedGenreChange}
      />
    </div>
  );
}

export default App;
