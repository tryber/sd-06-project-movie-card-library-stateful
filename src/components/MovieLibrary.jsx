import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor() {
    super();
  }

  handleClick(newMovie) {
    this.setState({ movies: this.state.movies.concat(newMovie) });
  }


  render() {
    return (
      <div>
        <AddMovie onClick={this.handleClick} />
        <MovieList movies={this.props.movies} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf.isRequired };

export default MovieLibrary;
