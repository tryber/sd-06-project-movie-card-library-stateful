import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.UpdateProp = this.UpdateProp.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  onClick(movieToAdd) {
    const { subtitle, title, imagePath, storyline, rating, genre } = movieToAdd;
    const NEW_MOVIE = { subtitle, title, imagePath, storyline, rating, genre };
    this.setState((past) => ({ movies: [...past.movies, NEW_MOVIE] }));
  }

  onSearchTextChange({ target }) {
    const { value } = target;
    const VALUE_LOWER_CASE = value.toLowerCase();
    this.setState((_, props) => (
      (value)
        ? {
          movies: props.movies.filter((movie) =>
            movie.title.toLowerCase().includes(VALUE_LOWER_CASE)
            || movie.subtitle.toLowerCase().includes(VALUE_LOWER_CASE)
            || movie.storyline.toLowerCase().includes(VALUE_LOWER_CASE)),
        }
        : { movies: props.movies }
    ));
    this.UpdateProp(false, '', value);
  }

  onSelectedGenreChange({ target }) {
    const { value } = target;
    this.setState((_, props) => (
      (value)
        ? { movies: props.movies.filter((movie) => movie.genre === value) }
        : { movies: props.movies }
    ));
    this.UpdateProp(false, value, '');
  }

  onBookmarkedChange({ target }) {
    const { checked } = target;
    this.setState((_, props) => (
      (checked)
        ? { movies: props.movies.filter((movie) => movie.bookmarked === checked) }
        : { movies: props.movies }
    ));
    this.UpdateProp(checked, '', '');
  }

  ResetAndFilter() {
    this.setState({ movies: this.props.movies }, () => {
    });
  }

  UpdateProp(bookmarkedOnly = false, selectedGenre = '', searchText = '') {
    this.setState({ searchText, selectedGenre, bookmarkedOnly });
  }

  render() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    const { onSearchTextChange, onBookmarkedChange, onSelectedGenreChange, onClick } = this;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          onSearchTextChange={onSearchTextChange}
          searchText={searchText}
          onBookmarkedChange={onBookmarkedChange}
          bookmarkedOnly={bookmarkedOnly}
          onSelectedGenreChange={onSelectedGenreChange}
          selectedGenre={selectedGenre}
        />
        <MovieList movies={movies} />
        <AddMovie onClick={onClick} />
      </div >
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieLibrary;
