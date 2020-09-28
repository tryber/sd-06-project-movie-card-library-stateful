import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super();
    const { movies } = props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.handleAddMovie = this.handleAddMovie.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.searchFilter = this.searchFilter.bind(this);
  }
  onBookmarkedChange() {
    this.setState({ bookmarkedOnly: true });
  }
  onSearchTextChange({ target }) {
    const { value } = target;
    this.setState({ searchText: value });
  }
  onSelectedGenreChange({ target }) {
    const { value } = target;
    this.setState({ selectedGenre: value });
  }
  handleAddMovie(newMovie) {
    const { movies: next } = this.state;
    this.setState({ movies: [...next, newMovie] });
  }
  searchFilter() {
    const { movies, bookmarkedOnly, searchText, selectedGenre } = this.state;
    let filterMovies = movies;
    if (bookmarkedOnly) {
      filterMovies = filterMovies.filter((movie) => movie.bookmarked === bookmarkedOnly);
    }
    if (selectedGenre) {
      filterMovies = filterMovies.filter((movie) => movie.genre === selectedGenre);
    }
    filterMovies = filterMovies
      .filter((movie) => movie.title.toLowerCase().includes(searchText.toLowerCase())
        || movie.subtitle.toLowerCase().includes(searchText.toLowerCase())
        || movie.storyline.toLowerCase().includes(searchText.toLowerCase()));
    return filterMovies;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const filterMovies = this.searchFilter();
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={searchText}
          bookmarkedOnly={bookmarkedOnly}
          selectedGenre={selectedGenre}
          onSearchTextChange={this.onSearchTextChange}
          onBookmarkedChange={this.onBookmarkedChange}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={filterMovies} />
        <AddMovie onClick={this.handleAddMovie} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieLibrary;
