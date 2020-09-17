import React, { Component } from 'react';
import SearchBar from './SearchBar';

class MovieLibrary extends Component {
  constructor() {
    super()

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: [],
    }
  }

  render() {
    const { movies } = this.props;
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

export default MovieLibrary;
