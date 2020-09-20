// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super();

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.updateStateInput = this.updateStateInput.bind(this);
    this.movieFilter = this.movieFilter.bind(this);
    this.addFilm = this.addFilm.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  onSearchTextChange(event) {
    this.updateStateInput(event);
  }

  onSelectedGenreChange(event) {
    this.updateStateInput(event);
    this.movieFilter();
  }

  onBookmarkedChange({ target }) {
    const { name, checked } = target;
    this.setState({ [name]: checked });
    this.movieFilter();
  }

  updateStateInput({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  movieFilter(moviesFilter) {
    let theMovies = moviesFilter;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    if (bookmarkedOnly) {
      theMovies = theMovies.filter((item) => item.bookmarked === true);
    }
    if (selectedGenre !== '') {
      theMovies = theMovies.filter((item) => item.genre === selectedGenre);
    }
    if (searchText !== '') {
      const text = searchText.toUpperCase();
      theMovies = theMovies.filter((item) => item.title.toUpperCase().includes(text) ||
        item.subtitle.toUpperCase().includes(text) || item.storyline.toUpperCase().includes(text),
      );
    }
    return theMovies;
  }

  addFilm(Film) {
    const { title, subtitle, imagePath, storyline, rating, genre } = Film;
    const newFilm = { title, subtitle, imagePath, storyline, rating, genre };
    this.setState((oldState) => ({ movies: [...oldState.movies, newFilm] }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    let moviesFilter = this.state.movies;
    // console.log('render ', moviesFiltered);
    if (moviesFilter) {
      moviesFilter = this.movieFilter(moviesFilter);
    }
    return (
      <div>
        <SearchBar
          searchText={searchText}
          bookmarkedOnly={bookmarkedOnly}
          selectedGenre={selectedGenre}
          onBookmarkedChange={this.onBookmarkedChange}
          onSearchTextChange={this.onSearchTextChange}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <h2> My awesome movie library </h2>
        <MovieList movies={moviesFilter} />
        <AddMovie onClick={this.addFilm} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.shape.isRequired };

export default MovieLibrary;
