import React from 'react';
import PropTypes from 'prop-types';

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

    this.handleChange = this.handleChange.bind(this);
    this.handleClickSend = this.handleClickSend.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    this.setState({ [name]: target.value });
  }

  handleClickSend() {
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

  render() {
    return (
      <form data-testid="add-movie-form" htmlFor="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title-input-label">Título
          <input data-testid="title-input" name="title" onChange={this.handleChange} />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">Subtítulo
          <input data-testid="subtitle-input" name="subtitle" onChange={this.handleChange} />
        </label>
        <label data-testid="image-input-label" htmlFor="image-input-label">Imagem
          <input data-testid="image-input" name="image-input" onChange={this.handleChange} />
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline-input-label">Sinopse
          <textarea 
            data-testid="storyline-input" 
            name="storyline-input"
            onChange={this.handleChange}
          />
        </label>
        <label data-testid="rating-input-label" htmlFor="rating-input-label">Avaliação
          <textarea 
            type="number"
            value={this.rating}
            data-testid="rating-input"
            name="rating-input"
            onChange={this.handleChange}
          />
        </label>
        <label data-testid="genre-input-label" htmlFor="genre-input-label">Gênero
          <select data-testid="genre-input" name="genre-input" onChange={this.handleChange}>
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button data-testid="send-button" onClick={this.handleClickSend}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;

AddMovie.defaultProps = { onClick: '' };
AddMovie.propTypes = { onClick: PropTypes.func.isRequired };
