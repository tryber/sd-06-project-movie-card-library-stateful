import React from 'react';

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
  
  renderFirstPart() {
    return (
      <div>
        <label data-testid="title-input-label" htmlFor="title">
          Título
          <input
            value={this.state.title} data-testid="title-input" name="title"
            onChange={this.handleChange} type="text" id="title"
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle">
          Subtítulo
          <input
            value={this.state.subtitle} data-testid="subtitle-input" name="subtitle"
            onChange={this.handleChange} type="text" id="subtitle"
          />
        </label>
        <label data-testid="image-input-label" htmlFor="img">
          Imagem
          <input
            value={this.state.imagePath} data-testid="image-input" name="imagePath"
            onChange={this.handleChange} type="text" id="img"
          />
        </label>
      </div>
    );
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
      <form data-testid="add-movie-form">
        {this.renderFirstPart()}
        <label data-testid="storyline-input-label" htmlFor="sinopse">
          Sinopse
          <textarea
            value={this.state.storyline} data-testid="storyline-input" name="storyline"
            onChange={this.handleChange} id="sinopse"
          />
        </label>
        <label data-testid="rating-input-label" htmlFor="aval">
          Avaliação
          <input
            value={this.state.rating} data-testid="rating-input" name="rating"
            onChange={this.handleChange} type="number" id="aval"
          />
        </label>
        <label data-testid="genre-input-label" htmlFor="select">
          Gênero
          {this.renderSelect()}
        </label>
        <button data-testid="send-button" onClick={onClick}>Adicionar filme</button>
      </form>
    );
  }
}
export default AddMovie;
