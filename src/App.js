import React from 'react';
import './App.css';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie'

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

  onSearchTextChange({ target: { value } }) {
    this.setState({ searchText: value });
  }

  onBookmarkedChange({ target: { checked } }) {
    this.setState({ bookmarkedOnly: checked });
  }

  onSelectedGenreChange({ target: { value } }) {
    this.setState({ selectedGenre: value });
  }

  onChangeAddMovie() {

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
        <AddMovie onChange={this.onChangeAddMovie}/>
      </div>
    )
  }
}

export default App;
