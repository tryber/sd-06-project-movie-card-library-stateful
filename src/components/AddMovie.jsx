import React, { Component } from 'react';

import Input from './Input';
import TextAreaInput from './TextAreaInput';
import SelectInput from './SelectInput';

export default class AddMovie extends Component {
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

    this.handleChange = this.handleChange.bind(this);
    this.renderInput = this.renderInput.bind(this);
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  renderInput(name, id, value, labelText, type = 'text') {
    return name === 'storyline' ? (
      <TextAreaInput
        name={name}
        id={id}
        value={value}
        onChange={this.handleChange}
        labelText={labelText}
      />
    ) : (
      <Input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={this.handleChange}
        labelText={labelText}
      />
    );
  }

  render() {
    // const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        {this.renderInput('title', 'title-input', this.state.title, 'Título')}
        {this.renderInput('subtitle', 'subtitle-input', this.state.subtitle, 'Subtítulo')}
        {this.renderInput('imagePath', 'image-input', this.state.imagePath, 'Imagem')}
        {this.renderInput('storyline', 'storyline-input', this.state.storyline, 'Sinopse')}
        {this.renderInput('rating', 'rating-input', this.state.rating, 'Avaliação', 'number')}
        <SelectInput
          name="genre"
          id="genre-input"
          value={this.state.genre}
          onChange={this.handleChange}
          labelText="Gênero"
          addMovie={1}
        />
      </form>
    );
  }
}
