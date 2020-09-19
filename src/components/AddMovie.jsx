import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import AddMovieTitle from './AddMovieFormInputs/AddMovieTitle';
import AddMovieSubtitle from './AddMovieFormInputs/AddMovieSubtitle';
import AddMovieImagePath from './AddMovieFormInputs/AddMovieImagePath';
import AddMovieStoryline from './AddMovieFormInputs/AddMovieStoryline';
import AddMovieRating from './AddMovieFormInputs/AddMovieRating';
import AddMovieGenre from './AddMovieFormInputs/AddMovieGenre';
import AddMovieButton from './AddMovieFormInputs/AddMovieButton';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }
  }
  render() {
    return (
      <form className="add-movie-form" data-testid="add-movie-form">
        <AddMovieTitle />
        <AddMovieSubtitle />
        <AddMovieImagePath />
        <AddMovieStoryline />
        <AddMovieRating />
        <AddMovieGenre />
        <AddMovieButton />

      </form>
    );
  }
}

export default AddMovie;
