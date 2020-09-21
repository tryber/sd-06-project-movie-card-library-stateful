import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie'
import MovieList from './MovieList'

class MovieLibrary extends Component {


  render() {
    return (
      <div>
        <AddMovie />
        <MovieList movies={this.props.movies}/>
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf.isRequired };

export default MovieLibrary;
