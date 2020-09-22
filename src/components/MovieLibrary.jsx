import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.handleUpdateState = this.handleUpdateState.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
  }

  handleUpdateState({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
    console.log(value);
    this.filterSearch(value);
  }

  filterSearch(value) {
    const { movies } = this.state;
    let filteredMovies = movies;
    console.log('filteredmovies', filteredMovies);
    if (value) {
      filteredMovies = movies.filter((element) => element.bookmarked === true);
      this.setState({ movies: filteredMovies });
    } else (this.setState({ movies: this.props.movies }));
  }

  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.handleUpdateState}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.handleUpdateState}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.handleUpdateState}
        />
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };
