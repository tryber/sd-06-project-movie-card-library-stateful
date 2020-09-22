import React, { Component } from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import propTypes from 'prop-types';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.onClick = this.onClick.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }
  onClick(currentState) {
    const { movies } = this.state;
    this.setState(
      () => ({
      movies: [...movies, currentState]
    }))
  }

  render() {
   const { movies } = this.state;
   return (
    <div>
      <SearchBar />
      <AddMovie movies={movies} onClick={this.onClick} />
      <MovieList movies={movies} />
    </div>
  );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieLibrary;