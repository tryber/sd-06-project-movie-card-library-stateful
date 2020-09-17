import React, { Component } from 'react';
import SearchBar from './SearchBar';
import PropTypes from 'prop-types';

class MovieLibrary extends Component {
  constructor() {
    super()

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: [],
    };
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

MovieLibrary.propTypes = {
  movies: PropTypes.string.isRequired
}

export default MovieLibrary;
