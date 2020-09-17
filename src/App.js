import React from 'react';
import './App.css';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';

import movies from './data';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  }

  onSearchTextChange() {}

  onBookmarkedChange() {}

  onSelectedGenreChange() {}

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div className="App">
        <Header />
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkOnly={bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={movies} />
      </div>
    );
  }
}

export default App;
