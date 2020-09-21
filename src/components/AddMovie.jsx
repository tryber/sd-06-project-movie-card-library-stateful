import React from 'react';
import Proptypes from 'prop-types';


class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleRatingChange = this.handleRatingChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState(({ [name]: value }));
  }

  handleRatingChange({ name, value = 0 }) {
    this.setState(({ [name]: value }));
  }

  inputTitle() {
    return (
      <input
        type="text"
        data-testid="title-input"
        name="title"
        onChange={(event) => this.handleChange(event)}
      />
    );
  }

  render() {
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title-input-label">
          Título:
          {this.inputTitle()}
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input-label">
            Subtítulo:
          <input
            type="text"
            data-testid="subtitle-input"
            name="subtitle"
            onChange={(event) => this.handleChange(event)}
          />
        </label>
        <label data-testid="image-input-label" htmlFor="image-input-label">
            Imagem:
          <input
            type="text"
            data-testid="image-input"
            name="imagePath"
            onChange={(event) => this.handleChange(event)}
          />
        </label>

        <label data-testid="storyline-input-label" htmlFor="storyline-input-label">
            Sinopse:
          <input
            name="storyline"
            type="textarea"
            data-testid="storyline-input"
            onChange={(event) => this.handleChange(event)}
          />
        </label>
        <label data-testid="rating-input-label" htmlFor="rating-input-label">
            Avaliação:
          <input
            name="rating"
            type="number"
            defaultValue="0"
            data-testid="rating-input"
            onChange={(event) => this.handleRatingChange(event.target)}
          />
        </label>
        <label data-testid="genre-input-label" htmlFor="genre-input-label">
            Gênero:
          <select
            name="genre"
            data-testid="genre-input"
            onChange={(event) => this.handleChange(event)}
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button
          type="submit"
          value="Enviar"
          data-testid="send-button"
          onClick={(event) => {
            event.preventDefault();
            const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
            const inputs = document.querySelectorAll('input');
            const select = document.querySelector('select');
            inputs.forEach((input) => {
              const formInput = input;
              if (input.type !== 'number') {
                formInput.value = '';
              } else {
                formInput.value = '0';
              }
            });
            select.value = 'action';
            onClick({
              title,
              subtitle,
              storyline,
              rating,
              imagePath,
              genre,
            });
            this.setState({
              subtitle: '',
              title: '',
              imagePath: '',
              storyline: '',
              rating: 0,
              genre: 'action',
            });
          }}
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: Proptypes.func.isRequired };

export default AddMovie;
