import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.onSearchTextChange = this.onSearchTextChange.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: [],
    };
  }

  onSearchTextChange({ target }) {
    this.setState({ searchText: target.value });
  }

  addMovieToList() {

  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          value={this.state.searchText}
          bookmarkedOnly={this.state.bookmarkedOnly}
          selectedGenre={this.state.selectedGenre}
          onChange={this.onSearchTextChange}
        />
        <MovieList movies={this.props.movies} />
        <AddMovie onClick={this.addMovieToList} />
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };
