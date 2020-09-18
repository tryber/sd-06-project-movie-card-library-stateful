import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import movies from '../data';

class MovieLibrary extends Component {
  constructor() {
    super();

    this.add = this.add.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: [...movies],
    };
  }

  add(movie) { this.setState({ movies: [...this.state.movies, movie] }) };

  render() {
    return (
      <div>
        <SearchBar
          searchText={this.searchText}
          bookmarkedOnly={this.bookmarkedOnly}
          selectedGenre={this.selectedGenre}
        />
        <MovieList movies={this.state.movies} />
        <AddMovie onClick={this.add} />
      </div>
    );
  }
}

MovieLibrary.defaultProps = { movies: '' };

MovieLibrary.propTypes = { movies: PropTypes.string };

export default MovieLibrary;
