import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.initialState = this.initialState.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.selectRender = this.selectRender.bind(this);
    this.titleRender = this.titleRender.bind(this);
    this.subtitleRender = this.subtitleRender.bind(this);
    this.imageRender = this.imageRender.bind(this);
    this.storylineRender = this.storylineRender.bind(this);
    this.ratingRender = this.ratingRender.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  onChange({ target: { value, name } }) {
    this.setState({ [name]: value });
  }

  initialState() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  handleClick() {
    const { state, initialState } = this;
    const { onClick } = this.props;
    onClick(state);
    initialState();
  }

  selectRender() {
    const { genre } = this.props;
    const { onChange } = this;
    return (
      <select
        name="genre" id="genre-input" data-testid="genre-input" value={genre}
        onChange={onChange}
      >
        <option data-testid="genre-option" value="action">Ação</option>
        <option data-testid="genre-option" value="comedy">Comédia</option>
        <option data-testid="genre-option" value="thriller">Suspense</option>
      </select>
    );
  }

  titleRender() {
    const { title } = this.state;
    const { onChange } = this;
    return (
      <input
        type="text" name="title" id="title-input" value={title}
        data-testid="title-input" onChange={onChange}
      />
    );
  }

  subtitleRender() {
    const { subtitle } = this.state;
    const { onChange } = this;
    return (
      <input
        type="text" name="subtitle" id="subtitle-input" value={subtitle}
        data-testid="subtitle-input" onChange={onChange}
      />
    );
  }

  imageRender() {
    const { imagePath } = this.state;
    const { onChange } = this;
    return (
      <input
        type="text" name="imagePath" id="image-input" value={imagePath}
        data-testid="image-input" onChange={onChange}
      />
    );
  }

  storylineRender() {
    const { storyline } = this.state;
    const { onChange } = this;
    return (
      <textarea
        name="storyline" id="storyline-input" cols="30" value={storyline}
        rows="10" data-testid="storyline-input" onChange={onChange}
      />
    );
  }

  ratingRender() {
    const { rating } = this.state;
    const { onChange } = this;
    return (
      <input
        type="number" name="rating" id="rating-input" value={rating}
        data-testid="rating-input" onChange={onChange}
      />
    );
  }

  render() {
    const { handleClick, selectRender, titleRender, subtitleRender } = this;
    const { imageRender, storylineRender, ratingRender } = this;
    return (
      <form data-testid="add-movie-form" action="">
        <label data-testid="title-input-label" htmlFor="title-input">Título</label>
        {titleRender()}
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">Subtítulo</label>
        {subtitleRender()}
        <label data-testid="image-input-label" htmlFor="image-input">Imagem</label>
        {imageRender()}
        <label data-testid="storyline-input-label" htmlFor="storyline-input">Sinopse</label>
        {storylineRender()}
        <label data-testid="rating-input-label" htmlFor="rating-input">Avaliação</label>
        {ratingRender()}
        <label data-testid="genre-input-label" htmlFor="genre-input">Gênero</label>
        {selectRender()}
        <button data-testid="send-button" onClick={handleClick}>Adicionar filme</button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
  genre: PropTypes.string.isRequired,
};

export default AddMovie;
