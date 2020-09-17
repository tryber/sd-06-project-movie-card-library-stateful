// implement MovieLibrary component here
import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    }

  }

  handleClick (event) {
    event.preventDefault();
    console.log('click');
  }

  onSearchTextChange () {
    console.log('onSearchTextChange');
  }

  onSelectedGenreChange () {
    console.log('onSelectedGenreChange');
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar searchText={this.state.searchText} onSearchTextChange={this.onSearchTextChange}
          selectedGenre={this.state.selectedGenre} onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={this.props.movies} />
        <AddMovie onClick={this.handleClick} />
      </div>
    );
  }
}

export default MovieLibrary;