import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.props.data;
    const { onSelectedInputChange } = this.props;
    /* const { onClick } = this.props; */

    return (
      <fieldset data-testid="title-input-label">
        <Title onSelectedInputChange={onSelectedInputChange} title={title} />
        <Subtitle onSelectedInputChange={onSelectedInputChange} subtitle={subtitle} />
        <Image onSelectedInputChange={onSelectedInputChange} imagePath={imagePath} />
        <Storyline onSelectedInputChange={onSelectedInputChange} storyline={storyline} />
        <Rating onSelectedInputChange={onSelectedInputChange} rating={rating} />
        <Select onSelectedInputChange={onSelectedInputChange} genre={genre} />
      </fieldset>
    );
  }
}

function Title(props) {
  return (
    <div>
      <label htmlFor="title" data-testid="title-input-label">Título</label>
      <input
        name="title" id="title" type="text" data-testid="title-input"
        onChange={props.onSelectedInputChange} value={props.title}
      />
    </div>
  );
}

function Subtitle(props) {
  return (
    <div>
      <label htmlFor="subtitle" data-testid="subtitle-input-label">Subtítulo</label>
      <input
        name="subtitle" id="subtitle" type="text" data-testid="subtitle-input"
        onChange={props.onSelectedInputChange} value={props.subtitle}
      />
    </div>
  );
}

function Image(props) {
  return (
    <div>
      <label htmlFor="imagePath" data-testid="image-input-label">Imagem</label>
      <input
        name="imagePath" id="imagePath" type="text" data-testid="image-input"
        onChange={props.onSelectedInputChange} value={props.imagePath}
      />
    </div>
  );
}

function Storyline(props) {
  return (
    <div>
      <label htmlFor="storyline" data-testid="storyline-input-label">Sinopse</label>
      <input
        name="storyline" id="storyline" type="text" data-testid="storyline-input"
        onChange={props.onSelectedInputChange} value={props.storyline}
      />
    </div>
  );
}

function Rating(props) {
  return (
    <div>
      <label htmlFor="rating" data-testid="rating-input-label">Avaliação</label>
      <input
        name="rating" id="rating" type="text" data-testid="rating-input"
        onChange={props.onSelectedInputChange} value={props.rating}
      />
    </div>
  );
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
  );
}

AddMovie.propTypes = {
  onSelectedInputChange: PropTypes.func.isRequired,

  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
  }).isRequired,
};

Title.propTypes = {
  onSelectedInputChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

Subtitle.propTypes = {
  onSelectedInputChange: PropTypes.func.isRequired,
  subtitle: PropTypes.string.isRequired,
};

Image.propTypes = {
  onSelectedInputChange: PropTypes.func.isRequired,
  imagePath: PropTypes.string.isRequired,
};

Storyline.propTypes = {
  onSelectedInputChange: PropTypes.func.isRequired,
  storyline: PropTypes.string.isRequired,
};

Rating.propTypes = {
  onSelectedInputChange: PropTypes.func.isRequired,
  rating: PropTypes.string.isRequired,
};

Select.propTypes = {
  onSelectedInputChange: PropTypes.func.isRequired,
  genre: PropTypes.string.isRequired,
};

export default AddMovie;
