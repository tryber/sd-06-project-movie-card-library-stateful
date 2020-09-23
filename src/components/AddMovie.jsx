import React from 'react';
import propTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.onClickHandler = this.onClickHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
  }
  onChangeHandler({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }


  onClickHandler() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const {
      title,
      subtitle,
      imagePath,
      storyLine,
      rating,
      genre
    } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title-input">
          Título:
          <input
            type="text"
            data-testid="title-input"
            value={title}
            onChange={this.onChangeHandler}
            name="title"
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          Subtítulo:
          <input
            type="text"
            data-testid="subtitle-input"
            value={subtitle}
            onChange={this.onChangeHandler}
            name="subtitle"
          />
        </label>
        <label data-testid="image-input-label" htmlFor="image-input">
          Imagem:
          <input
            type="text"
            data-testid="image-imput"
            value={imagePath}
            onChange={this.onChangeHandler}
            name="imagePath"
          />
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline-input">
          Sinopse:
          <input
            type="text"
            data-testid="storyline-input"
            value={storyLine}
            onChange={this.onChangeHandler}
            name="storyline"
          />
        </label>
        <label data-testid="rating-input-label" htmlFor="rating-input">
          Avaliação:
          <input
            type="text"
            data-testid="rating-input"
            value={rating}
            onChange={this.onChangeHandler}
            min="0"
            max="5"
            name="rating"
          />
        </label>
        <label data-testid="genre-input-label" htmlFor="genre-input">
          Gênero:
          <select
            type="text"
            data-testid="genre-input"
            value={genre}
            onChange={this.onChangeHandler}
            name="genre"
          />
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </label>
        <button type="submit" data-testid="send-button" onClick={this.onClickHandler}>Adicionar filme</button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;