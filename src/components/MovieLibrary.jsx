import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
  }

  onSearchTextChange({ target }) {
    this.setState({ searchText: target.value });
    const inputVal = target.value.toUpperCase();
    const filterInputVal = this.props.movies.filter((e) =>
      e.title.toUpperCase().includes(inputVal) ||
      e.subtitle.toUpperCase().includes(inputVal) ||
      e.storyline.toUpperCase().includes(inputVal),
    );
    return target.value === '' ? this.setState({ movies: this.props.movies }) :
    this.setState({ movies: filterInputVal });
  }

  onSelectedGenreChange({ target }) {
    this.setState({ selectedGenre: target.value });
    const filterGenre = this.props.movies.filter((e) => e.genre === target.value);
    return target.value === '' ? this.setState({ movies: this.props.movies }) :
    this.setState({ movies: filterGenre });
  }

  onBookmarkedChange({ target }) {
    this.setState({ bookmarkedOnly: target.checked });
    const favorite = this.props.movies.filter((e) => e.bookmarked === true);
    return target.checked === true ?
    this.setState({ movies: favorite }) :
    this.setState({ movies: this.props.movies });
  }

  onClick() {
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.onSearchTextChange}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
        />
        <MovieList movies={this.state.movies} />
        <AddMovie onClick={this.onClick} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.element.isRequired };

export default MovieLibrary;
