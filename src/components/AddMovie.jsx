// implement AddMovie component here
import React, { Component } from 'react';

class AddMovie extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this)

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({target}) {
    const {name} = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    })
  }
  
  render() {
    const { onClick } = this.props;
    return (
    <form>
      <label data-testid="title-input-label">
        Título
        <input data-testid="title-input" onChange={this.handleChange}
        value={this.state.title} type="text" name="title"/>
      </label>
      <label data-testid="subtitle-input-label">
       Subtítulo
        <input data-testid="subtitle-input" onChange={this.handleChange}
        value={this.state.subtitle} type="text" name="subtitle"/>
      </label>
      <label data-testid="image-input-label">
       Imagem
        <input data-testid="image-input" onChange={this.handleChange}
        value={this.state.imagePath} type="text" name="imagePath"/>
      </label>
      <label data-testid="storyline-input-label">
        Sinopse
        <textarea data-testid="storyline-input" onChange={this.handleChange}
        value={this.state.storyline} type="text" name="storyline"/>
      </label>
      <label data-testid="rating-input-label">
        Avaliação
        <input data-testid="rating-input" onChange={this.handleChange}
        value={this.state.rating} type="number" name="rating"/>
      </label>
      <label data-testid="rating-input-label">
        Gênero
        <select value={this.state.genre} data-testid="genre-input" 
        onChange={this.handleChange} name="genre">
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
      <button data-testid="send-button"
      onClick={onClick}>Adicionar filme</button>  
    </form>
    );
  }
}

export default AddMovie;