import React from 'react';
import PropTypes from 'prop-types';
import InputTitle from './InputsAddMovie/InputTitle';
import SelectGenre from './InputsAddMovie/SelectGenre';
import InputSubtitle from './InputsAddMovie/InputSubtitle';
import InputImage from './InputsAddMovie/InputImage';
import InputStoryline from './InputsAddMovie/InputStorylyne';
import InputRating from './InputsAddMovie/InputRating';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleInputs = this.handleInputs.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputs({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.onClick(this.state);

    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <InputTitle title={this.state.title} handleInputs={this.handleInputs} />

        <InputSubtitle subtitle={this.state.subtitle} handleInputs={this.handleInputs} />

        <InputImage imagePath={this.state.imagePath} handleInputs={this.handleInputs} />

        <InputStoryline storyline={this.state.storyline} handleInputs={this.handleInputs} />

        <InputRating rating={this.state.rating} handleInputs={this.handleInputs} />

        <SelectGenre genre={this.state.genre} handleInputs={this.handleInputs} />

        <button onClick={this.handleSubmit} data-testid="send-button">Adicionar filme</button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
