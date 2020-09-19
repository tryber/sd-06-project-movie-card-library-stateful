import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.returnState = this.returnState.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.fildTitle = this.fildTitle.bind(this);
    this.fildSubTitle = this.fildSubTitle.bind(this);
    this.fildImage = this.fildImage.bind(this);
    this.fieldStoryline = this.fieldStoryline.bind(this);
    this.fieldRating = this.fieldRating.bind(this);
    this.fieldGenre = this.fieldGenre.bind(this);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  returnState() {
    this.props.onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  fildTitle() {
    return (
      <label data-testid="title-input-label" htmlFor="title"> Título
        <input
          className="form-control"
          data-testid="title-input" type="text" name="title" 
          value={this.state.title} onChange={this.handleChange}
        />
      </label>
    );
  }

  fildSubTitle() {
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle"> Subtítulo
        <input
          className="form-control"
          data-testid="subtitle-input" type="text" name="subtitle"
          value={this.state.subtitle} onChange={this.handleChange}
        />
      </label>
    );
  }

  fildImage() {
    return (
      <label data-testid="image-input-label" htmlFor="imagePath"> Imagem
        <input
          className="form-control"
          data-testid="image-input" type="text" name="imagePath"
          value={this.state.imagePath} onChange={this.handleChange}
        />
      </label>
    );
  }

  fieldStoryline() {
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline"> Sinopse
        <textarea
          className="form-control"
          data-testid="storyline-input" type="text" name="storyline"
          value={this.state.storyline} onChange={this.handleChange}
        />
      </label>
    );
  }

  fieldRating() {
    return (
      <label data-testid="rating-input-label" htmlFor="rating"> Avaliação
        <input
          className="form-control"
          data-testid="rating-input" type="number" name="rating"
          value={this.state.rating} onChange={this.handleChange}
        />
      </label>
    );
  }

  fieldGenre() {
    return (
      <label data-testid="genre-input-label" htmlFor="genre"> Gênero
        <select
          data-testid="genre-input" name="genre" className="form-control"
          value={this.state.genre} onChange={this.handleChange}
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <div>
        <form data-testid="add-movie-form" className="form-group">
          {this.fildTitle()}
          {this.fildSubTitle()}
          {this.fildImage()}
          {this.fieldStoryline()}
          {this.fieldRating()}
          {this.fieldGenre()}
          <button
            data-testid="send-button"
            onClick={this.returnState}
          >Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
