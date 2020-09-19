import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

export default class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
      moviesAdded: '',
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.checkMoviesAdded = this.checkMoviesAdded.bind(this);
  }

  onSearchTextChange({ target }) {
    const { name, value } = target;

    this.checkMoviesAdded();

    const searchByText = this.state.movies.filter((movie) => {
      const searchTerm = value.toLowerCase();
      const titleFormatted = movie.title.toLowerCase();
      const subtitleFormatted = movie.subtitle.toLowerCase();
      const storylineFormatted = movie.storyline.toLowerCase();

      if (titleFormatted.includes(searchTerm) || subtitleFormatted.includes(searchTerm) ||
        storylineFormatted.includes(searchTerm)) {
        return movie;
      }

      return undefined;
    });

    this.setState((previousState) => {
      if (value) {
        return {
          [name]: value,
          movies: searchByText,
        };
      }
      return {
        [name]: value,
        movies: previousState.movies,
      };
    });
  }

  onBookmarkedChange({ target }) {
    const { name, checked } = target;

    this.checkMoviesAdded();

    this.setState((previousState) => {
      if (checked) {
        return {
          [name]: checked,
          movies: previousState.movies.filter((movie) => movie.bookmarked),
        };
      }
      return {
        [name]: checked,
        movies: previousState.movies,
      };
    });
  }

  onSelectedGenreChange({ target }) {
    const { name, value } = target;
    // this.setState({ [name]: value });

    this.checkMoviesAdded();

    this.setState((previousState) => {
      if (value !== '') {
        return {
          [name]: value,
          movies: previousState.movies.filter((movie) => movie.genre === value),
        };
      }
      return {
        [name]: value,
        movies: previousState.movies,
      };
    });
  }

  onClick(movie) {
    this.setState((previousState) => ({
      movies: [...previousState.movies, movie],
      moviesAdded: [...previousState.moviesAdded, movie],
    }));
  }

  checkMoviesAdded() {
    if (this.state.moviesAdded.length !== 0) {
      this.setState((previous) => ({ movies: [...this.props.movies, ...previous.moviesAdded] }));
    } else {
      this.setState({ movies: this.props.movies });
    }
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkOnly={bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={this.state.movies} />
        <AddMovie onClick={this.onClick} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };
