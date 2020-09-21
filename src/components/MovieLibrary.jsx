import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import movies from '../data';

class MovieLibrary extends Component {

  constructor() {
    super();

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: movies,
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onSearchTextChange({ target }) {
    this.setState({ searchText: target.value }, () => {
      const newMovieWithText = this.props.movies
        .filter((element) => element.title.includes(target.value) ||
        element.subtitle.includes(target.value) ||
        element.storyline.includes(target.value));
      this.state.movies = newMovieWithText;
    });
  }

  onSelectedGenreChange({ target }) {
    this.setState({ selectedGenre: target.value }, () => {
      const newMovieWithGenre = this.props.movies
        .filter((element) => element.genre === target.value);
      // console.log(newMovieWithGenre)
      this.state.movies = newMovieWithGenre;
    });
  }

  onBookmarkedChange({ target }) {
    this.setState({ bookmarkedOnly: target.checked }, () => {
      const newMovieBookmarked = this.props.movies
        .filter((element) => element.bookmarked === target.checked);
      this.state.movies = newMovieBookmarked;
    });
  }

  onClick(newMovie) {
    let { movies } = this.state;
    movies = movies.concat([newMovie]);
    this.setState({ 
      movies: movies,
    });
  }

  render() {
    const { movies } = this.state;
    console.log(this.state);
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={this.searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={this.bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={this.selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={this.state.movies} />
        <AddMovie onClick={this.onClick} />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  searchText: PropTypes.string.isRequired,
  // bookmarkedOnly: PropTypes.boolean.isRequired,
  // selectedGenre:
  movies: PropTypes.array.isRequired,
};

export default MovieLibrary;
