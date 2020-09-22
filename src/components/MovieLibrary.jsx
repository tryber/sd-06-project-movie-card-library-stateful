// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super();

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.movieFilter = this.movieFilter.bind(this);
    this.onClick = this.onClick.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      counter: 0,
      movies: props.movies,

    };
  }

  onSearchTextChange({ target }) {
    this.setState({ searchText: target.value });
  }

  onBookmarkedChange({ target }) {
    const { checked } = target;

    this.setState({ bookmarkedOnly: checked });

    this.setState((estadoAnterior) => ({ counter: estadoAnterior.counter + 1 }));
  }

  onSelectedGenreChange({ target }) {
    const { value } = target;

    this.setState({ selectedGenre: value });
  }

  onClick(movie) {
    this.setState((estadoAnterior) => ({ movies: estadoAnterior.movies.concat(movie) }));
  }

  movieFilter(movies) {
    if (this.state.searchText !== '') {
      return movies
        .filter((movie) => movie.title
          .toUpperCase()
          .indexOf(this.state.searchText.toLocaleUpperCase()) !== -1 ||
      movie.subtitle.toLocaleUpperCase()
        .indexOf(this.state.searchText.toLocaleUpperCase()) !== -1 ||
      movie.storyline.toLocaleUpperCase()
        .indexOf(this.state.searchText.toLocaleUpperCase()) !== -1,
      );
    }

    if (this.state.counter > 0) {
      return movies.filter((movie) => movie.bookmarked === this.state.bookmarkedOnly);
    }

    if (this.state.selectedGenre !== '') {
      return movies.filter((movie) => movie.genre === this.state.selectedGenre);
    }
    return movies;
  }

  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          bookmarkedOnly={this.state.bookmarkedOnly}
          selectedGenre={this.state.selectedGenre}
          onSearchTextChange={this.onSearchTextChange}
          onBookmarkedChange={this.onBookmarkedChange}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList
          movies={this.movieFilter(this.state.movies)}
        />
        <AddMovie
          onClick={this.onClick}
        />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
    bookmarked: PropTypes.bool.isRequired,
    genre: PropTypes.string.isRequired,
  })).isRequired,
};

export default MovieLibrary;