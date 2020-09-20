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
    this.onChange = this.onChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  onChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, () => this.filteringSearchChange());
  }

  handleClick(newMovie) {
    this.setState({ movies: this.state.movies.concat(newMovie) });
  }

  filteringSearchChange() {
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.onChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.onChange}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.onChange}
        />
        <MovieList movies={this.state.movies} />
        <AddMovie onClick={this.handleClick} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: propTypes.arrayOf(propTypes.object).isRequired };

export default MovieLibrary;
