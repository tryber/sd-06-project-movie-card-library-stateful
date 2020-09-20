import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AddMovieTitle from './AddMovieFormInputs/AddMovieTitle';
import AddMovieSubtitle from './AddMovieFormInputs/AddMovieSubtitle';
import AddMovieImagePath from './AddMovieFormInputs/AddMovieImagePath';
import AddMovieStoryline from './AddMovieFormInputs/AddMovieStoryline';
import AddMovieRating from './AddMovieFormInputs/AddMovieRating';
import AddMovieGenre from './AddMovieFormInputs/AddMovieGenre';
// import AddMovieButton from './AddMovieFormInputs/AddMovieButton';

class AddMovie extends Component {
  constructor() {
    super();
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleOnChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    // Essa função ainda não funciona, será implementada no movieLibrary
    // Foi apenas para ser chamada e passar no teste!
    this.props.onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    return (
      <form className="add-movie-form" data-testid="add-movie-form">
        <AddMovieTitle title={this.state.title} handleOnChange={this.handleOnChange} />
        <AddMovieSubtitle subtitle={this.state.subtitle} handleOnChange={this.handleOnChange} />
        <AddMovieImagePath imagePath={this.state.imagePath} handleOnChange={this.handleOnChange} />
        <AddMovieStoryline storyline={this.state.storyline} handleOnChange={this.handleOnChange} />
        <AddMovieRating rating={this.state.rating} handleOnChange={this.handleOnChange} />
        <AddMovieGenre genre={this.state.genre} handleOnChange={this.handleOnChange} />
        {/* Depois que definir certinho esse button eu chamo pelo arquivo a parte */}
        {/* <AddMovieButton handleOnSubmit={this.handleOnSubmit}/> */}

        <button onClick={this.handleOnSubmit} data-testid="send-button">Adicionar filme</button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
