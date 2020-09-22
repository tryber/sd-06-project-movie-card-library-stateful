import React from 'react';
import PropTypes from 'prop-types';


class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.ChangeState = this.ChangeState.bind(this);
    this.GenreItem = this.GenreItem.bind(this);
    this.RatingItem = this.RatingItem.bind(this);
    this.StorylineItem = this.StorylineItem.bind(this);
    this.ImageItem = this.ImageItem.bind(this);
    this.SubtitleItem = this.SubtitleItem.bind(this);
    this.TitleItem = this.TitleItem.bind(this);
    this.ResetState = this.ResetState.bind(this);
    this.RenderMovie = this.RenderMovie.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  ResetState() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  RenderMovie() {
    this.props.onClick(this.state);
    this.ResetState();
  }

  ChangeState({ target }) {
    const { name, value, type, checked } = target;
    this.setState(type === 'checkbox'
      ? { [name]: checked }
      : { [name]: value },
    );
  }

  TitleItem() {
    const { title } = this.state;
    return (
      <label data-testid="title-input-label" htmlFor="title-input">Título
        <input
          id="title-input"
          data-testid="title-input"
          type="text"
          name="title"
          value={title}
          onChange={this.ChangeState}
        />
      </label>
    );
  }

  SubtitleItem() {
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle-input">Subtítulo
        <input
          id="subtitle-input"
          data-testid="subtitle-input"
          type="text"
          name="subtitle"
          value={this.state.subtitle}
          onChange={this.ChangeState}
        />
      </label>
    );
  }

  ImageItem() {
    return (
      <label data-testid="image-input-label" htmlFor="imagePath">Imagem
        <input
          id="imagePath"
          data-testid="image-input"
          type="text"
          name="imagePath"
          value={this.state.imagePath}
          onChange={this.ChangeState}
        />
      </label>
    );
  }

  GenreItem() {
    return (
      <label data-testid="genre-input-label" htmlFor="genre-dropdown">
        Gênero
        <select
          id="genre-dropdown"
          data-testid="genre-input"
          name="genre"
          type="text"
          value={this.state.genre}
          onChange={this.ChangeState}
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  StorylineItem() {
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline">Sinopse
        <input
          id="storyline"
          data-testid="storyline-input"
          type="text"
          name="storyline"
          value={this.state.storyline}
          onChange={this.ChangeState}
        />
      </label>
    );
  }

  RatingItem() {
    return (
      <label data-testid="rating-input-label" htmlFor="rating">Avaliação
        <input
          id="rating"
          data-testid="rating-input"
          type="number"
          name="rating"
          value={this.state.rating}
          onChange={this.ChangeState}
        />
      </label>
    );
  }


  render() {
    const { RenderMovie } = this;
    return (
      <form data-testid="add-movie-form">
        <this.TitleItem /> <br />
        <this.SubtitleItem /> <br />
        <this.ImageItem /> <br />
        <this.StorylineItem /> <br />
        <this.RatingItem /> <br />
        <this.GenreItem />
        <button
          data-testid="send-button"
          type="button"
          onClick={RenderMovie}
        >Adicionar filme</button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
