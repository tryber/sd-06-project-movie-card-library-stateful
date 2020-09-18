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
    // this.handleFilter = this.handleFilter.bind(this);
  }

  onClick(movie) {
    this.setState((previous) => ({ movies: [...previous.movies, movie] }));
  }

  onSearchTextChange({ target }) {
    const { value } = target;
    this.setState((prevState) => (
      (value !== '')
      ? {
        searchText: value,
        movies: prevState.movies
          .filter((movie) => movie.title.toUpperCase().includes(value.toUpperCase()) ||
          movie.subtitle.toUpperCase().includes(value.toUpperCase()) ||
          movie.storyline.toUpperCase().includes(value.toUpperCase())),
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

  // async onSearchTextChange({ target }) {
  //   await this.setState({ searchText: target.value });
  //   this.handleFilter();
  // }

  // async onBookmarkedChange({ target }) {
  //   await this.setState({ bookmarkedOnly: target.checked });
  //   this.handleFilter();
  // }

  // async onSelectedGenreChange({ target }) {
  //   await this.setState({ selectedGenre: target.value });
  //   this.handleFilter();
  // }

  // handleFilter() {
  //   let allMovies = this.props.movies;
  //   if (this.state.searchText !== '') {
  //     const value = this.state.searchText.toUpperCase();
  //     allMovies = allMovies.filter((movie) => ((movie.title).toUpperCase()).includes(value) ||
  //         ((movie.subtitle).toUpperCase()).includes(value) ||
  //         (movie.storyline.toUpperCase()).includes(value));
  //   }
  //   if (this.state.bookmarkedOnly) {
  //     allMovies = allMovies.filter((movie) => movie.bookmarked);
  //   }
  //   if (this.state.selectedGenre !== '') {
  //     allMovies = allMovies.filter((movie) => movie.genre === this.state.selectedGenre);
  //   }
  //   this.setState({ movies: allMovies });
  // }

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
