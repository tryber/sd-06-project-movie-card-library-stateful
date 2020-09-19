import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.updateState = this.updateState.bind(this);
    this.sendButton = this.sendButton.bind(this);

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  updateState({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  sendButton() {
    const { onClick } = this.props;
    onClick();

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
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const { updateState, sendButton } = this;
    return (
      <form data-testid="add-movie-form">
        <div>
          <label htmlFor="title-input" data-testid="title-input-label">
            Título
            <input
              data-testid="title-input"
              type="text"
              name="title"
              onChange={updateState}
              value={title}
            />
          </label>
        </div>

        <div>
          <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
            Subtítulo
            <input
              data-testid="subtitle-input"
              type="text"
              name="subtitle"
              onChange={updateState}
              value={subtitle}
            />
          </label>
        </div>

        <div>
          <label htmlFor="image-input" data-testid="image-input-label">
            Imagem
            <input
              data-testid="image-input"
              type="text"
              name="imagePath"
              onChange={updateState}
              value={imagePath}
            />
          </label>
        </div>

        <div>
          <label htmlFor="storyline-input" data-testid="storyline-input-label">
            Sinopse
            <textarea
              data-testid="storyline-input"
              name="storyline"
              onChange={updateState}
              value={storyline}
            />
          </label>
        </div>

        <div>
          <label htmlFor="rating-input" data-testid="rating-input-label">
            Avaliação
            <input
              data-testid="rating-input"
              type="number"
              name="rating"
              onChange={updateState}
              value={rating}
            />
          </label>
        </div>

        <div>
          <label htmlFor="genre-input" data-testid="genre-input-label">
            Gênero
            <select data-testid="genre-input" name="genre" onChange={updateState} value={genre}>
              <option data-testid="genre-option" value="action">Ação</option>
              <option data-testid="genre-option" value="comedy">Comédia</option>
              <option data-testid="genre-option" value="thriller">Suspense</option>
            </select>
          </label>
        </div>

        <div>
          <button
            data-testid="send-button"
            type="submit"
            onClick={sendButton}
          >
            Adicionar filme
          </button>
        </div>
      </form>
    );
  }
}

export default AddMovie;
AddMovie.defaultProps = { onClick: PropTypes.func };
AddMovie.propTypes = { onClick: PropTypes.func };
