import PropTypes from 'prop-types';
import React, { Component } from 'react';
import AddMovieComponentPartOne from './AddMovieComponentPartOne';
import AddMovieComponentPartTwo from './AddMovieComponentPartTwo';
import AddMovieComponentPartThree from './AddMovieComponentPartThree';

class AddMovie extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  render() {
    const { onClick } = this.props;
    return (
      <form htmlFor="this-form" data-testid="add-movie-form">
        <AddMovieComponentPartOne
          value={this.state.nome}
          handleChange={this.handleChange} />
        <AddMovieComponentPartTwo
          value={this.state.nome}
          handleChange={this.handleChange} />
        <AddMovieComponentPartThree
        value={this.state.nome}
        handleChange={this.handleChange} />
        <button data-testid="send-button"onClick={onClick}>Adicionar filme</button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
