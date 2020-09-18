import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super();

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };

    this.onClick = this.onClick.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  }

  onClick(estados) {
    this.setState((prevState) => ({ movie: prevState.movies.push(estados) }));
  }

  onSearchTextChange({ target }) {
    const { value } = target;
    this.setState((prevState) => (
      (value !== '')
      ? {
        searchText: value,
        movies: prevState.movies
          .filter((movie) => movie.title.includes(value) ||
          movie.subtitle.includes(value) ||
          movie.storyline.includes(value)),
      }
      : {
        searchText: '',
        movies: this.props.movies,
      }
    ));
  }

  onBookmarkedChange() {
    this.setState((prevState, props) => (
      (!prevState.bookmarkedOnly)
      ? {
        bookmarkedOnly: true,
        movies: ((prevState.movies === [])
          ? prevState.movies.filter((movie) => movie.bookmarked)
          : this.props.movies.filter((movie) => movie.bookmarked)),
      }
      : {
        bookmarkedOnly: false,
        movies: props.movies,
      }
    ));
  }

  onSelectedGenreChange({ target }) {
    const { value } = target;
    this.setState((prevState, props) => (
      (value !== '')
      ? {
        selectedGenre: value,
        movies: ((prevState.movies === [])
          ? prevState.movies.filter((movie) => movie.genre === value)
          : this.props.movies.filter((movie) => movie.genre === value)),
      }
      : {
        selectedGenre: '',
        movies: props.movies,
      }
    ));
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={this.state.movies} />
        <AddMovie onClick={this.onClick} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(Object).isRequired };

export default MovieLibrary;
