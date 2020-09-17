import React from 'react';
import SearchBar from './components/SearchBar';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar
        searchText={this.props.searchText}
        onSearchTextChange={this.props.onSearchTextChange}
        bookmarkedOnly={this.props.bookmarkedOnly}
        onBookmarkedChange={this.props.onBookmarkedChange}
        selectedGenre={this.props.selectedGenre}
        onSelectedGenreChange={this.props.onSelectedGenreChange}
      />
    </div>
  );
}

export default App;
