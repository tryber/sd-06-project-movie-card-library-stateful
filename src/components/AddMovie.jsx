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

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  buttonClick(event) {
    this.setState({ 
      title: event.target.value,
      subtitle: event.target.value,
      imagePath: event.target.value,
      storyline: event.target.value,
      rating: event.target.value,
      genre: event.target.value,
     });
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
          onChange={this.props.handleChange}
          data-testid="title-input"
        />
      </div>
    )
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
          onChange={this.props.handleChange}
          data-testid="subtitle-input"
        />
      </div>
    )
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
          onChange={this.props.handleChange}
          data-testid="image-input"
        />
      </div>
    )
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
          onChange={this.props.handleChange}
          data-testid="storyline-input"
        />
      </div>
    )
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
          onChange={this.props.handleChange}
          data-testid="rating-input"
        />
      </div>
    )
  }

  renderGenderSelect() {
    return (
      <div>
        <label
          data-testid="genre-input-label"
        >Gênero
        </label>
        <select
          value={this.props.genre}
          onChange={this.props.handleChange}
          data-testid="genre-input"
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </div>
    )
  }

  renderButton() {
    return (
      <div>
        <button
          data-testid="send-button"
          onClick={this.props.buttonClick}
        >Adicionar filme

        </button>
      </div>
    )
  }

  render() {
    return (
      <div>
        <form data-testid="">
          {this.renderTitleInput()}
          {this.renderSubtitleInput()}
          {this.renderImageInput()}
          {this.renderStorylineTextarea()}
          {this.renderRantingInput()}
          {this.renderGenderSelect()}
          {this.renderButton()}
        </form>
      </div>
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
};

AddMovie.propTypes = {
  title: propTypes.string,
  subtitle: propTypes.string,
  imagePath: propTypes.string,
  storyline: propTypes.string,
  rating: propTypes.number,
  genre: propTypes.string,
  onChange: propTypes.func,
};

export default AddMovie;