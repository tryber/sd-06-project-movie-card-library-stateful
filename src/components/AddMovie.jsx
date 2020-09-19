import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import AddMovieTitle from './AddMovieFormInputs/AddMovieTitle';
import AddMovieSubtitle from './AddMovieFormInputs/AddMovieSubtitle';
import AddMovieImagePath from './AddMovieFormInputs/AddMovieImagePath';
import AddMovieStoryline from './AddMovieFormInputs/AddMovieStoryline';
import AddMovieRating from './AddMovieFormInputs/AddMovieRating';
import AddMovieGenre from './AddMovieFormInputs/AddMovieGenre';

class AddMovie extends Component {
  render() {
    return (
      <form className="add-movie-form" data-testid="add-movie-form">
        {/* <AddMovie /> */}
        {/* <AddMovieSubtitle /> */}
      </form>
    );
  }
}

export default AddMovie;
