import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor() {
    super();

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',

    };
  }

  onSearchTextChange({ target }) {
    this.setState({ searchText: target.value });
  }

  onBookmarkedChange({ target }) {
    const { checked } = target;

    this.setState({ bookmarkedOnly: checked });
  }

  onSelectedGenreChange({ target }) {
    const { value } = target;

    this.setState({ selectedGenre: value });
  }

  render() {
    const { movies } = this.props;
    return (
      <div>
        <SearchBar
          movies={movies}
          searchText={this.state.searchText}
          bookmarkedOnly={this.state.bookmarkedOnly}
          selectedGenre={this.state.selectedGenre}
          onSearchTextChange={this.onSearchTextChange}
          onBookmarkedChange={this.onBookmarkedChange}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOf([PropTypes.string, PropTypes.number]))).isRequired
}

export default MovieLibrary;
