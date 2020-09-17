// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: '',
    };
  };

  handleChange(e) {
    const { name , value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const onClick = this.props;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label">
          Título
          <input value={this.state.title} data-testid="title-input" name="title" 
          onChange={this.handleChange} type="text" />
        </label>
        <label data-testid="subtitle-input-label">
          Subtítulo
          <input value={this.state.subtitle} data-testid="subtitle-input" name="subtitle"
          onChange={this.handleChange} type="text" />
        </label>
        <label data-testid="image-input-label">
          Imagem
          <input value={this.state.imagePath} data-testid="image-input" name="imagePath"
          onChange={this.handleChange} type="text" />
        </label>
        <label data-testid="storyline-input-label">
          Sinopse
          <textarea value={this.state.storyline} data-testid="storyline-input" name="storyline"
          onChange={this.handleChange} />
        </label>
        <label data-testid="rating-input-label">
          Avaliação
          <input value={this.state.rating} data-testid="rating-input" name="rating"
          onChange={this.handleChange} type="number" />
        </label>
        <label data-testid="genre-input-label">
          Gênero
          <select value={this.state.genre} data-testid="genre-input" name="genre" 
          onChange={this.handleChange}>
            <option value="action" data-testid="genre-option">Ação</option>    
            <option value="comedy" data-testid="genre-option">Comédia</option>    
            <option value="thriller" data-testid="genre-option">Suspense</option>    
          </select>
        </label>
        <button data-testid="send-button" onClick={onClick}>Adicionar filme</button>
      </form>
    )}};

export default AddMovie;
