import React from 'react';
import './App.css';

import Header from './components/Header';
import SearchBar from './components/SearchBar';

class App extends React.Component {
  constructor() {
    super()
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
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
  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
      </div>
    )
  }
}

export default App;
