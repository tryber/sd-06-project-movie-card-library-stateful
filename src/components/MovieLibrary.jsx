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
    this.filterMovies = this.filterMovies.bind(this);
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
    const isItCheckBox = target.type === 'checkbox';
    const value = isItCheckBox ? target.checked : target.value;
    const name = target.name;

    this.setState({ [name]: value }, () => this.filterMovies(value, isItCheckBox));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    return (<div>
      <SearchBar
        searchText={searchText}
        bookmarkedOnly={bookmarkedOnly}
        selectedGenre={selectedGenre}
        onSearchTextChange={this.handleTextChange}
        onBookmarkedChange={this.handleTextChange}
        onSelectedGenreChange={this.handleTextChange}
      />
      <MovieList movies={movies} />
      <AddMovie />
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

  // searchText: PropTypes.string.isRequired,
  // onSearchTextChange: PropTypes.func.isRequired,
  // onBookmarkedChange: PropTypes.func.isRequired,
  // selectedGenre: PropTypes.string.isRequired,
  // onSelectedGenreChange: PropTypes.func.isRequired,
};

export default MovieLibrary;
