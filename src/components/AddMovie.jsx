import React from 'react';
import propType from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleButton = this.handleButton.bind(this);

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
    this.setState({ [name]: target.value });
  }

  handleButton() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  renderSelect() {
    const { genre } = this.state;
    return (
      <div>
        <label data-testid="genre-input-label" htmlFor="genre">
Gênero
          <select
            data-testid="genre-input"
            value={genre}
            onChange={this.handleChange}
            id="genre"
            name="genre"
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
      </div>
    );
  }

  renderInput(labelTitle, labelId, inputName, inputId, state, type) {
    return (
      <label data-testid={labelId} htmlFor={inputName}>
        {labelTitle}
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
    const { title, subtitle, imagePath, storyline, rating } = this.state;
    return (
      <form data-testid="add-movie-form">
        {this.renderInput('Título', 'title-input-label', 'title', 'title-input', title, 'type')};
        {this.renderInput('Subtítulo', 'subtitle-input-label', 'subtitle', 'subtitle-input', subtitle, 'type')};
        {this.renderInput('Imagem', 'image-input-label', 'imagePath', 'image-input', imagePath, 'type')};
        {this.renderInput('Sinopse', 'storyline-input-label', 'storyline', 'storyline-input', storyline, 'textarea')};
        {this.renderInput('Avaliação', 'rating-input-label', 'rating', 'rating-input', rating, 'number')};
        {this.renderSelect()};
        <button data-testid="send-button" onClick={this.handleButton}>Adicionar filme</button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: propType.func.isRequired };

export default AddMovie;
