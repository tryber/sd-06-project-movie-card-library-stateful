import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeRating = this.handleChangeRating.bind(this);
    this.reset = this.reset.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
      bookmarked: false,
    };
  }

  handleChange(event, prop) {
    this.setState({ [prop]: event.target.value });
  }

  handleChangeRating(event) {
    this.setState({ rating: Number(event.target.value) });
  }

  rereset(actualState, callOnClick) {
    callOnClick(actualState);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
      bookmarked: false,
    });
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title">
          Título
          <input
            id="title"
            data-testid="title-input"
            value={title}
            onChange={(event) => this.handleChange(event, 'title')}
            type="text"
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="sub">
          Subtítulo
          <input
            id="sub"
            data-testid="subtitle-input"
            value={subtitle}
            onChange={(event) => this.handleChange(event, 'subtitle')}
            type="text"
          />
        </label>
        <label data-testid="image-input-label" htmlFor="img">
          Imagem
          <input
            id="img"
            data-testid="image-input"
            value={imagePath}
            onChange={(event) => this.handleChange(event, 'imagePath')}
            type="text"
          />
        </label>
        <label data-testid="storyline-input-label" htmlFor="sin">
          Sinopse
          <input
            id="sin"
            data-testid="storyline-input"
            value={storyline}
            onChange={(event) => this.handleChange(event, 'storyline')}
            type="textarea"
          />
        </label>
        <label data-testid="rating-input-label" htmlFor="aval">
          Avaliação
          <input
            id="aval"
            data-testid="rating-input"
            value={rating}
            onChange={this.handleChangeRating}
            type="number"
          />
        </label>
        <label data-testid="genre-input-label" htmlFor="select">
          Gênero
          <select
            data-testid="genre-input"
            name="select"
            value={genre}
            onChange={(event) => this.handleChange(event, 'genre')}
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button
          type="button"
          data-testid="send-button"
          onClick={() => this.reset(this.state, onClick)}
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
