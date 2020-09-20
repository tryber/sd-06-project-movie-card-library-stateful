import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

export default class MovieLibrary extends Component {
  constructor(props) {
    super(props);
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
      movies: this.props.movies,
    };
  }

  async onSearchTextChange(event) {
    await this.updateStateInput(event);
    await this.movieFilter(this.props.movies);
  }

  async onSelectedGenreChange(event) {
    await this.updateStateInput(event);
    await this.movieFilter(this.props.movies);
  }

  async onBookmarkedChange({ target }) {
    const { name, checked } = target;
    await this.setState({ [name]: checked });
    await this.movieFilter(this.props.movies);
  }

  updateStateInput({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  movieFilter(moviesFiltered) {
    let myMovies = moviesFiltered;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    if (bookmarkedOnly) {
      myMovies = myMovies.filter((item) => item.bookmarked === true);
    }
    if (selectedGenre !== '') {
      myMovies = myMovies.filter((item) => item.genre === selectedGenre);
    }
    if (searchText !== '') {
      const text = searchText.toUpperCase();
      myMovies = myMovies.filter((item) => item.title.toUpperCase().includes(text) ||
        item.subtitle.toUpperCase().includes(text) || item.storyline.toUpperCase().includes(text),
      );
    }
    return myMovies;
  }

  addFilm(Film) {
    const { title, subtitle, imagePath, storyline, rating, genre } = Film;
    const newFilm = { title, subtitle, imagePath, storyline, rating, genre };
    this.setState((oldState) => ({ movies: [...oldState.movies, newFilm] }));
  }

  render() {
    let moviesFiltered = this.state.movies;
    if (moviesFiltered) {
      moviesFiltered = this.movieFilter(moviesFiltered);
    }

    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          bookmarkedOnly={this.state.bookmarkedOnly}
          selectedGenre={this.state.selectedGenre}
          onBookmarkedChange={this.onBookmarkedChange}
          onSearchTextChange={this.onSearchTextChange}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={moviesFiltered} />
        <AddMovie onClick={this.addFilm} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.shape.isRequired };
