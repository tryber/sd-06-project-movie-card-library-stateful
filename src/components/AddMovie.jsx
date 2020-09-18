import React from 'react';
import '../App.css';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: '',
    };
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  renderSelect() {
    return (
      <select
        value={this.state.genre} data-testid="genre-input" name="genre"
        onChange={this.handleChange}
      >
        <option value="action" data-testid="genre-option">Ação</option>
        <option value="comedy" data-testid="genre-option">Comédia</option>
        <option value="thriller" data-testid="genre-option">Suspense</option>
      </select>
    );
  }

  render() {
    const onClick = this.props;
    return (
      <form className="addMovie" data-testid="add-movie-form">
        <div className="labels">
          <label data-testid="title-input-label" htmlFor="title">
            Título
          </label><br />
          <label data-testid="subtitle-input-label" htmlFor="subtitle">
            Subtítulo
          </label><br />
          <label data-testid="image-input-label" htmlFor="img">
            Imagem
          </label><br />
          <label data-testid="storyline-input-label" htmlFor="sinopse">
            Sinopse
          </label><br /><br />
          <label data-testid="rating-input-label" htmlFor="aval">
            Avaliação
          </label><br />
          <label data-testid="genre-input-label" htmlFor="select">
            Gênero
          </label>
        </div>

        <div className="inputs">
          <input
            value={this.state.title} data-testid="title-input" name="title"
            onChange={this.handleChange} type="text" id="title" className="tipoInput"
          /><br />
          <input
            value={this.state.subtitle} data-testid="subtitle-input" name="subtitle"
            onChange={this.handleChange} type="text" id="subtitle" className="tipoInput"
          /><br />
          <input
            value={this.state.imagePath} data-testid="image-input" name="imagePath"
            onChange={this.handleChange} type="text" id="img" className="tipoInput"
          /><br />
          <textarea
            value={this.state.storyline} data-testid="storyline-input" name="storyline"
            onChange={this.handleChange} id="sinopse" className="tipoInput"
          /><br />
          <input
            value={this.state.rating} data-testid="rating-input" name="rating"
            onChange={this.handleChange} type="number" id="aval" className="tipoInput"
          />
          <select
            value={this.state.genre} data-testid="genre-input" name="genre"
            onChange={this.handleChange} className="tipoInput"
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </div>
        <button className="btnAdicionar" data-testid="send-button" onClick={onClick}>
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
