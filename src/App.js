import React from 'react';
import './App.css';

import Header from './components/Header';
import SearchBar from './components/SearchBar';

function App() {
  constructor() {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: '',
      selectedGenre: '',
    }
  }

  onSearchTextChange() {

  }

  onBookmarkedChange() {

  }

  onSelectedGenreChange() {

  }

  return (
    <div className="App">
      <Header />
      <SearchBar
        searchText={this.state.searchText}
        onSearchTextChange={onSearchTextChange}
        bookmarkedOnly={this.state.bookmarkedOnly}
        onBookmarkedChange={onBookmarkedChange}
        selectedGenre={this.state.selectedGenre}
        onSelectedGenreChange={onSelectedGenreChange}
      />
    </div>
  );
}

export default App;
