import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.myOnClick = this.myOnClick.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.updateStateInput = this.updateStateInput.bind(this);
    // this.BookmarkedFilter = this.BookmarkedFilter.bind(this);
    this.movieFilter = this.movieFilter.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
  }

  async onSearchTextChange(event) {
    await this.updateStateInput(event);
    await this.movieFilter();
  }

  async onSelectedGenreChange(event) {
    await this.updateStateInput(event);
    await this.movieFilter();
  }

  async onBookmarkedChange({ target }) {
    const { name, checked } = target;
    await this.setState({ [name]: checked });
    await this.movieFilter();
  }

  updateStateInput({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  movieFilter() {
    let myMovies = this.props.movies;
    if (this.state.bookmarkedOnly) {
      myMovies = myMovies.filter((item) => item.bookmarked === true);
    }
    if (this.state.selectedGenre !== '') {
      myMovies = myMovies.filter((item) => item.genre === this.state.selectedGenre);
    }
    if (this.state.searchText !== '') {
      const text = this.state.searchText.toUpperCase();
      myMovies = myMovies.filter((item) =>
        item.title.toUpperCase().includes(text) ||
        item.subtitle.toUpperCase().includes(text) ||
        item.storyline.toUpperCase().includes(text),
      );
    }
    this.setState({ movies: myMovies });
  }

  myOnClick() {
    console.log('teste');
  }

  render() {
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
        <h2> My awesome movie library </h2>
        <MovieList movies={this.state.movies} />
        <AddMovie onClick={this.myOnClick} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.shape.isRequired };

export default MovieLibrary;
