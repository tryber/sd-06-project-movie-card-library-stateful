import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import FormTitle from './formComponents/FormTitle';
import FormSubtitle from './formComponents/FormSubtitle';
import FormImage from './formComponents/FormImage';
import FormSinopse from './formComponents/FormSinopse';
import FormAvaliacao from './formComponents/FormAvaliacao';
import FormSelect from './formComponents/FormSelect';

class AddMovie extends Component {

  constructor() {
    super();
    this.userInput = this.userInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.resetState = this.resetState.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  userInput({ target }) {
    const name = target.name;
    this.setState({ [name]: target.value });
  }

  resetState() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  handleClick(event) {
    event.preventDefault();
    const { onClick } = this.props;
    this.resetState();
    onClick(this.state);
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form" className="newMovie">
        <FormTitle title={title} callback={this.userInput} />
        <FormSubtitle subtitle={subtitle} callback={this.userInput} />
        <FormImage imagePath={imagePath} callback={this.userInput} />
        <FormSinopse storyline={storyline} callback={this.userInput} />
        <FormAvaliacao rating={rating} callback={this.userInput} />
        <FormSelect genre={genre} callback={this.userInput} />
        <button
          className="addButton"
          data-testid="send-button"
          onClick={this.handleClick}
        >Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };
