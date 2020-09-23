import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super();

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      originalList: props.movies,
      movies: props.movies,
    };

    this.handleTextChange = this.handleTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  onBookmarkedChange({ target }) {
    this.setState({ bookmarkedOnly: target.checked },
      () => this.filterBookmarked(target.checked));
  }

  filterBookmarked(isItBookMarked) {
    const originalList = this.state.movies;
    const filteredMovies = originalList.filter((movie) => movie.bookmarked === isItBookMarked);

    this.setState({ movies: filteredMovies });
  }

  filterMovies(value, isItCheckBox) {
    const originalList = this.state.originalList;
    const filteredMovies = originalList.filter((movie) => {
      const inputValue = value.toLowerCase();
      const isInMovieTitle = movie.title.toLowerCase().includes(inputValue);
      const isInMovieSubtitle = movie.subtitle.toLowerCase().includes(inputValue);
      const isInMovieStoryline = movie.storyline.toLowerCase().includes(inputValue);
      const isItBookMarked = isItCheckBox ? movie.bookmarked : false;
      const checkGenre = movie.genre === inputValue;

      return isInMovieTitle ||
        isInMovieSubtitle ||
        isInMovieStoryline ||
        isItBookMarked ||
        checkGenre;
    });

    this.setState({ movies: filteredMovies });
  }

  handleTextChange({ target }) {
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value }, () => this.filterMovies(value));
  }

  addMovie(childState) {
    this.setState({ movies: [...this.state.movies, childState] });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    return (<div>
      <SearchBar
        searchText={searchText}
        bookmarkedOnly={bookmarkedOnly}
        selectedGenre={selectedGenre}
        onSearchTextChange={this.handleTextChange}
        onBookmarkedChange={this.onBookmarkedChange}
        onSelectedGenreChange={this.handleTextChange}
      />
      <MovieList movies={movies} />
      <AddMovie onClick={this.addMovie} />
    </div>);
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