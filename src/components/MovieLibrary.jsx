import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
export default class MovieLibrary extends Component {
  constructor() {
    super();

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    return true;
  }
  
  render() {
    const { movies } = this.props;

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar />
        <MovieList movies={movies}/>
        <AddMovie onClick={this.onClick}/>
      </div>
    );
  }
}

MovieList.propTypes = { movies: PropTypes.shape.isRequired };
