import React, { Component } from 'react';
import propTypes from 'prop-types';
import SeachBar from './SearchBar';
import AddMovie from './AddMovie';
// import movies from '../data';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super();

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.handleClickButton = this.handleClickButton.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  onSearchTextChange({ target }) {
    this.setState({ searchText: target.value });
  }

  onBookmarkedChange({ target }) {
    this.setState({ bookmarkedOnly: target.checked });
  }

  onSelectedGenreChange({ target }) {
    this.setState({ selectedGenre: target.value });
  }

  handleFilter() {
    let returnArray = this.props.movies;
    if (this.state.bookmarkedOnly === true) {
      returnArray = returnArray.filter((movie) => movie.bookmarked === true);
    }
    if (this.state.selectedGenre !== '') {
      returnArray = returnArray.filter((movie) => movie.genre === this.state.selectedGenre);
    }
    if (this.state.searchText !== '') {
      returnArray = returnArray.filter((movie) => (
        movie.title.includes(this.state.searchText) ||
        movie.subtitle.includes(this.state.searchText) ||
        movie.storyline.includes(this.state.searchText)));
    }
    return returnArray;
  }

  handleClickButton(movie) {
    this.setState({ movies: this.state.movies.concat(movie) });
  }

  render() {
    const arrayMovies = this.handleFilter();
    return (
      <div>
        <SeachBar
          searchText={this.state.searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={arrayMovies} />
        <AddMovie onClick={this.handleClickButton} />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: propTypes.arrayOf(propTypes.shape({
    title: propTypes.string.isRequired,
    subtitle: propTypes.string.isRequired,
    storyline: propTypes.string.isRequired,
    rating: propTypes.number.isRequired,
    imagePath: propTypes.string.isRequired,
    bookmarked: propTypes.bool,
    genre: propTypes.string,
  }).isRequired).isRequired,
};

export default MovieLibrary;
