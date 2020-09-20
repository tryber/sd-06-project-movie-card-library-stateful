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
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onBookmarkedChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  onSearchTextChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value }, () => {
      this.filteringSearchChange();
    });
  }

  onBookmarkedChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  onSelectedGenreChange(event) {
    this.setState({ selectedGenre: event.target.value });
    console.log(this);
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
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={this.state.movies} />
        <AddMovie onClick={this.handleClick} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: propTypes.arrayOf(propTypes.object).isRequired };

export default MovieLibrary;
