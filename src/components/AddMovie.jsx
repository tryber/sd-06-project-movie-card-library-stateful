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
      <label data-testid={labelId} htmlFor={inputName}>{labelTitle}
        <input
          data-testid={inputId}
          name={inputName}
          type={type}
          value={state}
          onChange={this.handleChange}
          id={inputName}
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
        <label data-testid='genre-input-label' htmlFor='genre'>Gênero
          <select
          data-testid='genre-input'
          value={this.state.genre}
          onChange={this.handleChange}
          id='genre'
          name='genre'
          >
            <option data-testid='genre-option' value='action'>Ação</option>
            <option data-testid='genre-option' value='comedy'>Comédia</option>
            <option data-testid='genre-option' value='thriller'>Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default AddMovie;
