import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor() {
    super();

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.movieFilter = this.movieFilter.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      counter: 0,

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

  movieFilter(movies) {
    if (this.state.searchText !== '') {
      return movies
        .filter((movie) => movie.title
          .toUpperCase()
          .indexOf(this.state.searchText.toLocaleUpperCase()) !== -1 ||
      movie.subtitle.toLocaleUpperCase()
        .indexOf(this.state.searchText.toLocaleUpperCase()) !== -1 ||
      movie.storyline.toLocaleUpperCase()
        .indexOf(this.state.searchText.toLocaleUpperCase()) !== -1
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
    const { movies } = this.props;
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
          movies={this.movieFilter(movies)}
        />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
    bookmarked: PropTypes.bool,
    genre: PropTypes.string,
  })).isRequired,
};

export default MovieLibrary;
