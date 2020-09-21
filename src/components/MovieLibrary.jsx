import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super();

    this.handleChanges = this.handleChanges.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onClick = this.onClick.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  onSearchTextChange({ target }) {
    this.handleChanges(target);
  }

  onBookmarkedChange({ target }) {
    this.handleChanges(target);
  }

  onSelectedGenreChange({ target }) {
    this.handleChanges(target);
  }

  onClick(state) {
    this.setState((previousState) => ({ movies: previousState.movies.concat(state) }));
  }

  handleChanges(target) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ [name]: value });
  }

  moviesFilter() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let moviesFiltered = movies;
    if (searchText) {
      moviesFiltered = moviesFiltered
        .filter((movie) => movie.title.toLowerCase().includes(searchText.toLowerCase())
        || movie.subtitle.toLowerCase().includes(searchText.toLowerCase())
        || movie.storyline.toLowerCase().includes(searchText.toLowerCase()));
    }

    if (selectedGenre !== '') {
      moviesFiltered = moviesFiltered.filter((movie) => movie.genre === selectedGenre);
    }

    if (bookmarkedOnly) {
      moviesFiltered = moviesFiltered.filter((movie) => movie.bookmarked === true);
    }

    return moviesFiltered;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>

        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={this.moviesFilter()} />
        <AddMovie onClick={this.onClick} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieLibrary;
