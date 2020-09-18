import React from 'react';
import propTypes from 'prop-types';

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

    this.onChange = this.props.onChange.bind(this);
  }

  onChange({ target }) {
    const { name } = target;

    this.setState({ [name]: target.value });
  }

  renderTitleInput() {
    return (
      <div>
        <label
          htmlFor="title-input"
          data-testid="title-input-label"
        >Título
        </label>
        <input
          type="text"
          value={this.props.title}
          onChange={this.props.onChange}
          data-testid="title-input"
        />
      </div>
    );
  }

  renderSubtitleInput() {
    return (
      <div>
        <label
          htmlFor="subtitle-input"
          data-testid="subtitle-input-label"
        >Subtítulo
        </label>
        <input
          type="text"
          value={this.props.subtitle}
          onChange={this.props.onChange}
          data-testid="subtitle-input"
        />
      </div>
    );
  }

  renderImageInput() {
    return (
      <div>
        <label
          htmlFor="image-input"
          data-testid="image-input-label"
        >Imagem
        </label>
        <input
          type="text"
          value={this.props.imagePath}
          onChange={this.props.onChange}
          data-testid="image-input"
        />
      </div>
    );
  }

  renderStorylineTextarea() {
    return (
      <div>
        <label
          htmlFor="storyline-input"
          data-testid="storyline-input-label"
        >Sinopse
        </label>
        <input
          type="text"
          value={this.props.storyline}
          onChange={this.props.onChange}
          data-testid="storyline-input"
        />
      </div>
    );
  }

  renderRantingInput() {
    return (
      <div>
        <label
          htmlFor="rating-input"
          data-testid="rating-input-label"
        >Avaliação
        </label>
        <input
          type="number"
          value={this.props.rating}
          onChange={this.props.onChange}
          data-testid="rating-input"
        />
      </div>
    );
  }

  renderGenderSelect() {
    return (
      <div>
        <label
          htmlFor="genre-input"
          data-testid="genre-input-label"
        >Gênero
        </label>
        <select
          value={this.props.genre}
          onChange={this.props.onChange}
          data-testid="genre-input"
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </div>
    );
  }

  renderButton() {
    return (
      <div>
        <button
          data-testid="send-button"
          onClick={this.props.onClick}
        >Adicionar filme
        </button>
      </div>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        {this.renderTitleInput()}
        {this.renderSubtitleInput()}
        {this.renderImageInput()}
        {this.renderStorylineTextarea()}
        {this.renderRantingInput()}
        {this.renderGenderSelect()}
        {this.renderButton()}
      </form>
    );
  }
}

AddMovie.defaultProps = {
  title: '',
  subtitle: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
  onChange: () => {},
  onClick: () => {},
};

AddMovie.propTypes = {
  title: propTypes.string,
  subtitle: propTypes.string,
  imagePath: propTypes.string,
  storyline: propTypes.string,
  rating: propTypes.number,
  genre: propTypes.string,
  onChange: propTypes.func,
  onClick: propTypes.func,
};

export default AddMovie;
