import React, { Component } from 'react';
import propTypes from 'prop-types';

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
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, () => { this.filteringSearchChange(); });
  }

  handleClick(newMovie) {
    this.setState({ movies: this.state.movies.concat(newMovie) });
  }

  filteringSearchChange() {
    let moviesFiltered = this.props.movies;

    if (this.state.bookmarkedOnly === true) {
      moviesFiltered = moviesFiltered.filter((movie) => movie.bookmarked === true);
    } else {
      moviesFiltered = this.props.movies;
    }

    if (this.state.selectedGenre !== '') {
      moviesFiltered = moviesFiltered.filter((movie) => movie.genre === this.state.selectedGenre);
    }

    if (this.state.searchText !== '') {
      moviesFiltered = moviesFiltered.filter((movie) =>
        movie.title.toLowerCase().includes(this.state.searchText.toLowerCase()) ||
        movie.subtitle.toLowerCase().includes(this.state.searchText.toLowerCase()) ||
        movie.storyline.toLowerCase().includes(this.state.searchText.toLowerCase()),
    );
    }

    this.setState({ movies: moviesFiltered });
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.handleChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.handleChange}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.handleChange}
        />
        <MovieList movies={this.state.movies} />
        <AddMovie onClick={this.handleClick} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: propTypes.arrayOf(propTypes.object).isRequired };

export default MovieLibrary;
