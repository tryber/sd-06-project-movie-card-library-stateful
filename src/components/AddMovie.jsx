import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.props.data;
    const { onSelectedInputChange } = this.props;
    const { onClick } = this.props;

    return (
      <fieldset data-testid="title-input-label">

        <label htmlFor="title" data-testid="title-input-label">Título</label>
        <input
          name="title" id="title" type="text" data-testid="title-input"
          onChange={onSelectedInputChange} value={title}
        />

        <label htmlFor="subtitle" data-testid="subtitle-input-label">Subtítulo</label>
        <input
          name="subtitle" id="subtitle" type="text" data-testid="subtitle-input"
          onChange={onSelectedInputChange} value={subtitle}
        />

        <label htmlFor="imagePath" data-testid="image-input-label">Imagem</label>
        <input
          name="imagePath" id="imagePath" type="text" data-testid="image-input"
          onChange={onSelectedInputChange} value={imagePath}
        />

        <label htmlFor="storyline" data-testid="storyline-input-label">Sinopse</label>
        <input
          name="storyline" id="storyline" type="text" data-testid="storyline-input"
          onChange={onSelectedInputChange} value={storyline}
        />

        <label htmlFor="rating" data-testid="rating-input-label">Avaliação</label>
        <input
          name="rating" id="rating" type="text" data-testid="rating-input"
          onChange={onSelectedInputChange} value={rating}
        />

        <Select onSelectedInputChange={onSelectedInputChange} genre={genre} />
      </fieldset>
    )
  }
}

function Select(props) {
  return (
    <div>
      <label htmlFor="genre" data-testid="select-input-label">Gênero</label>
      <select
        name="genre" id="genre" data-testid="select-input"
        onChange={props.onSelectedInputChange} value={props.genre}
      >
        <option data-testid="genre-option" value="action">Ação</option>
        <option data-testid="genre-option" value="comedy">Comédia</option>
        <option data-testid="genre-option" value="thriller">Suspense</option>
      </select>
    </div>
  )

}

AddMovie.propTypes = {
  data: PropTypes.shape({
    onSelectedInputChange: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
  }).isRequired,
};

export default AddMovie;
