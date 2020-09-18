import React from 'react';

class AddMovie extends React.Component {
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
    const name = target.name;
    this.setState({ [name]: target.value });
  }
  renderInput(labelTitle, labelId, inputName, inputId, state, type) {
    return (
      <label data-testid={labelId}>{labelTitle}
        <input
          data-testid={inputId}
          name={inputName}
          type={type}
          value={state}
          onChange={this.handleChange}
        />
      </label>
    );
  }
  render() {
    return (
      <form data-testid='add-movie-form'>
        {this.renderInput('Título', 'title-input-label', 'title', 'title-input', this.state.title, 'type')};
        {this.renderInput('Subtítulo', 'subtitle-input-label', 'subtitle', 'subtitle-input', this.state.subtitle, 'type')};
        {this.renderInput('Imagem', 'image-input-label', 'imagePath', 'image-input', this.state.imagePath, 'type')};
        {this.renderInput('Sinopse', 'storyline-input-label', 'storyline', 'storyline-input', this.state.storyline, 'textarea')};
        {this.renderInput('Avaliação', 'rating-input-label', 'rating', 'rating-input', this.state.rating, 'number')};
      </form>
    );
  }
}

export default AddMovie;
